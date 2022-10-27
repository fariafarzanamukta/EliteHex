import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../Loading/Loading';
import Lottie from 'lottie-react'
import login from '../../../assets/login.json'
// import OtherAccount from '../OtherAccount/OtherAccount';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

    const [error, setError] = useState('');
    const { signIn, setLoading, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }


    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                if(user){
                    toast.success("Successfully Login With Google");
                   }
            })
            .catch(error => console.error(error))
    }



    return (
        <div>
            <div>
                <div className="hero min-h-screen w-full bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <div className='h-full w-full'>
                                <Lottie animationData={login} loop={true} />
                            </div>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit} className="card-body pb-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    {/* <label className="label">
                                        <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                                    </label> */}

                                </div>
                                <div className="text-red-500 py-1">
                                    {error}
                                </div>
                                <label className="label">
                                    <h1>Need Account? <span className='text-violet-500 font-semibold'> <Link to='/register'>Click to Register</Link> </span></h1>
                                </label>
                                <div className="form-control ">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <div className="divider mx-6 mt-0">OR</div>
                            {/* <OtherAccount></OtherAccount> */}

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

export default Login;