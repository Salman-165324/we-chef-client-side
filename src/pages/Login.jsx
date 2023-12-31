// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
const Login = () => {

    const [errorText, setErrorText] = useState('');
    const { login, signInWithGithub, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation(); 
    console.log(location); 
    const from = location?.state?.from?.pathname || '/'; 
    const previousLocation = location?.state?.from?.pathname; 
    const navigate = useNavigate(); 
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
                navigate(from, {replace:true}); 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorText(errorMessage)
                console.log(error); 
            });
    }


        // signin With Google
        const handleGoogleSignin = e => {

            signInWithGoogle()
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const newUser = result.user;
                    // console.log(newUser);
                    navigate(from, {replace:true}); 
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    console.log(error);
                    setErrorText(errorMessage)
                });
    
        }
    
        // Register with github
        const handleSignInWithGithub = () => {
    
            signInWithGithub()
                .then((result) => {
                    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                    const credential = GithubAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
    
                    // The signed-in user info.
                    const newUser = result.user;
                    // console.log(newUser); 
                    navigate(from, {replace:true}); 
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = GithubAuthProvider.credentialFromError(error);
                    
                    console.log(error); 
                    setErrorText(errorMessage); 
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
                            <button onClick={handleGoogleSignin} className="btn bg-[#ece6e6] border-[#d3d4d7]  text-[#4b0e0e] hover:bg-[#c0b9b9]">
                                <FaGoogle className='mr-2'></FaGoogle>
                                Continue with Google</button>
                        </div>
                        <div className="form-control mt-2">
                            <button onClick={handleSignInWithGithub} className="btn bg-[#ece6e6] border-[#d3d4d7]  text-[#4b0e0e] hover:bg-[#c0b9b9]">
                                <FaGithub className='mr-2'></FaGithub>
                                Continue with Github</button>
                        </div>
                        <div className='mt-2'>
                            <p>New to our community?
                             <Link className='underline' to='/register' state={{from: previousLocation}}>Register</Link>
                             {/* <Navigate className='underline' to='/register'>Register</Navigate> */}
                             </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;