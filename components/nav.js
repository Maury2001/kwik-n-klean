import Image from 'next/image'
import React from 'react'
import logo from '../public/images/kwiklogo.png'

export default function Navbare() {
  return (
    <div className=' flex justify-start sm:justify-center m-4 p-4 sticky'>
    <nav className=' sticky'>
        <Image src={logo} alt='asa' width={300} height={200}/>
    </nav>
      
    </div>
  )
}
