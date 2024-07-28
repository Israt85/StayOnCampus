import Drawer from "../Drawer/Drawer";


const Navbar = () => {
    return (
        <div className="navbar bg-[#5a4044] text-white">
        <div className="navbar-start">
          <Drawer/>
           
        </div>
        <div className="navbar-center hidden lg:flex">
        <a className=" text-xl">StayOn<span className="text-[#2ecc71]">Campus</span></a>
        </div>
        <div className="navbar-end">
            
          <a className="btn rounded-3xl">Sign Up</a>
        </div>
      </div>
    );
};

export default Navbar;