import React from 'react'

export default function MiniBanner() {
  return (
    <div className = ' bg-[#4ECCA3] flex flex-col-reverse spcae-y-40 items-center justify-center lg:flex-row lg:p-10 mt-10'>
        <div>
            <h1 className = 'text-7xl font-bold m-3 p-2' >Lorem ipsum dolor sit amet consectetur adipisicing </h1>
            <p className = 'text-2xl font-light m-3 p-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure provident, odio ipsa consequuntur voluptates laborum cupiditate nisi pariatur, necessitatibus, esse omnis iste iusto fugit inventore animi quia laudantium officia. Ipsam.</p>
        </div>
        <img src="./cont.png" alt="" className = 'w-[90rem]'/>
    </div>
  )
}
