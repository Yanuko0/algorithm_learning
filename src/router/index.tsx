import { createHashRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./index.scss"
import Layout from "@/pages/Layout";

const Home = lazy(()=> import('../pages/Home'))
const Algorithm = lazy(()=> import('../pages/Algorithm_learning/01_TimeComplexity'))

const router = createHashRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index:true,
                element:<Suspense fallback={'加載中'}><Home/></Suspense>
            },
            {
                path: "TimeComplexity",
                element:<Suspense fallback={'加載中'}><Algorithm/></Suspense>
            },
        ]
    },
])

export default router