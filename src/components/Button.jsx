import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-white text-gray-700 py-1 px-6 rounded-md font-medium md:ml-5 hover:bg-amber-500 duration-500'>
       {props.children}
    </button>
  )
}

export default Button