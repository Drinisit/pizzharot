import React from 'react'
import Pizza1 from '../assets/pizza1.png'
import Pizza2 from '../assets/pizza2.png'
import Pizza3 from '../assets/pizza3.png'

const Menus = () => {
  return (
    <div className='w-full h-screen'>
      <div className='max-w-[968px] py-20 text-gray-200 mx-auto items-center justify-center grid grid-cols-3'>
          <div>
              <img src={Pizza1} alt="" />
              <h1>Pepperoni Pizza</h1>
              <p>250</p>
          </div>
          <div>
              <img src={Pizza2} alt="" />
              <h1>Hawaiian Pizza</h1>
              <p>250</p>
          </div>
          <div>
              <img src={Pizza3} alt="" />
              <h1>Cheese Pizza</h1>
              <p>250</p>
          </div>
      </div>

    </div>
  )
}

export default Menus