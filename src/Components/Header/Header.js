import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const navbarLi = <>
        < li > <Link>About</Link></li>
        <li><Link>Skills</Link></li>
    </>
    return (
        <div className="navbar px-2 md:px-8 lg:px-20 ">
            <div className="navbar-start">
                <Link className="btn btn-outline normal-case text-2xl text-white">
                    <span className='text-[#01d293] '>M</span>D
                    <span className='text-[#01d293]'>.</span>
                    <span className='text-[#01d293] ms-1.5'>T</span>ohid
                    {/* <span className='text-[#01d293] ms-1'>R</span>ahman */}
                </Link>
            </div>

            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    {navbarLi}
                </ul>
                <a className="btn ">Get started</a>

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