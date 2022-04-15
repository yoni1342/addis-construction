import React from 'react'
import TestimonyCard from './TestimonyCard'
export default function Testimony() {
  return (
    <div className = 'flex flex-col justify-start items-start space-y-10 pl-20 h-screen'>
        <h2 className = 'font-bold text-6xl border-b-4 border-[#4ECCA3] pt-10 mb-10'>Testimony</h2>
        <div className = 'gap-y-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 '>
            <TestimonyCard />
            <TestimonyCard />
            <TestimonyCard />
            <TestimonyCard />   
        </div>
    </div>
  )
}
