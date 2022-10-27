import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaMoon, FaPencilRuler, FaSun, FaUser } from "react-icons/fa";
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { useDarkMode } from '../../../hooks/useDarkMode';


let activeStyle = {
    textDecoration: "underline",
    color: '#7c3aed'

};

const Header = () => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <>
            <nav className="sticky  top-0 w-full z-50 text-gray-800">
                <div className="navbar bg-gray-200">
                    <div className="flex-1 md:pl-5 mx-2">
                        <Link to="/">
                            <div className="relative top-[]">
                                <p className='font-mono font-extrabold text-base text-violet-600  md:text-2xl flex justify-center items-center'><FaPencilRuler /> EliteHex</p>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden mx-2 lg:flex  px-10">
                        <div className="flex items-center">

                            <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mr-2">
                                <NavLink to="/home"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="py-3">HOME</button>
                                </NavLink>
                            </h1>
                            <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mr-2">
                                <NavLink to="/courses"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="py-3">COURSES</button>
                                </NavLink>
                            </h1>
                            <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mr-2">
                                <NavLink to="/blog"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="py-3">BLOG</button>
                                </NavLink>
                            </h1>
                            <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mr-2">
                                <NavLink to="/faq"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="py-3">FAQ</button>
                                </NavLink>
                            </h1>


                            <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mr-2">
                                <NavLink to="/contact"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="py-3">CONTACT</button>
                                </NavLink>
                            </h1>

                            <h1>
                                {
                                    user?.displayName &&


                                    <div className='flex justify-center items-center'>

                                        <div className='tooltip tooltip-bottom' data-tip={user?.displayName}>
                                            {
                                                user?.photoURL ?
                                                    <img className="rounded-3xl w-10 tooltip" src={user?.photoURL} alt="" />
                                                    :
                                                    <FaUser></FaUser>
                                            }
                                        </div>
                                    </div>

                                }
                            </h1>

                            <h1>
                                {
                                    user ?
                                        <button
                                            onClick={async () => {
                                                await handleSignOut();
                                                toast.success("Successfully Sign Out");
                                            }

                                            }>

                                            <div className='ml-5'>
                                                <Link to='/register' className="bg-violet-600 w-36 px-4 py-[12px] font-semibold text-white rounded-xl"><span className='text-lg'>SIGN OUT</span></Link>
                                            </div>
                                        </button>

                                        :
                                        <div className='ml-24 md:ml-80  lg:ml-0 lg:mr-6'>
                                            <Link to='/login' className="bg-violet-600 px-4 py-[12px] font-semibold text-white rounded-xl w-36">
                                                LOG IN
                                            </Link>
                                        </div>
                                }

                            </h1>

                            <h1 className='flex justify-center items-center'>
                                <span className='px-2'><FaMoon></FaMoon> </span>
                                {
                                    isDarkMode ? <input data-tip="DarkMood" type="checkbox" className="toggle tooltip tooltip-bottom bg-emerald-400" onChange={toggleDarkMode} /> :
                                        <input data-tip="Regular" type="checkbox" className="toggle tooltip tooltip-bottom bg-emerald-400" defaultChecked onChange={toggleDarkMode} />
                                }
                                <span className='px-2'><FaSun></FaSun></span>
                            </h1>

                        </div>
                    </div>


                    {/* tablate ans phone  */}
                    <div className="flex-none lg:hidden dropdown dropdown-left">
                        <button tabIndex="0" className="m-1 btn hover:bg-gray-800 btn-square hover:text-white btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        <ul tabIndex="0" className="p-2 relative top-10 shadow menu dropdown-content bg-slate-100 dark:bg-slate-600 rounded-box w-52 mt-2">
                            <li>
                                <Link className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-2" to='/'>
                                    HOME
                                </Link>
                            </li>
                            <li className="">
                                <Link className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3" to="/courses">
                                    COURSES
                                </Link>
                            </li>
                            <li className="">
                                <Link className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3" to="/blog">
                                    Blog
                                </Link>
                            </li>



                            <li>
                                <Link className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3" to="/contact">
                                    CONTACT
                                </Link>
                            </li>


                            <li className='py-2'>
                                {
                                    user?.displayName &&
                                    <div className='flex justify-center items-center'>
                                        <h3 className="text-sm font-semibold pr-2 ml-0 text-violet-700">Hi,{user?.displayName}  </h3>
                                        <img className="rounded-3xl w-10" src={user?.photoURL} alt="" />
                                    </div>

                                }
                            </li>

                            <li>
                                {
                                    user ?
                                        <button
                                            onClick={async () => {
                                                await handleSignOut();
                                                toast("Successfully Sign Out");
                                            }

                                            }>

                                            <div className='mx-auto mb-2'>

                                                <Link to='/register' className="bg-violet-600 md:w-36 px-6 py-[12px] pb-4 font-semibold text-white rounded-xl"><span className='text-xs md:text-lg'>SIGN OUT</span></Link>

                                            </div>
                                        </button>


                                        :
                                        <div className='mx-auto'>
                                            <Link to='/login' className="bg-violet-600 px-4 py-[12px] font-semibold text-white rounded-xl ">LOG IN</Link>
                                        </div>
                                }

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;