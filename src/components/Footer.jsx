import React from 'react'
import Logo from '../assets/pizzharot.png'
import { FaPhoneAlt, FaFacebook,FaInstagramSquare } from "react-icons/fa";
import { MdEmail, MdLocationOn, } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='w-full px-6 md:py-16 py-8'>
        <div className='max-w-[1240px] mx-auto text-white grid md:grid-cols-4 grid-cols-1 gap-6'>
            <div className='pt-1'>
                <img className='h-6' src={Logo} alt="" />
                <p className='pt-2'>This page is for practice only. I dont own this images. All image are credit to the rightful owners.</p>
            </div>
            <div>
                <h1 className='text-xl font-semibold uppercase'>Support</h1>
                <p className='pt-1'>FAQ's</p>
                <p className='pt-1'>Privacy Policy</p>
                <p className='pt-1'>Terms & Conditions</p>
                <p className='pt-1'>Contact</p>
            </div>
            <div>
                <h1 className='text-xl font-semibold uppercase'>Phone</h1>
                <div className='flex flex-row pt-2'>
                <FaPhoneAlt className='text-xl mt-1' />
                <p>+636969-696-69696</p>
                </div>
                
            
                <h1 className='text-xl font-semibold uppercase pt-3'>EMAIL</h1>
                <div className='flex flex-row pt-1'>
                <MdEmail className='text-xl mt-1' />
                <p>pizzharot.official@gmail.com</p>
                </div>
                
            </div>
            <div>
                
                <h1 className='text-xl font-semibold uppercase'>Address</h1>
                <div className='flex flex-row pt-2'>
                <MdLocationOn className='text-xl' />
                <p>West Philippine Sea</p>
                </div>
                
            
                <h1 className='text-xl font-semibold uppercase pt-3'>Follow Us</h1>
                <div className=' text-xl pt-2 flex flex-row gap-2'>
                <FaFacebook className='hover:text-amber-500'/>
                <FaSquareXTwitter className='hover:text-amber-500' />
                <FaInstagramSquare className='hover:text-amber-500'/></div>
                
            </div>
            <div className='text-center pt-6 md:col-span-4'>
                <p>This page is created using Reactjs and TailwindCss.Copyright &copy; 2024 All rights Reserve.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer