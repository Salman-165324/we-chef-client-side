// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Register from '../pages/Register';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/register', 
            element: <Register></Register>
        }
      ]
    },
  ]);


export default router;