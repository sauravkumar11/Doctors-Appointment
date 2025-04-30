import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div>
      <div className="text-center pt-10 text-2xl text-gray-500">
        <p className="font-bold">CONTACT <span className="text-gray-700 font-semibold">US</span></p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px] rounded-lg shadow-lg"
          src={assets.contact_image}
          alt="Contact Us"
        />
        <div className="flex flex-col gap-6 items-startjustify-center">
          <p className="text-lg font-semibold text-gray-800">Our Office</p>
          <p className="text-gray-600">
            801110 Paliganj, Patna, <br />
            Bihar-INDIA
          </p>
          <p className="text-gray-600">
            Tel: <span className="font-medium">(+91) - 8271617669</span>
            <br />
            Email: <span className="font-medium">sauravkumar01328@gmail.com</span>
          </p>
          <p className="text-lg font-semibold text-gray-800">Careers at PRESCRIPTO</p>
          <p className="text-gray-600">
            Learn more about our teams and job openings.
          </p>
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-300">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
