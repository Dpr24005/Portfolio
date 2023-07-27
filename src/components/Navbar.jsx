import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import { HiOutlineMail} from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (

    <div className='fixed w-full h-[80px] flex justify-between 
    items-center px-4 bg-[#141515] text-gray-300 border-b-2 border-[#46cc9b]'>

{/* Logo */}
    <div><img src={Logo} alt="Logo" style={{width: '75px'}}/>
    </div>
    
    {/* Menu */}
    <div className='hidden lg:flex'>
        <ul className='hidden md:flex text-[#46cc9b]'>
            <li>
            <Link to="home" smooth={true} duration={500} >
          Home
        </Link>
            </li>
            <li>
            <Link to="about" smooth={true} duration={500} >
          About
        </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500} >
          Qualification
        </Link>
        </li>
            <li>
                <Link to="skills" smooth={true} duration={500} >
          Skills
        </Link>
        </li>
            <li>
                <Link to="works" smooth={true} duration={500} >
          Works
        </Link>
        </li>
        </ul>
    </div>

    {/* Hamburger */}
    <div onClick={handleClick}  className='lg:hidden z-10'> 
        {!nav ? <FaBars/> : <FaTimes/>}
    </div>
    {/* Mobile Menu */}
    <ul className={(!nav ?' hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#141515] flex flex-col justify-start items-left')}>
            <li className='py-6 text-4xl border-b-2 border-[#46cc9b]'><Link onClick={handleClick} to="home" smooth={true} duration={500} >
          Home
        </Link></li>
            <li className='py-6 text-4xl border-b-2 border-[#46cc9b]'><Link onClick={handleClick} to="about" smooth={true} duration={500} >
          About
        </Link></li>
            <li className='py-6 text-4xl border-b-2 border-[#46cc9b]'><Link onClick={handleClick} to="contact" smooth={true} duration={500} >
          Qualification
        </Link></li>
            <li className='py-6 text-4xl border-b-2 border-[#46cc9b]'><Link onClick={handleClick} to="skills" smooth={true} duration={500} >
          Skills
        </Link></li>
            <li className='py-6 text-4xl border-b-2 border-[#46cc9b]'> <Link onClick={handleClick} to="works" smooth={true} duration={500} >
          Works
        </Link></li>
            
    {/* Social Icons */}
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a target="_blank" className='flex justify-between items-center w-full text-gray-300' 
                href="https://www.linkedin.com/in/dilan-rathnayaka-2abab0164/">Linkedin <FaLinkedin size={30}/></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a target="_blank" className='flex justify-between items-center w-full text-gray-300' 
                href="https://github.com/Dpr24005">Github <FaGithub size={30}/></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e43535]'>
                <a target="_blank" className='flex justify-between items-center w-full text-gray-300' 
                href="mailto:rathnayakermdp@gmail.com">email <HiOutlineMail size={30}/></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4e4a8c]'>
                <a target="_blank" className='flex justify-between items-center w-full text-gray-300' 
                href="https://drive.google.com/file/d/1oQyUyLRsA6DG_QUEn0voCVFbTf8hGIlJ/view?usp=drive_link">Resume <BsFillPersonLinesFill size={30}/></a>
            </li>
        
  
        </ul>

    {/* Social Icons */}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a target="_blank" className='flex justify-between items-center w-full text-gray-300' 
                href="https://www.linkedin.com/in/dilan-rathnayaka-2abab0164/">Linkedin <FaLinkedin size={30}/></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a target="_blank" className='flex justify-between items-center w-full text-gray-300' 
                href="https://github.com/Dpr24005">Github <FaGithub size={30}/></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e43535]'>
                <a target="_blank" className='flex justify-between items-center w-full text-gray-300' 
                href="mailto:rathnayakermdp@gmail.com">email <HiOutlineMail size={30}/></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4e4a8c]'>
                <a target="_blank" className='flex justify-between items-center w-full text-gray-300' 
                href="https://drive.google.com/file/d/1oQyUyLRsA6DG_QUEn0voCVFbTf8hGIlJ/view?usp=drive_link">Resume <BsFillPersonLinesFill size={30}/></a>
            </li>
        </ul>
    </div>


    </div>
  )
}

export default Navbar
