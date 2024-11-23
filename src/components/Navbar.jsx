import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/guidoLogo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation(); 
  const isActive = (path) => location.pathname === path;

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="relative bg-white text-black mx-auto flex justify-between items-center py-1 px-3 shadow-md z-50">
      <img className="mx-2 w-24" src={logo} alt="logo" />
      <ul className="hidden md:flex font-Poppins">
        <li className={`p-5 font-bold ${isActive('/') ? 'text-gray-500' : 'hover:text-gray-400'}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`p-5 font-bold ${isActive('/explore') ? 'text-gray-500' : 'hover:text-gray-400'}`}>
          <Link to="/explore">Explore</Link>
        </li>
      </ul>

      {/* Mobile menu icon */}
      <div onClick={handleNav} className="block md:hidden mr-6 cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile menu */}
      <div
        className={
          nav
            ? 'fixed h-full left-0 top-0 w-[60%] bg-white ease-in-out duration-500 z-40'
            : 'fixed left-[-100%] z-40'
        }
      >
        <img className="ms-7 mt-7 w-24" src={logo} alt="logo" />
        <ul className="p-8 text-xl">
          <li className="p-2 font-semibold">
            <Link to="/" onClick={handleNav}>
              Home
            </Link>
          </li>
          <li className="p-2 font-semibold">
            <Link to="/explore" onClick={handleNav}>
              Explore
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
