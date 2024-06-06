import React from 'react'
import logo1 from "../assets/Kalash11.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return <nav className=' mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
      <Link to="/">
        <img className="mx-2 w-10" src={logo1} alt='logo' />
      </Link>  
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/kalashmathanker" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="http://github.com/Kalash-Mathanker" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/Kalashmathankar/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
        </a>
    </div>
  </nav>
}

export default Navbar