import React from 'react'
import Model from '../assets/pizzaModelv1.png'
import Pizzabox from '../assets/bundleBox.png'

const Inquiry = () => {
  return (
    <div className='w-full px-6 md:py-16 py-8'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 grid-cols-1 gap-8'>

                <div className='flex flex-col'>
                    <img src={Model} alt="" />
                </div>

                <div className='flex flex-col'>
                    <img src={Pizzabox} alt="" />
                </div>

        </div>

    </div>
  )
}

export default Inquiry