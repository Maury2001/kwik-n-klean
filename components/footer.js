
import Layout from './layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t border-solid border-dark font-medium text-sm sm:text-xs'>
      <div className='py-4 flex sm:flex-col items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All rights reserved</span>
        <div className=''>
        Build with <span>&#9825;</span> by &nbsp;
        <Link href="" className='underline'>Maestro</Link>
        </div>
        
        <Link href="">Live,Laugh,Love <span className=' underline text-blue-500'>Or Whatever</span></Link>
      </div>
    </footer>
  )
}

export default Footer