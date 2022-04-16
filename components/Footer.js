import React from 'react'
import { motion } from 'framer-motion'
export default function Footer() {
    const wave1 ={
        hidden: {
            backgroundPostionX: "0px",
            opacity:0.6,
        },
        visible:{
            backgroundPostionX: "1000px",
            zIndex: 10000,
            opacity: 0.6,
            transtion:{
                loop: Infinity,
                ease: "linear",
                duration: 25,
            },
        },
    };
    const wave2 ={
        hidden: {
            backgroundPostionX: "0px",
            opacity:0.5,
        },
        visible:{
            backgroundPostionX: "-1000px",
            zIndex: 999,
            opacity: 0.5,
            transtion:{
                loop: Infinity,
                ease: "linear",
                duration: 15,
            },
        },
    };
    const wave3 ={
        hidden: {
            backgroundPostionX: "0px",
            opacity:0.3,
        },
        visible:{
            backgroundPostionX: "-1000px",
            zIndex: 998,
            opacity: 0.3,
            transtion:{
                loop: Infinity,
                ease: "linear",
                duration: 10,
            },
        },
    };
    const wave4 ={
        hidden: {
            backgroundPostionX: "0px",
            opacity:0.1,
        },
        visible:{
            backgroundPostionX: "1000px",
            zIndex: 997,
            opacity: 0.1,
            transtion:{
                loop: Infinity,
                ease: "linear",
                duration: 5,
            },
        },
    };
  return (
    <footer className = 'relative gap-y-10 px-32 py-14 cursor-pointer bg-gray-100 grid grid-clos-1 md:grid-cols-4 text-gray-800 dark:bg-gray-800 dark:text-white'>
        <div className = 'space-y-4 text-xs text-gray-800 dark:text-gray-100'>
            <h3 className = 'font-bold'>ABOUT</h3>
            <p className = 'hover:text-[#4ECCA3]'>How Addis Constrution works</p>
            <p className = 'hover:text-[#4ECCA3]'>News room</p>
            <p className = 'hover:text-[#4ECCA3]'>Investors</p>
            <p className = 'hover:text-[#4ECCA3]'>Addis Constrution Plus</p>
            <p className = 'hover:text-[#4ECCA3]'>Addis Constrution Luxe</p>
        </div>
        <div className = 'space-y-4 text-xs text-gray-800 dark:text-gray-100'>
            <h5 className = 'font-bold'>COMMUNITY</h5>
            <p className = 'hover:text-[#4ECCA3]'>Accessibility</p>
            <p className = 'hover:text-[#4ECCA3]'>This is not a real site</p>
            <p className = 'hover:text-[#4ECCA3]'>Its a pretty awesomw clonw</p>
            <p className = 'hover:text-[#4ECCA3]'>Referrals acceptes</p>
            <p className = 'hover:text-[#4ECCA3]'>Yonatan Tesfaye</p>
        </div>
        <div className = 'space-y-4 text-xs text-gray-800 dark:text-gray-100'>
            <h3 className = 'font-bold'>HOST</h3>
            <p className = 'hover:text-[#4ECCA3]'>Yonatan Tesfaye</p>
            <p className = 'hover:text-[#4ECCA3]'>Presents</p>
            <p className = 'hover:text-[#4ECCA3]'>Habesha TechCamp</p>
            <p className = 'hover:text-[#4ECCA3]'>Thousands of subscribers</p>
            <p className = 'hover:text-[#4ECCA3]'>Subscribe Now</p>
        </div>
        <div className = 'space-y-4 text-xs text-gray-800 dark:text-gray-100'>
            <h3 className = 'font-bold'>SUPPORT</h3>
            <p className = 'hover:text-[#4ECCA3]'>Help Center</p>
            <p className = 'hover:text-[#4ECCA3]'>Trust & Safety</p>
            <p className = 'hover:text-[#4ECCA3]'>Say Hi YouTube</p>
            <p className = 'hover:text-[#4ECCA3]'>+251993534293</p>
            <p className = 'hover:text-[#4ECCA3]'>yonatantesfaye30@gmail.com</p>
        </div>
        <hr />
        <div>
            <p>&copy; 2022 Yonatan Tesfaye</p>
        </div>
                

    </footer>

  )
}
