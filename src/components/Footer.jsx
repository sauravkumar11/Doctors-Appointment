import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
      {/* Left Section */}
      <div>
        <img src={assets.logo} alt="logo" className='mb-5 w-40' />
        <p className='w-full md:w-2/3 text-gray-60  leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, in.
          Delectus praesentium esse, ducimus exercitationem nostrum,
          dolorum placeat ullam enim adipisci provident quia. Accusamus porro fuga
          distinctio ut minima dolorem aliquam voluptatibus, saepe eos ipsa? Facere ea totam illum. Cum.</p>
      </div>
      {/* Center Section */}
      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>Home</li>
          <li>About Us </li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>

        </ul>
      </div>
      {/* Right Section */}
      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul  className='flex flex-col gap-1 text-gray-600'>
          <li>+91-8271888743</li>
          <li>sauravkumar01328@gmail.com</li>


        </ul>
      </div>
    </div>
    {/* Copyright Text */}
    <div>  <hr/>
   <p className='py-5 text-sm text-center'> Copyright 2025@ Prescripto - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
