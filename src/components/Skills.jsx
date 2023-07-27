import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Java from '../assets/Java.png';
import GitHub from '../assets/github.png';
import TailWind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Ai from '../assets/ai.png';
import Excel from '../assets/excel.png';
import Pp from '../assets/pp.png';
import Ps from '../assets/ps.png';
import Vscode from '../assets/vscode.png';
import Word from '../assets/word.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-auto lg:h-screen bg-[#141515] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#46cc9b]'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#86573e] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="Html image" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#40658e] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS image" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#8d8d44] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript image" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#892b2b] hover:scale-110 duration-500'>
                    <img className='w-[130px] mx-auto' src={Java} alt="Java image" />
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-[#3f6e87] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React image" />
                    <p className='my-4'>React</p>
                </div>
                <div className=' shadow-md shadow-[#818181] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GitHub image" />
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#5889c5] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Vscode} alt="Mongo DB image" />
                    <p className='my-4'>VS Code</p>
                </div>
                <div className='shadow-md shadow-[#597ba5] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={TailWind} alt="TailWind image" />
                    <p className='my-4'>TailWind</p>
                </div>
                <div className='shadow-md shadow-[#2a4a5f] hover:scale-110 duration-500'>
                    <img className='w-[120px] p-2 mx-auto' src={Ps} alt="Photo shop image" />
                    <p className='my-4'>Photo Shop</p>
                </div>
                <div className='shadow-md shadow-[#5c402a] hover:scale-110 duration-500'>
                    <img className='w-[120px] mx-auto' src={Ai} alt="Illustrator image" />
                    <p className='my-4'>Illustrator</p>
                </div>
                <div className='shadow-md shadow-[#2b5527] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Excel} alt="Excel image" />
                    <p className='my-4'>Excel</p>
                </div>
                <div className='shadow-md shadow-[#4a72a3] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Word} alt="Word image" />
                    <p className='my-4'>Word</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
