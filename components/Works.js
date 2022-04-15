import React from 'react'
import WorkCard from './WorkCard';
export default function Works() {
  return (
    <div className = 'flex flex-col justify-start items-start space-y-10 lg:pl-32 '>
        <h1 className = 'font-bold text-6xl border-b-4 border-[#4ECCA3] pt-10 mb-10'>Works</h1>
        <div className = 'gap-y-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 '>
            <WorkCard />
            <WorkCard />
            <WorkCard />
        </div>
    </div>
  )
}
