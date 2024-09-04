import React from 'react';
import banner from '../../../../assets/conatct.jpg'

const Banner = () => {
    return (
        <div>
            <div className='relative'>
<img className='w-full h-80 opacity-50' src={banner} alt="" />
<h2 className='text-5xl text-gray-700 absolute -mt-20 mx-80 font-extrabold'>CONTACT US</h2>
            </div>
        </div>
    );
};

export default Banner;