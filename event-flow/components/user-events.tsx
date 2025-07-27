"use client"

import React, { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

type EventCardProps = {
  title: string,
  location?: string,
  max_reg?: number,
  description? : string,
  date?: string
}

const EventCard = (props: EventCardProps) => {

  return(
  <div className="p-2 rounded border">
            <strong>{props.title}</strong>  {props.date}
    </div>
  )
}

const UserEvents = () => {
  const supabase = createClient()
  const [events, setEvents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserAndEvents = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser()

      if (userError) {
        console.error("Error fetching user:", userError.message)
        setLoading(false)
        return
      }

      if (!user) {
        console.log("No user logged in")
        setLoading(false)
        return
      }

      const { data: userEvents, error: eventsError } = await supabase
        .from("Events")
        .select("*")
        .eq("created_by", user.id) // adjust the field name to match your schema

      if (eventsError) {
        console.error("Error fetching events:", eventsError.message)
      } else {
        console.log(userEvents);
        setEvents(userEvents || [])
      }

      setLoading(false)
    }

    fetchUserAndEvents()
  }, [])

  if (loading) return <div>Loading events...</div>

  if (!events.length) return <div>No events found for this user.</div>

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-4 gap-4">
        {events.map((event) => (
          <EventCard title={event.event_name} date={event.event_date} />
        ))}
      </div>
  )
}

export default UserEvents
