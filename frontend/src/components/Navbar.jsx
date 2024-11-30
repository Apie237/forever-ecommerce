import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/shopContext';

const Navbar = () => {

  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login')
    setToken('');
    setCartItems({});
  }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>

      <ul className='flex-1 hidden sm:flex justify-center  gap-10 text-lg text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-2'  >
          <p >HOME</p>
          <hr className='w-2/4 border-none h-[3px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-2' >
          <p >COLLECTION</p>
          <hr className='w-2/4 border-none h-[3px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-2' >
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[3px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-2' >
          <p>CONTACT</p>
          <hr className='w-2/4 border-none  h-[3px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-7 ml-auto'>
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-7 cursor-pointer' alt="" />

        <div className='group relative'>
          <img onClick={() => token ? null : navigate('/login')} className='w-5 sm:w-9 cursor-pointer' src={assets.profile_icon} alt="" />

          {/*----dropdown icon-----*/}
          {token && <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
              <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>}
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-7 min-w-7' alt="" />
          <p className='absolute right-[-2px] bottom-[-5px] w-4 text-center leading-3 bg-black text-white aspect-square rounded-full text-[12px]'>{getCartCount()}</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="" className='w-7 cursor-pointer lg:hidden' />
      </div>

      {/* sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'></div>
        <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
          <img className='h-6 rotate-180' src={assets.dropdown_icon} alt="" />
          <p>Back</p>
        </div>
        <nav className='flex flex-col gap-4 p-6'>
          <NavLink to='/' onClick={() => setVisible(false)} className='py-2 pl-6 border-b hover:bg-gray-200'>HOME</NavLink>
          <NavLink to='/collection' onClick={() => setVisible(false)} className='py-2 pl-6 border-b hover:bg-gray-200'>COLLECTION</NavLink>
          <NavLink to='/about' onClick={() => setVisible(false)} className='py-2 pl-6 border-b hover:bg-gray-200'>ABOUT</NavLink>
          <NavLink to='/contact' onClick={() => setVisible(false)} className='py-2 pl-6 border-b hover:bg-gray-200'>CONTACT</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
