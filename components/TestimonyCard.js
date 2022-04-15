import React from 'react'
import { CalendarIcon } from '@heroicons/react/solid'
export default function TestimonyCard() {
  return (
    <div className = 'flex flex-col justify-start items-center space-y-4 mr-5 hover:shadow-2xl rounded-lg p-10 relative'>
        <h2 className = 'text-4xl font-bold first-letter:text-[#4ECCA3]'>Yonatan</h2>
        <div className = 'flex items-center space-x-4'>
        <CalendarIcon className = 'w-8 text-green-400'/>
        <p className = 'text-green-300 font-light'>APR 16 2022</p>
        </div>
        <p className = 'text-lg font-light p-10' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit ad quisquam et, illum necessitatibus! Quia incidunt alias quasi ducimus sed pariatur magni porro possimus est, expedita iusto in at!</p>

        <img src="./yoni.jpg" alt=""  className = 'rounded-full w-20 h-20 object-cover shadow-md'/>
    </div>
  )
}
