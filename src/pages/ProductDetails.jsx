import React from 'react'
import { useParams } from 'react-router-dom' 

const ProductDetails = () => {

    const params = useParams();

  

  return (
    <div className='text-3xl text-white'>
      Product Details shows here!
      <p>{params.productId}</p>
    </div>
  )
}

export default ProductDetails