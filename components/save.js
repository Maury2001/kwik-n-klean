'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import save from '../public/images/saa.png'

export default function Save() {
  return (
    <motion.div
    initial={{opacity:0, scale:0}}
    whileInView={{ rotate: 360, scale: 1,opacity:1 }}

  transition={{
    duration:2,
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
    // whileInView={{opacity:1, scale:1.1}}
    
     className=' flex justify-center'>
      <Image src={save} width={200} height={300}/>
    </motion.div>
  )
}
