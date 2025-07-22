import React from 'react'
import EventCard from './EventCard';
import Link from 'next/link';

type Props = {}
type Event = {
  event_name: string;
  id: string;
  registered: string;
}

const events: Event[] = [
  { event_name: 'Event 1', id: '1', registered: '100' },
  { event_name: 'Event 1', id: '1', registered: '100' },
  { event_name: 'Event 1', id: '1', registered: '100' },
  { event_name: 'Event 1', id: '1', registered: '100' },
  { event_name: 'Event 1', id: '1', registered: '100' },
]

const page = (props: Props) => {
  return (
    <div className='w-screen h-screen flex'>
      <div className='border border-gray-300 w-1/5 h-full p-4'>
        <div className='flex flex-col'>
          <p>EventFlow</p>
          <button>Events</button>
          <button>Forms</button>
          <button>Tickets</button>
        </div>
      </div>

      <div className='w-4/5 h-full bg-green-300 p-4 flex flex-col'>
        <p>BreadCrumb / BreadCrumb</p>
        <div className='w-full flex justify-between items-center'>
          <h1 className='mt-4 font-bold'>Your Events</h1>
          <Link href="/create-event">
            <button>Create an Event</button>
          </Link>
        </div>

        <div className='w-full grid grid-cols-4 gap-2 mt-3'>
          {events.map(event => (
            <EventCard key={event.id} event_name={event.event_name} id={event.id} registered={event.registered} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default page