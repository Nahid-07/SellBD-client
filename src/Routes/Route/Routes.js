import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Blogs/Blogs";
import Home from "../../Home/Home";
import Phones from "../../Home/productCategory/Phones";
import DashBordLayOut from "../../Layout/dash/DashBordLayOut";
import Main from "../../Layout/Main";
import LogIn from "../../Login/LogIn";
import Dashbord from "../../Pages/Dashbord/Dashbord";
import SignUp from "../../SignUp/SignUp";
import PrivetRouter from "../PrivetRouter/PrivetRouter";

const router = createBrowserRouter([
    {
        path:'/',element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/login',
                element: <LogIn></LogIn>
            },
            {
                path:'/phones/:id',
                element: <PrivetRouter><Phones></Phones></PrivetRouter>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '/dashbord', element:<DashBordLayOut></DashBordLayOut>
    }
])
export default router