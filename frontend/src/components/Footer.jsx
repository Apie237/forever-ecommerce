import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-5  text-sm'>

            <div>
                <img src={assets.logo} className='mb-5 w-32 placeholder' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint eos beatae nostrum et! Asperiores distinctio velit dolore dicta exercitationem dolores ipsa facilis. Nesciunt, adipisci autem.
                </p>
            </div>

            <div>
                <p className='text-xl font-bold mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-bold mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>contact@foreverapie.com</li>
                </ul>
            </div>
        </div>

        <div className='mb-5 '>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024 @forever.com - All Rights Reserved.</p>
            </div>
    </div>
  )
}

export default Footer