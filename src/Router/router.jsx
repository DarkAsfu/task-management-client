import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddTask from "../Pages/AddTask/AddTask";
import AllTask from "../Pages/AllTask/AllTask";
import MyTask from "../Pages/MyTask/MyTask";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addtask',
                element: <AddTask></AddTask>
            },
            {
                path: '/alltask',
                element: <AllTask></AllTask>
            },
            {
                path: '/mytask',
                element: <MyTask></MyTask>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
]);

export default router;