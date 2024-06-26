import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layout/Main";
import Login from "../authentication/Login";
import About from "../pages/About";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../components/Dashboard/Dashboard";
import Register from "../authentication/Register";
import Services from "../pages/Services";
import Project from "../pages/Project";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element:<Home/>,
                loader:()=>fetch('http://localhost:5000/products')
            },
            {
                path: '/about',
                element:<About/>
            },
            {
                path: '/services',
                element:<Services/>
            },
            {
                path: '/projects',
                element:<Project/>
            },
            {
                path: '/register',
                element:<Register/>
            },
            {
                path: '/login',
                element:<Login/>
            },
            {
                path: '/dashboard',
                element:<Dashboard/>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '',
                element:<Dashboard/>
            }
        ]
    }
]);