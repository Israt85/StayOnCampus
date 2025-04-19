import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Conatact from "../Pages/Contact/Conatact";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Services from "../Components/Services/Services";
import Service from "../Pages/Services/Services";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: '/',
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/contact',
          element:<Conatact/>
        },
        {
          path:'/services',
          element:<Service></Service>
        }
      ]
    },
    {path:"/login",
      element: <Login></Login>

    },
    {path:"/signup",
      element:<Signup></Signup>

    }
  ]);
  export default router