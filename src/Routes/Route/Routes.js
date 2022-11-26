import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Blogs/Blogs";
import Home from "../../Home/Home";
import AllCategoryPhones from "../../Home/productCategory/AllCategoryPhones";
import Phones from "../../Home/productCategory/Phones";
import DashBordLayOut from "../../Layout/dash/DashBordLayOut";
import Main from "../../Layout/Main";
import LogIn from "../../Login/LogIn";
import AddProduct from "../../Pages/Dashbord/addproduct/AddProduct";
import MyBuyers from "../../Pages/Dashbord/myBuyers/MyBuyers";
import Myproducts from "../../Pages/Dashbord/Myproducts/Myproducts";
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
            // {
            //     path:'/phones/:id',
            //     element: <PrivetRouter><Phones></Phones></PrivetRouter>,
            //     loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            // },
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
                path : '/dashbord/mybuyers', element: <MyBuyers></MyBuyers>
            },
            {
                path : '/dashbord/myproducts', element: <Myproducts></Myproducts>
            },
            {
                path : '/dashbord/addproduct', element: <AddProduct></AddProduct>
            },
        ]
    }
])
export default router