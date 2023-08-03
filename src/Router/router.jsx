import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddTask from "../Pages/AddTask/AddTask";
import AllTask from "../Pages/AllTask/AllTask";
import MyTask from "../Pages/MyTask/MyTask";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import Contact from "../Pages/Contact/Contact";
import PrivateRouter from "../Provider/PrivateRouter";
import TaskDetails from "../Pages/TaskDetails/TaskDetails";

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
                element: <PrivateRouter><AddTask></AddTask></PrivateRouter>
            },
            {
                path: '/alltask',
                element: <AllTask></AllTask>
            },
            {
                path: '/mytask',
                element: <PrivateRouter><MyTask></MyTask></PrivateRouter>
            },
            {
                path: '/taskdetails/:id',
                element: <TaskDetails></TaskDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/alltask/${params.id}`)
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