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
                      <Link to={prod.productName}>{prod.productName}</Link></li>
                ))}
                
              </ul>
            </div>
           
        </div>
  

       <Footer />
    </div>
    
  )
}

export default Products