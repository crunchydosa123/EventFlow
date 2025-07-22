import { supabase } from '@/lib/supabase';
import { NextResponse, NextRequest } from 'next/server';
import { getAuth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  const { userId } = getAuth(req);
  const body = await req.json();
  console.log('Received body:', body);

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { event_name, date, location } = body;

  const { data, error } = await supabase
    .from('Events')
    .insert([{ event_name, event_date: date, location, created_by: userId }])
    .select()
    .single();

  if (error) {
    console.error('Supabase error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ id: data.id }, { status: 200 });
}