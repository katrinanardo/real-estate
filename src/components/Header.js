import React, {useState} from 'react';

import {Link} from 'react-router-dom';
import Logo from '../assets/img/marci-metzger-logo.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return ( 
    
  <header className='py-2'>
    
    <div className="relative z-10 p-1">
    <div className="container md:mx-0 lg:mx-auto flex justify-between items-center">
    <Link to='/'>
      <img src={Logo} alt='' />
    </Link>
      <div className='hidden md:flex items-center gap-6'>
      <Link className='hover:text-blue-900 transition  text-black' to=''>HOME</Link>
      <Link className='hover:text-blue-900 transition text-black' to=''>LISTINGS</Link>
      <Link className='hover:text-blue-900 transition text-black' to=''>LET'S MOVE</Link>
      <Link className='hover:text-blue-900 transition text-black' to=''>ABOUT US</Link>
        <Link className='bg-blue-800 hover:bg-blue-900 text-white md:px-4 md:py-3 px-2 py-2 md:text-[16px] text-[12px] rounded-tr-[20px] transition'to=''>Call Now</Link>

      </div>

      <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
    </div>
    </div>
    {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 border-t">
          <div className="flex flex-col gap-4">
            <Link className="text-black hover:text-blue-900" to="">HOME</Link>
            <Link className="text-black hover:text-blue-900" to="">LISTINGS</Link>
            <Link className="text-black hover:text-blue-900" to="">LET'S MOVE</Link>
            <Link className="text-black hover:text-blue-900" to="">ABOUT US</Link>
          </div>
        </div>
      )}
  </header>
  );
};

export default Header;
