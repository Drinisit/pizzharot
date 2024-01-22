import React from 'react'
import HeroImage from '../assets/pizzharap-hero1.jpg'



const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img className='top-0 left-0 w-full h-screen object-cover' src={HeroImage} alt="" />
      <div className='bg-gradient-to-b from-slate-950 to-slate-500'></div>
        <div className='absolute top-0 w-full h-screen flex flex-col justify-center text-gray-200'>
            <div className='left-[5%] max-w-[1240px] m-auto absolute p-4'>
                <h1 className='text-4xl font-bold uppercase md:text-6xl drop-shadow-xl'>Nilibre ng pizza pero chinarot</h1>

                <p className='max-w-[600px] drop-shadow-xl py-2 text-xl'>The most delicious pizza on planet after you eat you will forget to pay Kapag kasama ang barkada ang pamilya lalong lalo na ang jowa.</p>

                <button className='bg-white text-black text-xl rounded-md py-2 px-4'>How to order</button> 
                <button className='bg-white text-black text-xl rounded-md py-2 px-4 ml-8'>See more</button>
            </div>
            <div>
                    
            </div>
        </div>
    </div>
  )
}

export default Hero