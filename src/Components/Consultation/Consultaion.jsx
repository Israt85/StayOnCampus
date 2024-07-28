import React from 'react';

const Consultaion = () => {
    return (
        <div className='w-72 mx-auto my-4 lg:w-full h-[400px]'>
            
            <div className="max-w-2xl bg-[#5a4044] text-white h-auto mx-auto shrink-0 py-2 shadow-xl">
            <h2 className="text-3xl text-center font-bold pt-6">Free Consultation</h2>
      <form className="card-body">
        <div className='flex items-center gap-2 justify-between w-full'>
        <div className="form-control w-1/2">
          <label className="label">
            <span >Your Name</span>
          </label>
          <input type="text" className="input rounded-md input-bordered" required />
        </div><div className="form-control w-1/2">
          <label className="label">
            <span >Your Email</span>
          </label>
          <input type="email"  className="input rounded-md input-bordered" required />
        </div>
        </div>
        <div className='flex items-center gap-2 justify-between w-full'>
        <div className="form-control w-1/2">
          <label className="label">
            <span >Phone Num</span>
          </label>
          <input type="text" className="input rounded-md input-bordered" required />
        </div><div className="form-control w-1/2">
          <label className="label">
            <span >Your Institute</span>
          </label>
          <input type="text"className="input rounded-md input-bordered" required />
        </div>
        </div>
        <div className="form-control w-40 mx-auto mt-6">
          <button className="btn border-none bg-[#2ecc71]">Request Free Demo</button>
        </div>
      </form>
    </div>
            
        </div>
    );
};

export default Consultaion;