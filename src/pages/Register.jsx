// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
const Register = () => {
    const { register, addUserNameAndPhoto, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [errorText, setErrorText] = useState('');
    const navigate = useNavigate(); 
    const handleRegister = e => {
        setErrorText('')
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        console.log(name, password, photoURL, email);

        if (password.length < 6) {

            setErrorText('Password needs to at least 6 character long');
            return;
        }
        // Register With Email and Password 
        register(email, password)
            .then((userCredential) => {
                // Signed in 
                const newUser = userCredential.user;
                console.log(newUser);
                if (name || photoURL) {
                    addUserNameAndPhoto(name, photoURL)
                        .then(() => {
                            // Profile updated!
                            // ...
                        }).catch((error) => {
                            console.log(error)
                        });
                }

                navigate('/'); 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                setErrorText(errorMessage); 
                // ..
            });

    }


    // Register With Google
    const handleGoogleSignin = e => {

        signInWithGoogle()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const newUser = result.user;
                // console.log(newUser);
                navigate('/'); 
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
                navigate('/'); 
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
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <div className="card-body">

                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name='photoURL' type="url" placeholder="photo URL" className="input input-bordered" />
                            </div>
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
                                <button className="weChef-btn-primary">Register</button>
                            </div>
                        </form>
                        {/* Google and Git Signup */}
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
                            <p>Already have an account? <Link className='underline' to='/login'>Login</Link></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;