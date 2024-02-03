import React from 'react'
import RootLayout from './RootLayout'


const NotFound = () => {
  return (
    <div>
        <RootLayout />
        <div className='w-full h-full'>
          <div className='max-w-[1240px] mx-auto grid place-items-center'>
            <div className='mt-[20%]'> 
                <h1 className='text-3xl text-white font-bold'> An error occured!</h1>
                <p className='text-md text-white mt-3 text-center'>Could not find this page!</p>
            </div>
        
          </div>
        </div>
        
    </div>
    
  )
}

export default NotFound