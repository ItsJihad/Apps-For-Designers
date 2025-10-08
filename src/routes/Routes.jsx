import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Errorpage from "../pages/Errorpage/Errorpage";
import Homepage from "../pages/Home/Homepage";
import Allapps from "../pages/Allapps/Allapps";
import Install from "../pages/Installation/Install";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage></Errorpage>,
    children:[
       {
      index: true,
      path: "/",
      Component: Homepage,
    },
    {
      path:'/apps',
      Component:Allapps
    },
    {
      path:'/installation',
      Component: Install
    }
    ],
  },
]);
