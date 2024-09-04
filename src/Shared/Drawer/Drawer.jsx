import React from 'react';
import { Link } from 'react-router-dom';

const Drawer = () => {
    return (
       <div className='flex items-center gap-2'>
         <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className=" drawer-button">
          <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
          </label>
        </div>
        <div className="drawer-side z-10">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
           <Link to='/'> <li className='p-3 text-xl border-b-2'>Home</li></Link>
            <Link to='/about'><li className='p-3 text-xl border-b-2'>About Us</li></Link>
            <Link to='/contact'><li className='p-3 text-xl border-b-2'>Contact</li></Link>
            <li className='p-3 text-xl border-b-2'>Services</li>
            <li className='p-3 text-xl border-b-2'>Rooms</li>
            <li className='p-3 text-xl border-b-2'>Meals</li>

          </ul>
        </div>
      </div>
  
       </div>
    );
};

export default Drawer;