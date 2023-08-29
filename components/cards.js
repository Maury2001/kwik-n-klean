'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Card({head, service,image, className=""}) {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className=' flex justify-center items-center'>
    <motion.div 
    layout
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{layout:{duration:2, type:'keyframes'}}}
    className=' p-4 w-44 rounded-lg border-black'
    onClick={()=> setIsOpen(!isOpen)}
    whileHover={{scale:1.2}}
    style={{borderRadius:'1rem', boxShadow:'0px 10px 20px rgba(63, 177, 247,0.5)'}}
    >
        <motion.h1 layout='position' className=' flex flex-row gap-2 sm:gap-6'> {head}
        <Image src={image} width={100} height={120} priority/>
        </motion.h1>
        {isOpen && 
            <motion.div>
            <p>{service}</p>
        </motion.div> }
        
    </motion.div>
      
    </div>
  )
}
