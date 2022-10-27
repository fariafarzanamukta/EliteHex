import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../Loading/Loading';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import Lottie from 'lottie-react'
import register from '../../../assets/register.json'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {

    const [error, setError] = useState('');
    const { createUser, updateUserProfile, providerLogin, verifyEmail } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
    

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleEmailVerification();
                toast.success('Please verify your email address.')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }


    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
               if(user){
                toast.success("Successfully Login With Google");
               }
            })
            .catch(error => console.error(error))
    }

    return (
        <div>

            <div>
                <div className="hero min-h-screen bg-base-200">

                    <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold pb-4">Register now!</h1>
                            <div>
                                <div className='h-full w-full'>
                                    <Lottie animationData={register} loop={true} />
                                </div>

                            </div>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit} className="card-body pb-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                    <label className="label">
                                        <h1>Have An Account ? <span className='text-violet-500 font-semibold'> <Link to='/login'>Click to Login</Link> </span> </h1>
                                    </label>
                                </div>
                                <div className="text-red-500 my-1">
                                    {error}
                                </div>
                                <div className="form-control mb-0">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>

                            <div className="divider mx-6 mt-0">OR</div>
                        
                            <button
                                onClick={handleGoogleSignIn}
                                className="btn w-[80%] mx-auto mb-10"><FaGoogle className='mr-2 text-2xl' >
                                </FaGoogle>Google Signin
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;