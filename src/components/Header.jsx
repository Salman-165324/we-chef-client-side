import React from 'react';
import Navbar from '../shared/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='relative'>
            <div  className="absolute top-0 w-full z-50">
                <Navbar></Navbar>
            </div>
            {/* <Navbar className="absolute top-0 w-full z-50"></Navbar> */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/568370/pexels-photo-568370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg mt-8">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to WeChef!</h1>
                        <p className="mb-5 hero-overlay bg-opacity-10 py-3 px-5 rounded-lg ">WeChef is the ultimate cooking social community, where recipes come to life. By joining us you will join a robust foodie community and where you will get to share your recipes and food ideas with hundreds of other like-minded members.</p>
                        <button className="weChef-btn-primary">
                            <Link to= '/register'>Get Started</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;