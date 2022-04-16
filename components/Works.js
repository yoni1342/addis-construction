import React, { useEffect, useState } from 'react'
import WorkCard from './WorkCard';
import axios from 'axios';
export default function Works() {
  const [works, setWorks] = useState([]);
  useEffect(()=>{
  const workss = async()=>{
    const res = await axios.get('http://localhost:5000/api/works')
    setWorks(res.data  )
  }
  workss();
  }, [])
  // console.log(works);
  return (
    <div className = 'flex flex-col justify-start items-start space-y-10 lg:pl-32 dark:bg-gray-800 dark:text-white'>
        <h1 className = 'font-bold text-6xl border-b-4 border-[#4ECCA3] pt-10 mb-10 ml-5'>Works</h1>
        <div className = 'gap-y-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 '>
            {
              works.map(work=>(
                <WorkCard image = {work.image} title = {work.title} desc ={work.desc} id = {work._id} key = {work._id}/>
              ))
            }
            
        </div>
    </div>
  )
}

