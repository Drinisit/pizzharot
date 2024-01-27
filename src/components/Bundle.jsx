import React from 'react'
import Bundle1 from '../assets/bundleSolo.png'
import Bundle2 from '../assets/bundleDuo.png'
import Bundle3 from '../assets/bundleBox.png'

const Bundle = () => {
  return (
    <div className='w-full h-screen px-6 py-16'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-3'>
            <div>
                <img src={Bundle3} alt="" />
            </div>
            <div>
                <div>
                    <img src={Bundle1} alt="" />
                </div>
                <div>
                    <img src={Bundle2} alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Bundle