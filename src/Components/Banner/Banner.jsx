import React from 'react';
import banner from '../../assets/hotel-nevada-usa_1268-14393.jpg'

const Banner = () => {
    return (
        <div className="hero px-4 h-[500px]">
        <div className="hero-content  flex-col justify-between lg:flex-row-reverse">
          <img
            src={banner}
            className="w-1/2 rounded-lg shadow-2xl" />
          <div className=' '>
            <h1 className="text-3xl text-[#5a4044] font-bold">Hostel Management System</h1>
            <p className=" py-3">
              It is Comprehensive,Modern and budget-friendly.
            </p>
            <button className="btn bg-[#2ecc71]">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;