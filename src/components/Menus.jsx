import React from 'react'
import Pizza1 from '../assets/pizza1.png'
import Pizza2 from '../assets/pizza2.png'
import Pizza3 from '../assets/pizza3.png'
import Pizza4 from '../assets/pizza4.png'
import pizzaImages from '../components/Pizzamenu.js'

const Menus = () => {
  return (
    <div className='w-full relative px-6 py-20 h-screen'>
      <div className='max-w-[1240px] text-gray-200 mx-auto'>
        <div className='w-full'>
            <h1 className='pizzaria text-amber-500 font-bold text-center text-[4rem]'>Pizza Harot</h1>
            <p className='pizzaria text-amber-500 text-center text-3xl'>The Best selling Pizza</p>
        </div>

        <div className='w-full'>
            <p className='text-3xl font-bold text-center'>The Orginals</p>
        </div>
        <div className=''>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-4'>
                <div className='border flex flex-col border-amber-500 rounded-md pb-4 px-4'>
                    <img className='' src={Pizza1} alt="" />
                    <h1 className=''>Pepperoni Pizza</h1>
                    <p className=''>&#8369;350</p>
                    <p>Reprehenderit, assumenda qui cum voluptas accusamus minus tenetur error? Quasi odio alias ratione repellat aspernatur amet quia doloribus incidunt autem hatnog aperiam!</p>
                    <button className='py-1 px-3 cursor-pointer hover:text-amber-500'>Now Order</button>
                </div>
                <div className='border flex flex-col border-amber-500 rounded-md pb-4 px-4'>
                    <img className='' src={Pizza2} alt="" />
                    <h1 className=''>Hawaiian Pizza</h1>
                    <p className=''>&#8369;350</p>
                    <p>Tempora doloremque quo, accusamus nesciunt reprehenderit iste porro fugit sint voluptatum autem delectus, itaque eveniet saepe voluptatibus, dignissimos.</p>
                    <button className='py-1 px-3 cursor-pointer hover:text-amber-500'>Now Order</button>
                </div>
                <div className='border flex flex-col border-amber-500 rounded-md pb-4 px-4'>
                    <img className='' src={Pizza3} alt="" />
                    <h1 className=''>Cheese Pizza</h1>
                    <p className=''>&#8369;350</p>
                    <p>Lorem, ipsum dolor sit amet. Magni doloremque molestiae dolore odio praesentium vel est provident debitis, sequi enim eius ut aperiam quo placeat natus nesciunt autem.</p>
                    <button className='py-1 px-3 cursor-pointer hover:text-amber-500'>Now Order</button>
                </div>
                <div className='border flex flex-col border-amber-500 rounded-md pb-4 px-4'>
                    <img className='' src={Pizza4} alt="" />
                    <h1 className=''>Classic Pizza</h1>
                    <p className=''>&#8369;350</p>
                    <p>Eveniet dolor porro delectus, molestias tempore eius dolorum, dolorem iure asperiores cumque, accusamus animi! Aliquid distinctio libero laudantium  beatae impedit.</p>
                    <button className='py-1 px-3 cursor-pointer hover:text-amber-500'>Now Order</button>
                </div>
            </div>
        </div>
        
        <div className='mt-6 grid sm:grid-cols-3 md:grid-cols-6 gap-4'>
          <div className='mt-4 sm:col-span-3 md:col-span-6'>
            <h1 className='text-2xl font-bold'>Other Pizza Flavor</h1>
          </div>
              <div className='border flex flex-col border-amber-500 rounded-md px-1 py-4 overflow-hidden'>
                  <div className='mt-[-5rem]'>
                  <img src={ pizzaImages.pizza5Cheese } alt="" />
                  </div>
                  <h1 className='text-center font-medium'>Letcheese</h1>
                  <p className='text-center mb-1'>&#8369;150</p>
                  <button className='bg-amber-500 text-black rounded-md mx-auto w-1/2'>Order</button>
              </div>

              <div className='border flex flex-col border-amber-500 rounded-md px-1 py-4 overflow-hidden'>
                  <div className='mt-[-5rem]'>
                  <img src={ pizzaImages.pizzaAloha } alt="" />
                  </div>
                  <h1 className='text-center font-medium'>Uloha</h1>
                  <p className='text-center mb-1'>&#8369;150</p>
                  <button className='bg-amber-500 text-black rounded-md mx-auto w-1/2'>Order</button>
              </div>

              <div className='border flex flex-col border-amber-500 rounded-md px-1 py-4 overflow-hidden'>
                  <div className='mt-[-5rem]'>
                  <img src={ pizzaImages.pizzaAmericanBacon } alt="" />
                  </div>
                  <h1 className='text-center font-medium'>Pinoycon</h1>
                  <p className='text-center mb-1'>&#8369;150</p>
                  <button className='bg-amber-500 text-black rounded-md mx-auto w-1/2'>Order</button>
              </div>

              <div className='border flex flex-col border-amber-500 rounded-md px-1 py-4 overflow-hidden'>
                  <div className='mt-[-5rem]'>
                  <img src={ pizzaImages.pizzaBaconMushroom } alt="" />
                  </div>
                  <h1 className='text-center font-medium'>Kabuteng Baboy</h1>
                  <p className='text-center mb-1'>&#8369;150</p>
                  <button className='bg-amber-500 text-black rounded-md mx-auto w-1/2'>Order</button>
              </div>

              <div className='border flex flex-col border-amber-500 rounded-md px-1 py-4 overflow-hidden'>
                  <div className='mt-[-5rem]'>
                  <img src={ pizzaImages.pizzaBaconSpinach } alt="" />
                  </div>
                  <h1 className='text-center font-medium'>Kinangkong na Baboy</h1>
                  <p className='text-center mb-1'>&#8369;150</p>
                  <button className='bg-amber-500 text-black rounded-md mx-auto w-1/2'>Order</button>
              </div>

              <div className='border flex flex-col border-amber-500 rounded-md px-1 py-4 overflow-hidden'>
                  <div className='mt-[-5rem]'>
                  <img src={ pizzaImages.pizzaCarbonara } alt="" />
                  </div>
                  <h1 className='text-center font-medium'>Spaghetting walang Lasa</h1>
                  <p className='text-center mb-1'>&#8369;150</p>
                  <button className='bg-amber-500 text-black rounded-md mx-auto w-1/2'>Order</button>
              </div>

              <div className='border flex flex-col border-amber-500 rounded-md px-1 py-4 overflow-hidden'>
                  <div className='mt-[-5rem]'>
                  <img src={ pizzaImages.pizzaDeluxe } alt="" />
                  </div>
                  <h1 className='text-center font-medium'>Bongga</h1>
                  <p className='text-center mb-1'>&#8369;150</p>
                  <button className='bg-amber-500 text-black rounded-md mx-auto w-1/2'>Order</button>
              </div>

              <div className='border flex flex-col border-amber-500 rounded-md px-1 py-4 overflow-hidden'>
                  <div className='mt-[-5rem]'>
                  <img src={ pizzaImages.pizzaExtravaganzza } alt="" />
                  </div>
                  <h1 className='text-center font-medium'>Pinaka Bongga</h1>
                  <p className='text-center mb-1'>&#8369;150</p>
                  <button className='bg-amber-500 text-black rounded-md mx-auto w-1/2'>Order</button>
              </div>

              <div className='border flex flex-col border-amber-500 rounded-md px-1 py-4 overflow-hidden'>
                  <div className='mt-[-5rem]'>
                  <img src={ pizzaImages.pizzaHamCheese } alt="" />
                  </div>
                  <h1 className='text-center font-medium'>Kinesong Baboy</h1>
                  <p className='text-center mb-1'>&#8369;150</p>
                  <button className='bg-amber-500 text-black rounded-md mx-auto w-1/2'>Order</button>
              </div>

              <div className='border flex flex-col border-amber-500 rounded-md px-1 py-4 overflow-hidden'>
                  <div className='mt-[-5rem]'>
                  <img src={ pizzaImages.pizzaMeatzza } alt="" />
                  </div>
                  <h1 className='text-center font-medium'>Kinarne</h1>
                  <p className='text-center mb-1'>&#8369;150</p>
                  <button className='bg-amber-500 text-black rounded-md mx-auto w-1/2'>Order</button>
              </div>

              <div className='border flex flex-col border-amber-500 rounded-md px-1 py-4 overflow-hidden'>
                  <div className='mt-[-5rem]'>
                  <img src={ pizzaImages.pizzaSpinachFeta } alt="" />
                  </div>
                  <h1 className='text-center font-medium'>Kangkong na biskwit</h1>
                  <p className='text-center mb-1'>&#8369;150</p>
                  <button className='bg-amber-500 text-black rounded-md mx-auto w-1/2'>Order</button>
              </div>

              <div className='border flex flex-col border-amber-500 rounded-md px-1 py-4 overflow-hidden'>
                  <div className='mt-[-5rem]'>
                  <img src={ pizzaImages.pizzaUltimatePepperoni } alt="" />
                  </div>
                  <h1 className='text-center font-medium'>Ultimate Pepe ni roni</h1>
                  <p className='text-center mb-1'>&#8369;150</p>
                  <button className='bg-amber-500 text-black rounded-md mx-auto w-1/2'>Order</button>
              </div>
        </div>
          
      </div>

    </div>
  )
}

export default Menus