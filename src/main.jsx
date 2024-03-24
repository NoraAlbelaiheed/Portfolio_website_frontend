import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter, BrowserRouter} from 'react-router-dom';
import Blog from './routes/blogsPage'
import Works from './routes/works'
import WorkDetail from './routes/workDetail';
import Navbar from './components/Navbar.jsx';
import Register from './components/Register.jsx';
import LoginPage from './components/LoginPage.jsx';
import Profile from './components/Profile.jsx';




const router= createBrowserRouter(
[

 {path:'/*' , element:<App/>},
 {path:'/blogs' , element:<Blog/>},
 {path:'/works' , element:<Works/>},
 {path:'/blogs/article' , element:<WorkDetail/>},
 {path:'/register' , element:<Register/>},
 {path:'/login' , element:<LoginPage/>},
 {path:'/profile' , element:<Profile/>},
]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
