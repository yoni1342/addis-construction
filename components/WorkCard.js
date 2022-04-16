import React from 'react'
import {OfficeBuildingIcon} from '@heroicons/react/outline'
export default function WorkCard({image, desc, title, id}) {
  return (
    <div className ='flex flex-col justify-center items-center space-y-4 mx-5 hover:shadow-2xl rounded-lg'>
        <div className = 'relative'>
            <div className = 'absolute top-0 bg-gradient-to-tl from-[#4ECCA3]  w-full h-full' />
            <img src={image} alt="" className = 'w-[30rem] h-[20rem] object-cover'/>
        </div>

        <h1 className ='text-5xl font-semibold px-4 flex items-center space-x-5'>{title}</h1>
        
        <p className = 'p-4'>{desc}</p>
    </div>
  )
}
