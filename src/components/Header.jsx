import { assets } from '../assets/assets';
import React from 'react';

function Header() {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
            {/* Left side */}
            <div className='md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 py-10 md:py-[10vw] md:mb-[-30px]'>
                <p className='text-3xl text-center md:text-left md:text-4xl lg:text-5xl text-white font-semibold leading-tight'>
                    Book Appointment <br /> with Trusted Doctors
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="Group of trusted doctors" />
                    <p className="text-center md:text-left">
                        Simply browse through our extensive list of trusted doctors,
                        <br className='hidden sm:block' />
                        schedule your appointment hassle-free.
                    </p>
                </div>
                <div className='flex justify-center md:justify-start w-full'>
                    <a
                        href='#speciality'
                        className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300'
                    >
                        Book Appointment <img className='w-3' src={assets.arrow_icon} alt="Arrow icon" />
                    </a>
                </div>
            </div>
            {/* Right side */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute h-auto rounded-lg bottom-0 mt-0 sm:mt-0 lg:mt-10' src={assets.header_img} alt="" />
            </div>
        </div>
    );
}

export default Header;
