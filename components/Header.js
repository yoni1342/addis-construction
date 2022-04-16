import React, { useEffect, useState } from 'react'
import {MenuIcon, MoonIcon, SunIcon} from '@heroicons/react/outline'
import { useTheme } from 'next-themes'

export default function Header() {
  const {systemTheme, theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(()=>{
    setMounted(true)
  },[])
  const renderThemeChanger = ()=>{
    if(!mounted) return null
    const currentTheme = theme === 'system' ? systemTheme: theme;
    if(currentTheme === 'dark'){
        return (
            <SunIcon className = 'w-7 h-7' role = "button" onClick= {()=>setTheme('light')}/> 
        )
    }
    else{
        return (
            <MoonIcon className = 'w-7 h-7' role = "button" onClick= {()=>setTheme('dark')}/> 
        )
    }
}
  return (
    <div className = 'px-6  flex items-center justify-between dark:bg-gray-800 dark:text-white '>
        <img src="./logo.png" alt="" className = 'cursor-pointer w-52' />
        <div className = 'flex items-center space-x-4'>
          <div>
            {renderThemeChanger()}
          </div>
            <MenuIcon className ='w-10'/>
        </div>
    </div>
  )
}
