// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../shared/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../shared/Loader';

const MainLayout = () => {
    const navigation = useNavigation(); 
    console.log(navigation.state);

    return (
        <div className='bg-[#ddd4c0] min-h-screen'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {
                navigation.state === 'loading' && <Loader></Loader>
            }
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default MainLayout;