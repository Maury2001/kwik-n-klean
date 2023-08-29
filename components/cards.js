'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Call } from './icons'

export default function Card({head, service,image, className=""}) {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className=' flex w-full justify-center items-center'>
    <motion.div 
    layout
    initial={{opacity:0 , scale:0}}
    whileInView={{opacity:1, scale:1}}
    transition={{layout:{duration:2, type:'keyframes', ease:'easeInOut'}}}
    className=' p-4 w-1/3 sm:w-1/2 rounded-lg border-black'
    onClick={()=> setIsOpen(!isOpen)}
    whileHover={{scale:1.1}}
    style={{borderRadius:'1rem', boxShadow:'0px 10px 20px rgba(63, 177, 247,0.5)'}}
    >
        <motion.h1 layout='position' className=' flex flex-row gap-2 sm:gap-6'> {head}
        <Image src={image} width={100} height={120} priority/>
        </motion.h1>
        {isOpen && 
            <motion.div>
            <p>{service}</p>
            <motion.div className=" animate-bounce flex flex-row justify-center items-center m-4">
         <a href="tel:+254702750393"><Call/></a>
         </motion.div>
        </motion.div> }
        
    </motion.div>
      
    </div>
  )
}
