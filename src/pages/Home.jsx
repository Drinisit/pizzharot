import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <div className='grid my-[10%] place-items-center'>
          <h1 className='text-3xl text-white'>This is Home Page</h1>
          <p className='text-lg text-white mt-4'>
            <Link to='products'>List of Products</Link>
          </p>
      </div>
        
        <Footer />
  
    </div>
  )
}

export default Home