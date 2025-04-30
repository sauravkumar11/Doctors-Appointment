import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="">
      <div className="text-center pt-10 text-2xl text-gray-500">
        <p className="">ABOUT <span className="text-gray-700 font-medium">US</span></p>
      </div>
      <div className="my-10 flex flex-col md:flex-row  gap-12">
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="About Us" />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p className=" text-gray-700 leading-relaxed">
            Welcome to <strong>Prescripto</strong>, your trusted partner in healthcare. We are committed to bridging the gap between patients and top-notch medical professionals, offering a seamless and efficient appointment booking experience.
          </p>
          <p className=" text-gray-700 leading-relaxed">
            Our mission is to make healthcare accessible, reliable, and convenient for everyone. With a vast network of experienced doctors across various specialties, we ensure that you receive the best care tailored to your needs.
          </p>
          <b className="text-xl text-gray-800">Our Vision</b>
          <p className=" text-gray-700 leading-relaxed mt-2">
            At Prescripto, we envision a world where healthcare is simplified and accessible to all. Explore our platform to discover health tips, expert insights, and how we are revolutionizing the healthcare experience for patients and doctors alike.
          </p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>Why <span className='font-gray-700 font-semibold'> Choose Us...?</span> </p>
      </div>
      <div className='flex flex-col md:flex-row gap-2 mb-20'>
      <div className='border px-10 md:px-16 py-8 rounded-xl sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency </b>
          <p>We streamline the process of finding and booking appointments with top doctors, saving you time and effort.</p>
        </div>
        <div className='border px-10 md:px-16 rounded-xl py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Convenience</b>
          <p>Our user-friendly platform allows you to book appointments anytime, anywhere, ensuring a hassle-free experience.</p>
        </div>
        <div className='border px-10 md:px-16 rounded-xl py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Personalization</b>
          <p>We provide tailored recommendations based on your healthcare needs, ensuring you receive the best care possible.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
