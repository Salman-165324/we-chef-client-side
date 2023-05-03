// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
const Login = () => {
    const [errorText, setErrorText] = useState('');
    const { login } = useContext(AuthContext);

    const handleLogin = e => {

        setErrorText('')
        e.preventDefault();
        const form = e.target;
        const password = form.password.value;
        const email = form.email.value;
        console.log(password, email);

        login(email, password)
            .then((userCredential) => {
                // Signed in 
                const loggedUser = userCredential.user;
                console.log(loggedUser); 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorText(errorMessage)
                console.log(error); 
            });
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <p className='text-red-500 font-semibold ml-1'>{errorText}</p>

                            </div>
                            <div className="form-control mt-6">
                                <button className="weChef-btn-primary">Login</button>
                            </div>
                        </form>
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
                        <div className='mt-2'>
                            <p>New to our community? <Link className='underline' to='/register'>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;