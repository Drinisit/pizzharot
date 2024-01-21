import React from 'react'
import Logo from '../assets/pizzharot.png'

const Navbar = () => {
  return (
    <div className='w-full'>
        <div className='items-center'>
            <div className='flex items-center py-6 justify-around'>
                <div>
                    <img className='h-6' src={Logo} alt="" />
                </div>
            
                <ul className='flex gap-4'>
                    <li className='text-white'>Home</li>
                    <li className='text-white'>Menu</li>
                    <li className='text-white'>Location</li>
                    <li className='text-white'>About</li>
                    <li className='text-white'>Contact</li>
                    <li className='text-white'>Online Order</li>
                </ul>
            
            </div>
            
        </div>

    </div>
  )
}

export default Navbar