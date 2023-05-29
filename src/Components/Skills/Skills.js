import React from 'react';

const Skills = () => {
    return (
        <div id='skills' className='py-20'>
            <div className='flex items-center'>
                <hr className='w-8 border-[#01d293] me-1' />
                <span className='text-[#01d293] text-xl my-5'>Skills</span>
            </div>
            <h1 className='text-4xl my-5 text-center text-[#fff]'>My Skills</h1>
            <div className='grid grid-cols-3 md:grid-cols-5 flex-none xl:flex  gap-4 mx-auto justify-center '>
                <button className="btn btn-sm rounded-full text-cyan-600">HTML5</button>
                <button className="btn btn-sm rounded-full text-cyan-600">CSS3</button>
                <button className="btn btn-sm rounded-full text-cyan-600">Bootstrap</button>
                <button className="btn btn-sm rounded-full text-cyan-600">Tailwind</button>
                <button className="btn btn-sm rounded-full text-cyan-600">JavaScript</button>
                <button className="btn btn-sm rounded-full text-cyan-600">React Js</button>
                <button className="btn btn-sm rounded-full text-cyan-600">Firebase</button>
                <button className="btn btn-sm rounded-full text-cyan-600">MongoDB</button>
                <button className="btn btn-sm rounded-full text-cyan-600">Express Js</button>
                <button className="btn btn-sm rounded-full text-cyan-600">Node Js</button>
            </div>
            <h1 className='text-4xl text-center my-10 text-[#01d293]'>Highlighted Skills</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 '>
                <div className="card bg-[#1e2231] shadow-xl pb-14">
                    <h1 className='text-center text-2xl my-3'>HTML</h1>
                    <figure className="px-10 pt-10">
                        <div className="radial-progress border border-zinc-600 text-3xl" style={{ "--value": "88", "--size": "12rem", "--thickness": "3px" }}>88%</div>
                    </figure>
                </div>

                <div className="card bg-[#1e2231] shadow-xl pb-14">
                    <h1 className='text-center text-2xl my-3'>CSS</h1>
                    <figure className="px-10 pt-10">
                        <div className="radial-progress border border-zinc-600 text-3xl" style={{ "--value": "85", "--size": "12rem", "--thickness": "3px" }}>85%</div>
                    </figure>
                </div>

                <div className="card bg-[#1e2231] shadow-xl pb-14">
                    <h1 className='text-center text-2xl my-3'>JavaScript</h1>
                    <figure className="px-10 pt-10">
                        <div className="radial-progress border border-zinc-600 text-3xl" style={{ "--value": "68", "--size": "12rem", "--thickness": "3px" }}>68%</div>
                    </figure>
                </div>

                <div className="card bg-[#1e2231] shadow-xl pb-14">
                    <h1 className='text-center text-2xl my-3'>React Js</h1>
                    <figure className="px-10 pt-10">
                        <div className="radial-progress border border-zinc-600 text-3xl" style={{ "--value": "78", "--size": "12rem", "--thickness": "3px" }}>78%</div>
                    </figure>
                </div>

                <div className="card bg-[#1e2231] shadow-xl pb-14">
                    <h1 className='text-center text-2xl my-3'>Node Js</h1>
                    <figure className="px-10 pt-10">
                        <div className="radial-progress border border-zinc-600 text-3xl" style={{ "--value": "43", "--size": "12rem", "--thickness": "3px" }}>43%</div>
                    </figure>
                </div>

                <div className="card bg-[#1e2231] shadow-xl pb-14">
                    <h1 className='text-center text-2xl my-3'>CSS Frameworks</h1>
                    <figure className="px-10 pt-10">
                        <div className="radial-progress border border-zinc-600 text-3xl" style={{ "--value": "95", "--size": "12rem", "--thickness": "3px" }}>95%</div>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Skills;