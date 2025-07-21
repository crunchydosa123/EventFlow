import React from 'react'

type Props = {}

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
        <h1 className='mt-4 font-bold'>Your Events</h1>
        <div className='w-full grid grid-cols-4 gap-2 mt-3'>
          <div className='p-3 bg-white rounded-md border border-gray-400 flex flex-col'>
            <p>Event Name</p>
            <p>123 Registered</p>
            <button>View Event</button>
          </div>

          <div className='p-3 bg-white rounded-md border border-gray-400 flex flex-col'>
            <p>Event Name</p>
            <p>123 Registered</p>
            <button>View Event</button>
          </div>

          <div className='p-3 bg-white rounded-md border border-gray-400 flex flex-col'>
            <p>Event Name</p>
            <p>123 Registered</p>
            <button>View Event</button>
          </div>

          <div className='p-3 bg-white rounded-md border border-gray-400 flex flex-col'>
            <p>Event Name</p>
            <p>123 Registered</p>
            <button>View Event</button>
          </div>

          <div className='p-3 bg-white rounded-md border border-gray-400 flex flex-col'>
            <p>Event Name</p>
            <p>123 Registered</p>
            <button>View Event</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default page