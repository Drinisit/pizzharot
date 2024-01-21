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
        <div className='items-center'>
            <div className='flex items-center py-6 px-10 justify-between'>
                <div>
                    <img className='h-6 items-center cursor-pointer' src={Logo} alt="" />
                </div>
            
                <ul className='md:flex md:items-center text-white gap-4'>
                    {
                        Links.map((link) => (
                            <li key={link.name}>
                                <a href={link.link}>{link.name}</a>
                            </li>
                        ))
                    }
                    <Button>Online Order</Button>
                </ul>
            
            </div>
            
        </div>

    </div>
  )
}

export default Navbar