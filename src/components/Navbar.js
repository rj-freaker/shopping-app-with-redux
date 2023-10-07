import React from 'react'
import logo from '../logo.png'
import {FaCartPlus} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const {cart} = useSelector((state) => (state));
  return (
        <div className=' bg-slate-900'>
            <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
              <div>
                <NavLink to='/'>
                  <img src={logo} alt='' width={'150px'} height={'150px'}/>
                </NavLink>
              </div>
              <div className='flex flex-row font-medium text-slate-100 mr-5 space-x-6'>
                <NavLink to='/'>
                  <p className='text-xl'>
                    Home
                  </p>
                </NavLink>
                <NavLink to='/cart'>
                  <div className='flex items-center justify-center mt-2'>
                    <FaCartPlus />
                    {
                      cart.length > 0 &&
                      <span className='absolute -top-1 -right-2 bg-green-500 text-xs w-5 h-5 flex justify-center items-center animate-bounce'>
                        {cart.length}
                      </span>
                    }
                  </div>
                </NavLink>
              </div>
            </nav>
        </div>
  )
}
