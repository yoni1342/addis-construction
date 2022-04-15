import React from 'react'
import {MenuIcon} from '@heroicons/react/outline'
export default function Header() {
  return (
    <div className = 'px-6  flex items-center justify-between'>
        <img src="./logo.png" alt="" className = 'cursor-pointer w-52' />
         <MenuIcon className ='w-10'/>
    </div>
  )
}
