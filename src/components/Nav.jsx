import React from 'react'
import Logo from '../assets/pizzharot.png'
import { Link, useLocation} from 'react-router-dom'

const Nav = () => {

  let {pathname} = useLocation()
  let subpage = pathname.split('/')?.[1]
 
  function Change (type = null){
    if(subpage === ''){
      subpage ='home'
    }
    let classes = 'gap-3'

    if(type === subpage){
      classes += "bg-amber-500 text-amber-500"
    }else{
      classes += "bg-white"
    }
    return classes
  }

  
  return (
    <div>
        <div className='md:flex items-center justify-between md:px-10 px-7 md:py-4 py-3 '>
            <div>
                 <img className='h-6 flex items-center cursor-pointer' src={Logo} alt="" />
            </div>
            <div className='text-white '>
                <ul className='flex gap-3'>
                    <li><Link className={Change('home')} to='/'>Home</Link></li>
                    <li><Link className={Change('products')} to='/products'>Menu</Link></li>
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Nav