import React from 'react'
import Logo from '../assets/pizzharot.png'
import Button from './Button.jsx'

const Navbar = () => {
    const Links = [
        {name:'Home', link: '/'},
        {name:'Menu', link: '/'},
        {name:'Location', link: '/'},
        {name:'About', link: '/'},
        {name:'Contact', link: '/'},
    ]
  return (
    <div className='w-full top-0 left-0'>
        <div className='md:flex items-center justify-between md:px-10 px-7 md:py-6 '>
         
                <div>
                    <img className='h-6 flex items-center cursor-pointer' src={Logo} alt="" />
                </div>
            
                <ul className='md:flex md:items-center text-white gap-4'>
                    {
                        Links.map((link) => (
                            <li key={link.name}>
                                <a href={link.link} className='hover:text-amber-500 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                    <Button>Online Order</Button>
                </ul>
            
        </div>

    </div>
  )
}

export default Navbar