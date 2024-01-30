import React from 'react'
import HeroImage from '../assets/pizzaHero.jpg'



const Hero = () => {
  return (
    <div className='w-full sm:h-svh '>
      <div className='absolute bg-gradient-to-t from-slate-900 w-full h-full mt-2'></div>
      <img className='top-0 left-0 w-full h-screen object-cover' src={HeroImage} alt="" />
        <div className='max-w-[1240px] mx-auto items-center px-4 top-10 w-full h-screen absolute flex flex-col justify-center text-gray-200'>
           <div className='bg-slate-900/30 md:bg-transparent rounded-xl p-4'>
               <h1 className='text-4xl font-bold uppercase max-w-[600px] md:text-6xl drop-shadow-xl'>Nilibre ng pizza pero chinarot</h1>

                <p className='max-w-[600px] drop-shadow-xl py-2 text-xl'>The most delicious pizza on planet after you eat you will forget to pay Kapag kasama ang barkada ang pamilya lalong lalo na ang jowa.</p>

                <button className='bg-white text-black text-xl rounded-md py-2 px-4'>How to order</button> 
                <button className='bg-white text-black text-xl rounded-md py-2 px-4 ml-8'>See more</button>
             </div>   

    
                 
     
        </div>
    </div>
  )
}

export default Hero