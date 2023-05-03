// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>, 
      children: [
        {
            path: '/register', 
            element: <Register></Register>
        }, 
        {
            path: '/login', 
            element: <Login></Login>
        }
      ]
    },
  ]);


export default router;