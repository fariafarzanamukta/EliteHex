import React from 'react';
import { FaBook, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const HomepageCourse = () => {
    const homePageAllCourses = useLoaderData();

    return (
        <div>

            <h1 className="ml-4 md:ml-20 mt-10 text-4xl font-bold text-violet-700 font-serif">Find The Right <br />
                Online Course For You</h1>
            <p className="ml-4 md:ml-20 text-red-400 font-serif">You don't have to struggle alone, you've got our assistance and help.</p>
            <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mx-auto rounded-2xl pt-8 pb-16">
                {
                    homePageAllCourses?.slice(0, 3).map(course => <div className="transform hover:-translate-y-3 to-hover text-center secondary-bg transition duration-300 w-full mx-auto bg-gray-200 rounded-2xl">
                        <div className="card h-[550px]  bg-base-100 shadow-xl rounded-2xl">


                            <figure className="px-10 pt-10">
                                <img src={course.img} alt="courses" className="rounded-xl h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <div className='flex justify-between '>
                                    <p className='flex justify-center items-center mr-10'> <FaBook className=''></FaBook> {course?.lessons} lessons</p>
                                    <p className='flex justify-center items-center'><FaStar className='text-yellow-500'></FaStar>{course?.ratting}</p>

                                </div>
                                <h2 className="text-xl font-bold mb-0">{course.title}</h2>
                                <p className='mt-0'><small>{course.sector}</small></p>
                                <p>{course.description}</p>
                                <div className="card-actions">
                                    <Link to={`/courseDetails/${course.id}`}>
                                        <button className="btn btn-primary">Details</button>
                                    </Link>
                                </div>
                            </div>


                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HomepageCourse;