import React from 'react';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className='px-2 md:px-8 lg:px-20'>
            <Intro></Intro>
            <Skills></Skills>
            <Projects></Projects>

        </div>
    );
};

export default Home;