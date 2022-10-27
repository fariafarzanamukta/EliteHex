import React from 'react';
import Course from '../Courses/Course';
import Courses from '../Courses/Courses';
import Banner from './Banner/Banner';
import CoreValue from './CoreValue/CoreValue';
import HomepageCourse from './HomePageCourse/HomepageCourse';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CoreValue></CoreValue>
            <HomepageCourse></HomepageCourse>
            {/* <Courses></Courses> */}
        </div>
    );
};

export default Home;