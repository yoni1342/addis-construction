import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TestimonyCard from './TestimonyCard'
export default function Testimony() {
  const [testimonys, setTestimonys] = useState([]);
  useEffect(()=>{
    const getTestimmony = async()=>{
      const res = await axios.get('http://localhost:5000/api/testimony');
      setTestimonys(res.data)
    }
    getTestimmony();
  },[])
  return (
    <div className = 'flex flex-col justify-center items-start space-y-10 pl-20 min-h-screen pb-5 dark:bg-gray-900 dark:text-white'>
        <h2 className = 'font-bold text-6xl border-b-4 border-[#4ECCA3] pt-10 mb-10'>Testimony</h2>
        <div className = 'gap-y-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 '>
            {
              testimonys.map((testimony)=>(
                <TestimonyCard name = {testimony.name} profilePic = {testimony.profilePic} desc = {testimony.desc} createdAt = {testimony.createdAt} id ={testimony._id} key = {testimony._id} />
              ))
            }  
        </div>
    </div>
  )
}
