
import Layout from './layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-sm sm:text-xs'>
      <Layout className='py-4 flex sm:flex-col items-center justify-between lg:py-6'>
        <span>{new Date().getFullYear()} &copy; All rights reserved</span>
        <div className=''>
        Build with <span>&#9825;</span> by &nbsp;
        <Link href="" className='underline'>Maestro</Link>
        </div>
        
        <Link href="">Live,Laugh,Love <span className=' underline text-blue-500'>Or Whatever</span></Link>
      </Layout>
    </footer>
  )
}

export default Footer