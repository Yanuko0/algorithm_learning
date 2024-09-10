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
const Tree = lazy(()=> import('../pages/Algorithm_learning/07_Tree'))
const Heap = lazy(()=> import('../pages/Algorithm_learning/08_Heap'))
const Algorithm = lazy(()=> import('../pages/Algorithm_learning/09_Algorithm'))
const Dynamic_Programming = lazy (()=> import('../pages/Algorithm_learning/10_Dynamic_Programming'))
const Greedy_Algorithm = lazy (()=> import('../pages/Algorithm_learning/11_Greedy_Algorithm'))

// 人工智能學習
const Getting_Started_AI = lazy(()=>import("../pages/AI/01_Getting_Started_AI"))
const Automated_Decision_Making = lazy(()=>import("../pages/AI/02_Automated_Decision_Making"))
const Image_Recognition = lazy(()=> import("../pages/AI/03_Image_recognition"))
const Python_Environment_setup = lazy(()=>import("../pages/AI/04_Python_Environment_setup"))
const Multiple_Linear_Regression = lazy(()=>import("../pages/AI/05_Multiple_Linear_Regression"))
const Pp01_diabetes_regression_prediction = lazy(()=>import("../pages/AI/06_Pp01_diabetes_regression_prediction"))
const Logistic_Regression = lazy(()=>import("../pages/AI/07_Logistic_Regression"))
const Pp02_Iris_battle = lazy(()=>import("../pages/AI/08_Pp02_Iris_battle"))
const Regularization_techniques = lazy(()=>import("../pages/AI/09_Regularization_techniques"))
const Pp03_News_classification = lazy(()=>import("../pages/AI/10_Pp03_News_classification"))
const Gradient_descent_method = lazy(()=>import("../pages/AI/11_gradient_descent_method"))
const Data_normalization = lazy(()=>import("../pages/AI/12_Data_normalization"))
const Pp04_Handwritten_digit_recognition = lazy(()=>import("../pages/AI/13_Pp04_Handwritten_digit_recognition"))
const KMeans = lazy(()=>import("../pages/AI/14_KMeans"))
const Pp05_KMeans_accomplish = lazy(()=>import("../pages/AI/15_Pp05_KMeans_accomplish"))
const Gaussian_Mixture_Model = lazy(()=>import("../pages/AI/16_Gaussian_Mixture_Model"))
const Pp06_Speaker_identification = lazy(()=>import("../pages/AI/17_Pp06_Speaker_identification"))
const Perceptron = lazy(()=>import("../pages/AI/18_Perceptron"))
const Activation_function = lazy(()=>import("../pages/AI/19_Activation_function"))
const Gradient_Disappears = lazy(()=>import("../pages/AI/20_Gradient_Disappears"))
const Pp07_Neural_Network_Algorithm = lazy(()=>import("../pages/AI/21_Pp07_Neural_Network_Algorithm"))

//Nodejs
const First_Iintroduction_Nodejs = lazy(()=>import("../pages/NodeJs/01_First_Iintroduction_Nodejs"))
const File_SystemModule = lazy(()=>import("../pages/NodeJs/02_File_SystemModule"))
const Path_Module = lazy(()=>import("../pages/NodeJs/03_Path_Module"))

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
            {
                path: "Tree",
                element:<Suspense fallback={'加載中'}><Tree/></Suspense>
            },
            {
                path: "Heap",
                element:<Suspense fallback={'加載中'}><Heap/></Suspense>
            },
            {
                path: "Algorithm",
                element:<Suspense fallback={'加載中'}><Algorithm/></Suspense>
            },
            {
                path: "Dynamic_Programming",
                element:<Suspense fallback={'加載中'}><Dynamic_Programming/></Suspense>
            },
            {
                path: "Greedy_Algorithm",
                element:<Suspense fallback={'加載中'}><Greedy_Algorithm/></Suspense>
            },
        ]
    },
    {
        path: '/AI',
        element: <Layout/>,
        children: [
            {
                index:true,
                element:<Suspense fallback={'加載中'}><Getting_Started_AI/></Suspense>
            },
            {
                path: "Automated_Decision_Making",
                element:<Suspense fallback={'加載中'}><Automated_Decision_Making/></Suspense>
            },
            {
                path: "Image_Recognition",
                element:<Suspense fallback={'加載中'}><Image_Recognition/></Suspense>
            },
            {
                path: "Python_Environment_setup",
                element:<Suspense fallback={'加載中'}><Python_Environment_setup/></Suspense>
            },
            {
                path: "Multiple_Linear_Regression",
                element:<Suspense fallback={'加載中'}><Multiple_Linear_Regression/></Suspense>
            },
            {
                path: "Pp01_diabetes_regression_prediction",
                element:<Suspense fallback={'加載中'}><Pp01_diabetes_regression_prediction/></Suspense>
            },
            {
                path: "Logistic_Regression",
                element:<Suspense fallback={'加載中'}><Logistic_Regression/></Suspense>
            },
            {
                path: "Pp02_Iris_battle",
                element:<Suspense fallback={'加載中'}><Pp02_Iris_battle/></Suspense>
            },
            {
                path: "Regularization_techniques",
                element:<Suspense fallback={'加載中'}><Regularization_techniques/></Suspense>
            },
            {
                path: "Pp03_News_classification",
                element:<Suspense fallback={'加載中'}><Pp03_News_classification/></Suspense>
            },
            {
                path: "Gradient_descent_method",
                element:<Suspense fallback={'加載中'}><Gradient_descent_method/></Suspense>
            },
            {
                path: "Data_normalization",
                element:<Suspense fallback={'加載中'}><Data_normalization/></Suspense>
            },
            {
                path: "Pp04_Handwritten_digit_recognition",
                element:<Suspense fallback={'加載中'}><Pp04_Handwritten_digit_recognition/></Suspense>
            },
            {
                path: "KMeans",
                element:<Suspense fallback={'加載中'}><KMeans/></Suspense>
            },
            {
                path: "Pp05_KMeans_accomplish",
                element:<Suspense fallback={'加載中'}><Pp05_KMeans_accomplish/></Suspense>
            },
            {
                path: "Gaussian_Mixture_Model",
                element:<Suspense fallback={'加載中'}><Gaussian_Mixture_Model/></Suspense>
            },
            {
                path: "Pp06_Speaker_identification",
                element:<Suspense fallback={'加載中'}><Pp06_Speaker_identification/></Suspense>
            },
            {
                path: "Perceptron",
                element:<Suspense fallback={'加載中'}><Perceptron/></Suspense>
            },
            {
                path: "Activation_function",
                element:<Suspense fallback={'加載中'}><Activation_function/></Suspense>
            },
            {
                path: "Gradient_Disappears",
                element:<Suspense fallback={'加載中'}><Gradient_Disappears/></Suspense>
            },
            {
                path: "Pp07_Neural_Network_Algorithm",
                element:<Suspense fallback={'加載中'}><Pp07_Neural_Network_Algorithm/></Suspense>
            },
        ]
    },
    {
        path: '/NodeJs',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Suspense fallback={'加載中'}><First_Iintroduction_Nodejs/></Suspense>
            },
            {
                path: "File_SystemModule",
                element:<Suspense fallback={'加載中'}><File_SystemModule/></Suspense>
            },
            {
                path: "Path_Module",
                element:<Suspense fallback={'加載中'}><Path_Module/></Suspense>
            },

        ]
    }
])

export default router