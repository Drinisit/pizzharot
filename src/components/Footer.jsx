import React from 'react'
import Logo from '../assets/pizzharot.png'
import { FaPhoneAlt, FaFacebook,FaInstagramSquare } from "react-icons/fa";
import { MdEmail, MdLocationOn, } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='w-full px-6 md:py-16 py-8'>
        <div className='max-w-[1240px] mx-auto text-white grid md:grid-cols-4 grid-cols-1 md:gap-6 gap-0'>
            <div className='pt-3'>
                <img className='md:h-6 h-5' src={Logo} alt="" />
                <p className='pt-2 md:text-base text-xs'>This page is for practice only. I dont own this images. All image are credit to the rightful owners.</p>
            </div>

            <div>
                <h1 className='font-semibold uppercase pt-3 md:text-base text-xs'>Support</h1>
                <p className='pt-1'>FAQ's</p>
                <p className='pt-1'>Privacy Policy</p>
                <p className='pt-1'>Terms & Conditions</p>
                <p className='pt-1'>Contact</p>
            </div>

            <div>
                <h1 className='font-semibold uppercase pt-3 md:text-base text-xs'>Phone</h1>
                <div className='flex flex-row pt-2'>
                <FaPhoneAlt className='mt-1' />
                <p className='ml-1'>+636969-696-69696</p>
                </div>
                
                <h1 className='font-semibold uppercase pt-3 md:text-base text-xs'>EMAIL</h1>
                <div className='flex flex-row pt-1 md:text-lg text-base'>
                <MdEmail className='md:mt-2 mt-1' />
                <p className='ml-1'>pizzharot@gmail.com</p>
                </div>
            </div>

            <div>
                <h1 className='font-semibold uppercase pt-3 md:text-base text-xs'>Address</h1>
                <div className='flex flex-row pt-2 md:text-lg text-base'>
                <MdLocationOn className='mt-1' />
                <p className='ml-1'>West Philippine Sea</p>
                </div>
                
                <h1 className='font-semibold uppercase pt-3 md:text-lg text-xs'>Follow Us</h1>
                <div className='flex flex-row gap-2 pt-2 md:text-xl text-base'>
                <FaFacebook className='hover:text-amber-500'/>
                <FaSquareXTwitter className='hover:text-amber-500' />
                <FaInstagramSquare className='hover:text-amber-500'/></div>
            </div>

            <div className='text-center md:pt-8 pt-4 md:col-span-4 md:text-base text-xs'>
                <p>This page is created using Reactjs and TailwindCss.Copyright &copy; 2024 All rights Reserve.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer