import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Errorpage from "../pages/Errorpage/Errorpage";
import Homepage from "../pages/Home/Homepage";
import Allapps from "../pages/Allapps/Allapps";
import Install from "../pages/Installation/Install";
import AppDetails from "../pages/SpecificApps/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage></Errorpage>,
    children:[
       {
      index: true,
      loader:()=> fetch("/appsData.json"),
      path: "/",
      Component: Homepage,
    },
    {
      loader:()=> fetch("/appsData.json"),
      path:'/apps',
      Component:Allapps
    },
    {
      path:'/installation',
      Component: Install
    },
    {  
      loader:()=> fetch("/appsData.json"),
      path:'/appdetails:id',
      Component:AppDetails

    }
    ],
  },
]);
