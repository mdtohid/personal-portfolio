import React from 'react';
import { Link } from 'react-router-dom';
import portfolioImg from '../../img/trs3.jpeg';
import pdf from '../../img/Md.Tohid-Resume-developer.pdf';
import fbImg from '../../img/facebook (1).png'
import LiImg from '../../img/linkedin (1).png'
import githubImg from '../../img/github.png'
import 'animate.css';

const Intro = () => {
    return (
        <div id='home' className='flex flex-col-reverse md:flex-row justify-center items-center gap-y-20 h-screen'>
            <div className='text-start w-full lg:w-6/12 '>
                <div className='flex items-center'>
                    <hr className='w-8 border-[#01d293] me-1' />
                    <span className='text-[#01d293] text-xl'>Hello</span>
                </div>

                <h1 className='text-4xl my-2 text-[#fff] 
                '>I'm Md. Tohidur Rahman</h1>

                <h3 className='text-2xl'>Front end Web Developer</h3>

                <button className='btn btn-sm me-3 btn-success my-5'><a href="https://www.linkedin.com/in/md-tohidur-rahman-a02087262/">Hire me</a> </button>

                <button className='btn btn-sm  btn-outline btn-accent hover:text-[#808dad] my-5 animate__animated animate__pulse animate__faster animate__repeat-3'><a href={pdf}>Download Resume</a></button>

                <div className='flex gap-x-5 my-5 '>
                    <div className='flex flex-col w-14 items-center'>
                        <Link to='https://www.facebook.com/md.tohidur.rahman.714'>
                            <img src={fbImg} alt="" sizes="" srcset="" />
                        </Link>
                        <p className='text-sm'>facebook</p>
                    </div>

                    <div className='flex flex-col w-14 items-center'>
                        <Link to='https://www.linkedin.com/in/md-tohidur-rahman-a02087262/'>
                            <img src={LiImg} alt="" sizes="" srcset="" />
                        </Link>
                        <p className='text-sm'>Linkedin</p>
                    </div>

                    <div className='flex flex-col w-14 items-center'>
                        <Link to='https://github.com/mdtohid'>
                            <img src={githubImg} alt="" sizes="" srcset="" />
                        </Link>
                        <p className='text-sm'>Github</p>
                    </div>
                </div>

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