import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Blogs/Blogs";
import Home from "../../Home/Home";
import AllCategoryPhones from "../../Home/productCategory/AllCategoryPhones";
import DashBordLayOut from "../../Layout/dash/DashBordLayOut";
import Main from "../../Layout/Main";
import LogIn from "../../Login/LogIn";
import AddProduct from "../../Pages/Dashbord/addproduct/AddProduct";
import Myorders from "../../Pages/Dashbord/myOrders/Myorders";
import SignUp from "../../SignUp/SignUp";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import AllUsers from '../../Pages/Dashbord/AllUsers/AllUsers'
import AdminRoute from "../PrivetRouter/AdminRouter/AdminRoute";

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
                path:'/allcategoryphones/:id',
                element: <PrivetRouter><AllCategoryPhones></AllCategoryPhones></PrivetRouter>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '/dashbord', element:<DashBordLayOut></DashBordLayOut>,
        children:[
            {
                path : '/dashbord/allusers', element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path : '/dashbord/myorders', element: <Myorders></Myorders>
            },
            {
                path : '/dashbord/addproduct', element: <AddProduct></AddProduct>
            },
        ]
    }
])
export default router