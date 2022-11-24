import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Blogs/Blogs";
import Home from "../../Home/Home";
import Phones from "../../Home/productCategory/Phones";
import Main from "../../Layout/Main";
import LogIn from "../../Login/LogIn";
import SignUp from "../../SignUp/SignUp";

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
                element: <Phones></Phones>,
                loader:({params})=>fetch(`data.json/phones/${params.id}`)
            },
            {
                path:'/blogs',
                element: <Blogs></Blogs>
            },

        ]
    }
])
export default router