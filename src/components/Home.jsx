import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import Profile from '../assets/profile.png';
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className= 'w-full h-screen bg-[#141515]'>
      
      
      <div className='max-w-[1000px] mx-auto flex h-full'>
      {/* Container 01 */}
        <div className='flex flex-col justify-center'>

        <p className='text-[#46cc9b]'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-7xl text-[#ccd6f6] '><span className='font-bold'>Dilan</span> Rathnayaka</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a UI/UX designer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I strongly believe in teamwork and consider myself as a 
stronger team player and I'm capable of taking responsibilities, 
challenges and able to work well under pressure. I am seeking an 
opportunity to enhance my professional knowledge and skills while 
making a useful
        </p>

        <div>
          <Link to="works" smooth={true} duration={1000} >
            <button className='text-white font-bold group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#46cc9b] hover:border-[#46cc9b]'>
                View Work
                <span className='group-hover:rotate-90 group-hover:pl-16 duration-300'>
                <HiArrowNarrowRight size={30} className='ml-3'/>
                </span>
                </button>
        </Link>
        </div>

        </div>

        {/* image container */}
        <div className='flex flex-col justify-center'>
          <img src={Profile} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
