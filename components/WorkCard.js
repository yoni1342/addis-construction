import React from 'react'
import {OfficeBuildingIcon} from '@heroicons/react/outline'
export default function WorkCard() {
  return (
    <div className ='flex flex-col justify-center items-center space-y-4 mx-5 hover:shadow-2xl rounded-lg'>
        <div className = 'relative'>
            <div className = 'absolute top-0 bg-gradient-to-tl from-[#4ECCA3]  w-full h-full' />
            <img src="./work1.jpg" alt="" className = 'w-[30rem] h-[20rem] object-cover'/>
        </div>

        <h1 className ='text-5xl font-semibold px-4 flex items-center space-x-5'>Work 1 <OfficeBuildingIcon className = 'w-10 text-[#4ECCA3]'/></h1>
        
        <p className = 'p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta quisquam natus at facilis consequuntur laudantium nulla ab unde tempore porro temporibus voluptate esse magnam sapiente totam, vel optio voluptas.</p>
    </div>
  )
}
