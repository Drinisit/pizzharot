import React from 'react'

const Contact = () => {
  return (
    <div className='w-full bg-amber-500 px-6 md:py-10 py-16'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 grid-cols-1 gap-4'>
            <div className='py-6'>
                <h1 className='text-3xl text-white uppercase font-bold'>Get exclusive offer</h1>
                <p className='text-white pt-4'>Be the first one to get our best excluse offer for cheaper price.</p>
            </div>
            <div className='grid grid-cols-3'>
                <div className='col-span-2'>
                <form action="#">
                    <input className='w-full px-4 py-1 rounded-md' type="email" placeholder='Email' />
                </form>
                </div>

                <div className='mx-auto'>
                     <button className='text-white bg-[#0f172a] rounded-md px-4 py-1'>Subscribe</button>
                </div>
            
           
        </div>
        </div>

       
    </div>
  )
}

export default Contact