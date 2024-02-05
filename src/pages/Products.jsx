import React from 'react'
import { Link } from 'react-router-dom'
import ORIGINALS from '../Data/originals'

import Footer from '../components/Footer'

const Products = () => {
  return (
    <div>
        <div className='grid place-content-center my-[10%]'>
           <h1 className='text-3xl text-white'>This is a Product Page</h1>

            <div className='mt-10'>
                <ul className='flex flex-row text-white gap-4'>
                {ORIGINALS.map((prod) =>(
                    <li key={prod.id}>

                      <Link to={prod.productName}>

                              <div className='border flex flex-col border-amber-500 rounded-md pb-4 px-4 md:mt-[6rem] mt-[7rem]'>
                                
                                  <img className='md:mt-[-5rem] mt-[-6rem] h-36' src={prod.productImg} alt="" />
                              
                                  <p className='text-center font-semibold mt-2'>{prod.productName}</p>

                                  <p className='text-center font-bold mb-2'>{prod.productPrice}</p>

                                  <button className='py-1 px-3 cursor-pointer hover:text-amber-500'>Now Order</button>


                              </div>
                      </Link>

                     </li>
                ))}
                
              </ul>
            </div>
           
        </div>
  

       <Footer />
    </div>
    
  )
}

export default Products