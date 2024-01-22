import React, { useState } from 'react'
import Logo from '../assets/pizzharot.png'
import Button from './Button.jsx'
import { IoIosClose, IoMdMenu } from "react-icons/io";

const Navbar = () => {
    const Links = [
        {name:'Home', link: '/'},
        {name:'Menu', link: '/'},
        {name:'Location', link: '/'},
        {name:'About', link: '/'},
        {name:'Contact', link: '/'},
    ]

    let [open,setOpen] = useState(false);
  return (
    <div className='bg-slate-950/90 absolute z-50 w-full top-0 left-0'>
        <div className='md:flex items-center justify-between md:px-10 px-7 md:py-4 py-3 '>
         
                <div className=''>
                    <img className='h-6 flex items-center cursor-pointer' src={Logo} alt="" />
                </div>
                <div onClick={()=>setOpen(!open)} className='text-2xl text-white absolute top-3 right-8 cursor-pointer md:hidden'>

                    {open? <IoIosClose/> : <IoMdMenu/> }
                    

                </div>
            
                <ul className={`md:flex md:items-center text-white md:pb-0 pb-12 absolute md:static bg-slate-950/30 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-14 opacity-100' :'top-[-490px]'} md:opacity-100 opacity-0`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 md:my-0 my-4'>
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