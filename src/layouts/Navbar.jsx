/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from '../components/DarkModeToggle';

const Navbar = () => {
  return (
    <nav className='flex justify-between container mx-auto max-w-screen-xl py-5 px-2'>
      <Link to={'/'} className='font-semibold text-lg cursor-pointer'>
        LumosBlog
      </Link>
      <ul className='flex gap-5 font-normal text-xl text-center items-center'>
        <li>
          <Link to={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/newsletter'}>Newsletter</Link>
        </li>
        <DarkModeToggle />
      </ul>
    </nav>
  );
};

export default Navbar;
