import React from 'react'
import { Link, useParams } from 'react-router-dom' 

const ProductDetails = () => {

    const params = useParams();

  

  return (
    <div>
      <div className='grid my-[10%] place-items-center'>
            <h1  className='text-3xl text-white'>Product Details shows here!</h1>
            
            <p className='text-xl text-white mt-6'>{params.productId}</p>
            <Link to='..' relative='path' className='text-white mt-10 hover:text-amber-500'>Back</Link>
      </div>
      
      
    </div>
  )
}

export default ProductDetails