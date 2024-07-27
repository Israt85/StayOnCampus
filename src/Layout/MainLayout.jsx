import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Home from "../Pages/Home/Home";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;