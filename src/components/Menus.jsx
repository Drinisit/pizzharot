import React from 'react'
import Pizza1 from '../assets/pizza1.png'
import Pizza2 from '../assets/pizza2.png'
import Pizza3 from '../assets/pizza3.png'
import Pizza4 from '../assets/pizza4.png'
import pizzaImages from '../components/Pizzamenu.js'

const Menus = () => {
  return (
    <div className='w-full h-screen'>
      <div className='max-w-[1240px] py-20 text-gray-200 mx-auto'>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-4'>
            <div className='border flex flex-col border-amber-500 rounded-md py-6 px-4'>
                  <img className='mx-auto mt-[-8rem]' src={Pizza1} alt="" />
                  <h1 className='text-xl font-medium text-center mt-[-1rem]'>Pepperoni Pizza</h1>
                  <p className='text-center pb-1 font-medium'>&#8369; 350</p>
                  <p>Reprehenderit, assumenda qui cum voluptas accusamus minus tenetur error? Quasi odio alias ratione repellat aspernatur amet quia doloribus incidunt autem aperiam!</p>
                  <button className='py-1 px-3 mt-2 cursor-pointer hover:text-amber-500'>Now Order</button>
              </div>
              <div className='border flex flex-col border-amber-500 rounded-md py-6 px-4'>
                  <img className='mx-auto mt-[-8rem]' src={Pizza2} alt="" />
                  <h1 className='text-xl font-medium text-center mt-[-1rem]'>Hawaiian Pizza</h1>
                  <p className='text-center pb-1 font-medium'>&#8369; 350</p>
                  <p>Tempora doloremque quo, accusamus nesciunt reprehenderit iste porro fugit sint voluptatum autem delectus, itaque eveniet saepe voluptatibus, dignissimos.</p>
                  <button className='py-1 px-3 mt-2 cursor-pointer hover:text-amber-500'>Now Order</button>
              </div>
              <div className='border flex flex-col border-amber-500 rounded-md py-6 px-4'>
                  <img className='mx-auto mt-[-8rem]' src={Pizza3} alt="" />
                  <h1 className='text-xl font-medium text-center mt-[-1rem]'>Cheese Pizza</h1>
                  <p className='text-center pb-1 font-medium'>&#8369; 350</p>
                  <p>Lorem, ipsum dolor sit amet. Magni doloremque molestiae dolore odio praesentium vel est provident debitis, sequi enim eius ut aperiam quo placeat natus nesciunt autem.</p>
                  <button className='py-1 px-3 mt-2 cursor-pointer hover:text-amber-500'>Now Order</button>
              </div>
              <div className='border flex flex-col border-amber-500 rounded-md py-6 px-4'>
                  <img className='mx-auto mt-[-8rem]' src={Pizza4} alt="" />
                  <h1 className='text-xl font-medium text-center mt-[-1rem]'>Classic Pizza</h1>
                  <p className='text-center pb-1 font-medium'>&#8369; 350</p>
                  <p>Eveniet dolor porro delectus, molestias tempore eius dolorum, dolorem iure asperiores cumque, accusamus animi! Aliquid distinctio libero laudantium  beatae impedit.</p>
                  <button className='py-1 px-3 mt-2 cursor-pointer hover:text-amber-500'>Now Order</button>
              </div>
        </div>
        <div className='mt-6 grid grid-cols-6 gap-4'>
              <div>
                <img src={ pizzaImages.pizza5Cheese } alt="" />
              </div>
              <div>
                <img src={ pizzaImages.pizzaAloha } alt="" />
              </div>
              <div>
                <img src={ pizzaImages.pizzaAmericanBacon } alt="" />
              </div>
              <div>
                <img src={ pizzaImages.pizzaBaconMushroom } alt="" />
              </div>
              <div>
                <img src={ pizzaImages.pizzaBaconSpinach } alt="" />
              </div>
              <div>
                <img src={ pizzaImages.pizzaCarbonara } alt="" />
              </div>
              <div>
                <img src={ pizzaImages.pizzaDeluxe } alt="" />
              </div>
              <div>
                <img src={ pizzaImages.pizzaExtravaganzza } alt="" />
              </div>
              <div>
                <img src={ pizzaImages.pizzaHamCheese } alt="" />
              </div>
              <div>
                <img src={ pizzaImages.pizzaMeatzza } alt="" />
              </div>
              <div>
                <img src={ pizzaImages.pizzaSpinachFeta } alt="" />
              </div>
              <div>
                <img src={ pizzaImages.pizzaUltimatePepperoni } alt="" />
              </div>
        </div>
          
      </div>

    </div>
  )
}

export default Menus