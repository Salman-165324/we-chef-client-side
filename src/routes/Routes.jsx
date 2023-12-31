// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import HomeLayout from '../layout/HomeLayout';
import ChefPage from '../components/ChefPage';
import PrivateRoute from './PrivateRoute';
import Blog from '../pages/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: '/',
        element: <Navigate to='/home'></Navigate>
      },
      {
        path: '/blog', 
        element: <Blog></Blog>
      },

      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/chef/:id',
        element: <PrivateRoute>
                   <ChefPage></ChefPage>
                   </PrivateRoute>,
        loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-side-salman-165324.vercel.app/allChefs/${params.id}`)

      }
    ]
  },
  {
    path: '/home',
    element: <Home></Home>


  },

]);


export default router;