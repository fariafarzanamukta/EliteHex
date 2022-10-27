import React from 'react';
import { FaBook, FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const Course = ({ course }) => {
    const { id, img, sector, title, lessons, ratting, price } = course;

    if (course.length < 0) {
        return <Loading></Loading>
    }
    return (
        <div className=' '>
            <div className="transform hover:-translate-y-3 to-hover text-center secondary-bg transition duration-300 w-full mx-auto bg-gray-200 rounded-2xl">
                <div className="card bg-base-100 shadow-xl rounded-2xl">


                    <figure className="px-10 pt-10">
                        <img src={img} alt="courses" className="rounded-xl h-60" />
                    </figure>
                    <div className="card-body items-center ">
                        <div className='flex justify-between '>

                            <p className='flex justify-center items-center mr-10'> <FaBook className=''></FaBook> {lessons} lessons</p>
                            <p className='flex justify-center items-center'><FaStar className='text-yellow-500'></FaStar>{ratting}</p>

                        </div>
                        <h2 className="text-xl font-bold mb-0 pb-0">{title}</h2>
                        <small className='mt-0 pt-0'>{sector}</small>
                        <div className="card-actions pt-4 ">
                            <NavLink to={`/courseDetails/${id}`}>
                                <button className="btn btn-primary">Details</button>
                            </NavLink>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    );
};

export default Course;