import React from 'react'
import Logo from '../assets/pizzharot.png'
import { Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='bg-slate-950/90 relative z-[999] w-full top-0 left-0'>
        <div className='md:flex items-center justify-between md:px-10 px-7 md:py-4 py-3 '>
            <div>
                 <img className='h-6 flex items-center cursor-pointer' src={Logo} alt="" />
            </div>
            <div className='text-white '>
                <ul className='flex gap-3'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Menu</Link></li>
                </ul>
                
                
            </div>
        </div>
    </div>
  )
}

export default Nav