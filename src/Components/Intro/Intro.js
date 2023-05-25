import React from 'react';
import portfolioImg from '../../img/portfolioImg.jpg';
const Intro = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center px-2 md:px-8 lg:px-20 gap-y-20'>
            <div className='text-start w-full lg:w-6/12 '>
                <p className='flex items-center'>
                <hr className='w-8 border-[#01d293] me-1'/>
                <span className='text-[#01d293] text-xl'>Hello</span>
                </p>

                <h1 className='text-4xl my-2 text-[#fff]'>I'm Md. Tohidur Rahman</h1>

                <h3 className='text-2xl'>Front end Web Developer</h3>

            </div>
            <div className="avatar w-full lg:w-6/12 justify-center">
                <div className="w-52 lg:w-9/12 rounded-full">
                    <img src={portfolioImg} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Intro;