import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
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

        ]
    }
])
export default router