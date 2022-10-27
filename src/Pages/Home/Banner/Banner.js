import React from 'react';
import Lottie from 'lottie-react'
import education from '../../../assets/education.json'

const Banner = () => {
    
    return (
        <div className='bg-[#b8dde3]'>
            <div className='px-4 py-10 pb-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-24'>
                <div className='flex flex-col items-center justify-between lg:flex-row'>
                    <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                        <div className='max-w-xl mb-6 lg:mt-2'>
                            <h1 className='text-5xl font-extrabold pb-4'>Launch your <br />Own <span>online</span> learning <br />Platform</h1>
                            <h3>Unlimited access to all 60+ instructors.</h3>
                            <p>You`re guaranteed to find something that`s right for you.</p>
                        </div>
                    </div>
                    <div className=' lg:w-1/2'>
                        <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96 pb-10'>
                            <Lottie animationData={education} loop={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;