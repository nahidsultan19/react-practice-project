import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layout/Main";
import Login from "../pages/Login";
import About from "../pages/About";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../components/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/about',
                element:<About/>
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