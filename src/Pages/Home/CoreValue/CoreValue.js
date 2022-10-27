import React from 'react';
import { FaBook,FaUsers,FaResearchgate,FaPeopleCarry } from "react-icons/fa";

const CoreValue = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className="card  bg-[#2d69f0] shadow-xl">
                    <div className="card-body text-white">
                        <h2 className="text-5xl pb-6"><FaBook></FaBook> </h2>
                        <p className='text-2xl font-bold'>4,000 <br /> Online courses</p>

                    </div>
                </div>
                <div className="card  bg-[#dd246e] shadow-xl">
                    <div className="card-body text-white">
                        <h2 className="text-5xl pb-6"><FaPeopleCarry></FaPeopleCarry> </h2>
                        <p className='text-2xl font-bold'>Job Placement <br /> Support</p>

                    </div>
                </div>
                <div className="card  bg-[#8007e6] shadow-xl">
                    <div className="card-body text-white">
                        <h2 className="text-5xl pb-6"><FaUsers></FaUsers> </h2>
                        <p className='text-2xl font-bold'>Lifetime
                            Slack chat support</p>

                    </div>
                </div>
                <div className="card  bg-[#0cae74] shadow-xl">
                    <div className="card-body text-white">
                        <h2 className="text-5xl pb-6"><FaResearchgate></FaResearchgate> </h2>
                        <p className='text-2xl font-bold'>Research
                            and Innovation</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreValue;