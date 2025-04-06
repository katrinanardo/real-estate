import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYelp } from "react-icons/fa";
import {Link} from 'react-router-dom';
import Logo from '../assets/img/marci-metzger-logo.svg';


const Footer = () => {
  return (
    <footer className="bg-white text-blue-900">
      <div className="max-w-[1200px] mx-auto py-8 space-y-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
         
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>

          <div className="flex items-center gap-6 text-lg">
          <a href="tel:(206)919-6886">(206) 919-6886</a>
            <a href="https://www.facebook.com/MarciHomes/" aria-label="Facebook" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/marciandlauren_nvrealtors/" aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/marci-metzger-30642496/" aria-label="LinkedIn" className="hover:text-blue-400">
              <FaLinkedinIn />
            </a>
            <a href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w" aria-label="Yelp" className="hover:text-red-400">
              <FaYelp />
            </a>
            
          </div>
        </div>

      </div>
      <div className="w-full bg-blue-900 py-4">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-8">
      <img src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/BIG%20CIRCLE%202.png/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100/qt=q:76" alt="logo1" className="h-10 " />
      <img src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Equal%20Housing%20Logo.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:100,h:100,cg:true/qt=q:76" alt="logo2" className="h-10 " />
      <img src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Realtor%20Pin.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:112,h:100,cg:true/qt=q:76" alt="logo3" className="h-10" />
      <img src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Chamber.jpg/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100/qt=q:76" alt="logo4" className="h-10" />
      </div>
      </div>  
    </footer>

    
  );
};

export default Footer;
