import React from 'react';

const Service = ({pic,title}) => {
    return (
        <div className=''>
         <div className='h-96 flex flex-col justify-center items-center bg-white'>
            <img className='w-80 h-64 p-2' src={pic} alt="" />
            <div>
                <h2 className='text-lg font-bold text-[#5a4044] py-2'>{title}</h2>
            </div>
            <button className="btn py-1 bg-[#2ecc71]">Details</button>
           </div>
     </div>
    );
};

export default Service;