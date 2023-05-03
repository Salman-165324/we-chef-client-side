import React from 'react';
import Navbar from '../shared/Navbar';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className='bg-[#ddd4c0]'>
            <Navbar></Navbar>
            <div className='max-w-4xl p-6 mx-auto mt-10 flex items-center justify-center'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://images.pexels.com/photos/1888015/pexels-photo-1888015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sorry Something Went Wrong!</h2>
                        <p>
                            <i>{error.statusText || error.message}</i>
                        </p>
                        <div className="card-actions justify-end">
                            <button className="weChef-btn-primary ">
                                <Link to='/'>Home</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ErrorPage;