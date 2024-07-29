import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Footer5 from "../Components/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
          
            <Outlet></Outlet>
            <Footer5/>
            
        </div>
    );
};

export default MainLayout;