import React from 'react'
import { CalendarIcon } from '@heroicons/react/solid'
export default function TestimonyCard({name, profilePic,createdAt,desc,id }) {
  return (
    <div className = 'flex flex-col justify-start items-center space-y-4 mr-5 hover:shadow-2xl rounded-lg p-10 relative transition-all duration-300 ease-in-out'>
        <h2 className = 'text-4xl font-bold first-letter:text-[#4ECCA3]'>{name}</h2>
        <div className = 'flex items-center space-x-4'>
        <CalendarIcon className = 'w-8 text-green-400'/>
        <p className = 'text-green-300 font-light'>{new Date(createdAt).toDateString()}</p>
        </div>
        <p className = 'text-lg font-light p-10' >{desc}</p>
          <div className = 'bg-gradient-to-br from-green-500 to-blue-200 p-1 rounded-full'>
            <img src={profilePic} alt=""  className = 'rounded-full w-20 h-20 object-cover shadow-md'/>
          </div>
    </div>
  )
}
