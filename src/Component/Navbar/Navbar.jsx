import React from 'react';
import { NavLink } from 'react-router';
import TitleImg from '../../assets/logo.png';
import { FaGithub } from "react-icons/fa6";
import './Navbar.css'

const Navbar = () => {
    const links=
   <nav>
     <NavLink to='/' className='mr-3 font-bold'>Home</NavLink>
    <NavLink to='/Apps' className='mr-3 font-bold'>App</NavLink>
    <NavLink to='/InstallApp' className='mr-3 font-bold '>InstallApp</NavLink>
   </nav>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            links
        }
      </ul>
    </div>
    <NavLink className='icon' to='/'>
        <a className="btn btn-ghost text-xl">
     <img className='h-[40px] w-[40px]' src={TitleImg} alt="" />
      HERO.IO
    </a>
    </NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn text-white bg-linear-to-r/srgb from-purple-600 to-purple-500"><span><FaGithub /></span>Contribute</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;