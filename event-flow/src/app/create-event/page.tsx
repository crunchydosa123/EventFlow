'use client'; // Needed for state and event handling in App Router

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function page() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify({ title, date, location }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      const { id } = await res.json();
      router.push(`/events/${id}`);
    } else {
      alert('Error creating event');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Create Event</h2>

      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded p-2"
        required
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full border rounded p-2"
        required
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full border rounded p-2"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
      >
        Create Event
      </button>
    </form>
  );
}
