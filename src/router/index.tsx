/* eslint-disable react-refresh/only-export-components */
import { createHashRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./index.scss"
import Layout from "@/pages/Layout";

const Home = lazy(()=> import('../pages/Home'))
const TimeComplexity = lazy(()=> import('../pages/Algorithm_learning/01_TimeComplexity'))
const SpaceComplexity = lazy(()=> import('../pages/Algorithm_learning/02_SpaceComplexity'))
const Stack = lazy(()=> import('../pages/Algorithm_learning/03_Stack'))
const Queue = lazy(()=> import('../pages/Algorithm_learning/04_Queue'))
const LinkedList = lazy(()=> import('../pages/Algorithm_learning/05_LinkedList'))
const Dictionary_Hash = lazy(()=> import('../pages/Algorithm_learning/06_Dictionary_Hash'))

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
                element:<Suspense fallback={'加載中'}><TimeComplexity/></Suspense>
            },
            {
                path: "SpaceComplexity",
                element:<Suspense fallback={'加載中'}><SpaceComplexity/></Suspense>
            },
            {
                path: "Stack",
                element:<Suspense fallback={'加載中'}><Stack/></Suspense>
            },
            {
                path: "Queue",
                element:<Suspense fallback={'加載中'}><Queue/></Suspense>
            },
            {
                path: "LinkedList",
                element:<Suspense fallback={'加載中'}><LinkedList/></Suspense>
            },
            {
                path: "Dictionary_Hash",
                element:<Suspense fallback={'加載中'}><Dictionary_Hash/></Suspense>
            },
        ]
    },
])

export default router