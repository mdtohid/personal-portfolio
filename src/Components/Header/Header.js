import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import fbImg from '../../img/facebook (1).png'
import LiImg from '../../img/linkedin (1).png'
import githubImg from '../../img/github.png'
const Header = () => {
    const navbarLi = <>
        < li> <a href='#home'>Home</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
    </>
    return (
        <div className="sticky top-0 z-10 navbar px-2 md:px-8 lg:px-28 bg-[#0e1630]">
            <div className="navbar-start">
                <a href='#home' className="btn btn-outline normal-case text-2xl text-white">
                    <span className='text-[#01d293] '>M</span>D
                    <span className='text-[#01d293]'>.</span>
                    <span className='text-[#01d293] ms-1.5'>T</span>ohid
                    {/* <span className='text-[#01d293] ms-1'>R</span>ahman sagor */}
                </a>
            </div>

            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    {navbarLi}
                </ul>
                <div className='flex gap-x-3'>
                    <p>|</p>
                    <Link target="_blank" className='' to='https://www.facebook.com/md.tohidur.rahman.714'>
                    <img src={fbImg} alt="" sizes="" srcset="" />
                    </Link>
                    <Link target="_blank" to='https://www.linkedin.com/in/md-tohidur-rahman-a02087262/'>
                    <img src={LiImg} alt="" sizes="" srcset="" />
                    </Link>
                    <Link target="_blank" to='https://github.com/mdtohid'>
                    <img src={githubImg} alt="" sizes="" srcset="" />
                    </Link>
                </div>

                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40	 right-px">
                        {navbarLi}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;