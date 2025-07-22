import React from 'react'
import Link from 'next/link'

type Props = {
  event_name: string;
  id: string;
  registered: string;
}

const EventCard = (props: Props) => { 
  return (
    <div className='p-3 bg-white rounded-md border border-gray-400 flex flex-col'>
      <p>{props.event_name}</p>
      <p>{props.registered}</p>
      <Link href={`/event/${props.id}`}>
        <button className=''>View Event</button>
      </Link>
    </div>
  )
}

export default EventCard