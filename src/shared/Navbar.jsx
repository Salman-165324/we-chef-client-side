// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    console.log(user);

    const handleLogout = () => {

        logout()
            .then(() => {
                console.log('Logout Successful');
            }).catch((error) => {
                console.log(error)
            });
    }
    return (
        <div className="navbar bg-base-100 lg:h-[80px] max-w-[1280px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='font-semibold'><Link to='/'>Home</Link></li>

                        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl font-extrabold">WeChef</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-semibold'><Link to='/'>Home</Link></li>

                    <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            {user?.photoURL ?
                                <div className="avatar mr-3 tooltip tooltip-bottom"  data-tip={user?.displayName}>
                                    <div className="w-[52px] rounded-full border-4 
                                    border-[#c9827c]">
                                        <img src={user?.photoURL} alt="User Profile Image" />
                                    </div>
                                </div> :
                                <div className="avatar placeholder tooltip tooltip-bottom"  data-tip={user?.displayName}>
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-[52px] mr-3">
                                        <span>User</span>
                                    </div>
                                </div>
                            }
                            <button onClick={handleLogout} className="btn btn-outline mr-3">Logout</button>
                        </> :
                        <div>
                            <button className='weChef-btn-primary mr-3'>
                                <Link to='/login'>Login</Link>
                            </button>
                        </div>
                }



            </div>
        </div>
    );
};

export default Navbar;