import React from 'react';
import { FaBook, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    return (
        <div>
            <div className="card w-1/2 mx-auto bg-lime-100 shadow-xl my-16">
                <figure><img className='mt-4 rounded-lg w-[550px]' src={courseDetails?.img} alt="course" /></figure>
                <div className="card-body text-center">
                    <div className='flex justify-between '>
                        <p className='flex justify-center items-center mr-10'> <FaBook className=''></FaBook> {courseDetails?.lessons} lessons</p>
                        <p className='flex justify-center items-center'><FaStar className='text-yellow-500'></FaStar>{courseDetails?.ratting}</p>

                    </div>
                    <h2 className="text-3xl font-bold">{courseDetails?.title}</h2>
                    <small>{courseDetails?.sector}</small>
                    <p className='text-lg'>{courseDetails?.description}</p>
                    <p className='font-bold'>{courseDetails?.price} BDT</p>
                    <div className="card-actions justify-center">
                        <Link to='/courses'>
                            <button className="btn btn-primary">Go back</button>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;