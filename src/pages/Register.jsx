// eslint-disable-next-line no-unused-vars
import React from 'react';
import {FaGithub, FaGoogle } from 'react-icons/fa';
const Register = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="weChef-btn-primary">Login</button>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn bg-[#ece6e6] border-[#d3d4d7]  text-[#4b0e0e] hover:bg-[#c0b9b9]">
                            <FaGoogle className='mr-2'></FaGoogle>
                            Continue with Google</button>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn bg-[#ece6e6] border-[#d3d4d7]  text-[#4b0e0e] hover:bg-[#c0b9b9]">
                            <FaGithub className='mr-2'></FaGithub>
                            Continue with Github</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;