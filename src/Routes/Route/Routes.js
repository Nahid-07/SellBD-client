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
import AllSeller from "../../Pages/Dashbord/AllSeller/AllSeller";
import AllBuyers from "../../Pages/Dashbord/allBuyer/AllBuyers";
import Payment from "../../Pages/Dashbord/myOrders/payment/Payment";
import ErrorPage from '../../ErrorPage/ErrorPage'
import MyProducts from "../../Pages/Dashbord/Myproducts/MyProducts";

const router = createBrowserRouter([
    {
        path:'/',element:<Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
        errorElement: <ErrorPage></ErrorPage>,
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
            {
                path : '/dashbord/seller', element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path : '/dashbord/buyers', element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path : '/dashbord/payment/:id', element: <Payment></Payment>,
                loader : ({params})=> fetch(`http://localhost:5000/bookings/${params.id}`)
            },
            {
                path : '/dashbord/myproducts', element: <MyProducts></MyProducts>
            },
        ]
    }
])
export default router