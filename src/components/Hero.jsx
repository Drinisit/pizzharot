import React from 'react'
import HeroImage from '../assets/hero-pizza.png'

const Hero = () => {
  return (
    <div className='w-full'>
        <div className='grid grid-cols-2'>
            <div className='text-white'>
                <h1>NILIBRE NG PIZZA PERO CHINAROT</h1>

                <p>The most delicious pizza on planet after you eat you will forget to pay Kapag kasama ang barkada ang pamilya lalong lalo na ang jowa.</p>

                <button>How to order</button> <button>See more</button>
            </div>
            <div>
                    <img className='h-96' src={HeroImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero