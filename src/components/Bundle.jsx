import React from 'react'
import Bundle1 from '../assets/bundleSolo.png'
import Bundle2 from '../assets/bundleDuo.png'
import Bundle3 from '../assets/bundleBox.png'
const Bundle = () => {
  return (
    <div className='w-full px-6 py-16'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 grid-cols-1 gap-4'>
            <div className='flex flex-row md:col-span-2 md:row-span-2 col-span-1 row-span-1 mx-auto'>
                <img src={Bundle3} alt="" />
            </div>
            <div className='flex flex-row'>
                <img src={Bundle1} alt="" />
            </div>
            <div className='flex flex-row'>
                <img src={Bundle2} alt="" />
            </div>
         
        </div>

    </div>
  )
}

export default Bundle