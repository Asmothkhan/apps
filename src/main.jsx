import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Trending from './Component/Trending/Trending.jsx';
import Apps from './Component/App/Apps.jsx';
import AppDetails from './Component/App/AppDetails.jsx';
import InstallApp from './Component/App/InstallApp.jsx';
import AppProvider from './Component/App/AppContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:true,
        path:"/",
        loader:()=>fetch('./AppData.json'),
        Component:Home
      },
      {
        path:'/Apps',
        loader: async () => {
          const res = await fetch('./AppData.json');
               return res.json();
            },
        Component:Apps
      },
      {
        path:'/InstallApp',
        Component:InstallApp
      }
    
    ]
  },
  {
    path:'/app/:id',
    Component:AppDetails
  },
 
])


;


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
)
