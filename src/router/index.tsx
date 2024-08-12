import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./index.scss"
import Layout from "@/pages/Layout";

const Home = lazy(()=> import('../pages/Home'))
const Algorithm = lazy(()=> import('../pages/Algorithm_learning'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index:true,
                element:<Suspense fallback={'加載中'}><Home/></Suspense>
            },
            {
                path: "algorithm",
                element:<Suspense fallback={'加載中'}><Algorithm/></Suspense>
            },
        ]
    },
])

export default router