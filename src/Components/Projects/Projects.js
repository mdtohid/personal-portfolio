import React from 'react';
import img1 from '../../img/Screenshot 2023-05-26 162618.png';
import img2 from '../../img/DrilledProject.png';
import img3 from '../../img/DreamFruitProject.png';
import './Projects.css';
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        <div id='projects' className='py-20'>
            <p className='flex items-center'>
                <hr className='w-8 border-[#01d293] me-1' />
                <span className='text-[#01d293] text-xl my-5'>Projects</span>
            </p>
            <h1 className='text-4xl my-5 text-center text-[#fff]'>My Projects</h1>
            <p className='text-xl mb-10 text-center'>These are Some of my recent projects done past 5-6 months.</p>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-20  lg:gap-6'>
                <div className='projectImg '>
                    <img src={img1} alt="" />
                    <div className='projectContent flex flex-col items-center justify-center gap-3'>
                        <div className='flex items-center justify-center gap-3'>
                            <Link to={'https://mdtohid.github.io/Netbook-website/'} className="btn btn-sm btn-success">Live link</Link>
                            <Link to={'https://github.com/mdtohid/Netbook-website'} className="btn btn-sm btn-warning">Client code link</Link>
                        </div>
                    </div>
                </div>

                <div className='projectImg'>
                    <img src={img2} alt="" />
                    <div className='projectContent flex flex-col items-center justify-center gap-3'>
                        <div className='flex items-center justify-center gap-3'>
                            <Link to={'https://assignment-12-4ff33.web.app/'} className="btn btn-sm btn-success">Live link</Link>
                            <Link to={'https://github.com/mdtohid/Trs-project-client-side'} className="btn btn-sm btn-warning">Client code link</Link>
                        </div>
                        <Link to={'https://github.com/mdtohid/Trs-project-server-side'} className="btn btn-sm btn-error">Server code link</Link>
                    </div>
                </div>

                <div className='projectImg'>
                    <img src={img3} alt="" />
                    <div className='projectContent flex flex-col items-center justify-center gap-3'>
                        <div className='flex items-center justify-center gap-3'>
                            <Link to={'https://assignment-11-client-sid-371c0.web.app/'} className="btn btn-sm btn-success">Live link</Link>
                            <Link to={'https://github.com/mdtohid/Dream-Fruit'} className="btn btn-sm btn-warning">Client code link</Link>
                        </div>
                        <Link to={'https://github.com/mdtohid/Dream-Fruit-server-side'} className="btn btn-sm btn-error">Server code link</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Projects;
