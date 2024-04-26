import { createBrowserRouter } from "react-router-dom";
import LayoutPublic2 from "../layout2/LayoutPublic2";
import GeneralGallery from "../components/Views/GeneralGallery/GeneralGallery";
import LoginForm from "../components/Login/LoginForm";
import AdminPage from "../components/Views/AdminPage/AdminPage"
import PersonalGallery from "../components/Views/PersonalGallery/PersonalGallery"


export const Router2 = createBrowserRouter([

    {
        path:'/',
        element: 
             <LayoutPublic2/>,

        children:[
            {
                index: true,
                element:(
                        <GeneralGallery />
                       
                )
            }, 
            {
                path:'/login',
                element: <LoginForm/>
            },
            {
                path:'/adminpage',
                element: <AdminPage/>
            },
            {
                path: "/personalgallery",
                element: <PersonalGallery/>,
            },
            
            
        ]
    }

])