import React, { useState } from 'react';
import acc from '../assets/projects/acc.jpg';
import acc2 from '../assets/projects/acc2.jpg';
import seu from '../assets/projects/seu.jpg';

const Contact = () => {

  const [toggle, setToggle] = useState(0)

  function updateToggle(id) {
      setToggle(id)
  }

  return (
    <div name='contact' className='w-full h-auto lg:h-screen bg-[#141515] flex flex-col justify-center
    items-center p-4'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#46cc9b] text-gray-300'>Qualifications</p>
                <p className='text-gray-300 py-4'>// These are the qualifications which I have click on the image to see more</p>
            </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


          {/* item1 */}
          <div>

          <div className='flex flex-col  bg-[#141515] rounded-t-xl shadow-lg shadow-[#000000]' onClick={()=>updateToggle(1)}>
            <div className='rounded-t-xl overflow-hidden'>
            <img className='w-[320px] h-[180px] hover:scale-110 duration-300' src={acc} alt="" />
            </div>
            <div className='text-[#ffffff] flex flex-col p-1'>
              <p className=''>Anuradhapura Central College</p>
            <p className='text-[#46cc9b]'>2012 Ordinary Level</p>
            </div>
          </div>
            <div className={toggle === 1 ? "flex" : "hidden"}>
        <span className='text-left w-[320px] h-auto text-white py-4'>
        G.C.E. O/L 2012<br/>
(Anuradhapura Central College)<br/>
A Pass :<br/> • Mathematics<br/>
 <tab/>• Science<br/>
 • Information Technology<br/>
 • Buddhism<br/>
 • Business & Accounting Studies<br/>
B Pass :<br/> • Sinhala<br/>
C Pass :<br/> • English<br/>
 • Art<br/>
 • History<br/>

                </span>
        </div>
          </div>


          {/* item2 */}
          <div>
          <div className='flex flex-col  bg-[#141515] rounded-t-xl shadow-lg shadow-[#000000]' onClick={()=>updateToggle(2)}>
            <div className='rounded-t-xl overflow-hidden'>
            <img className=' w-[320px] h-[180px] hover:scale-110 duration-300' src={acc2} alt="" />
            </div>
            <div className='text-[#ffffff] flex flex-col p-1'>
            <p className=''>Anuradhapura Central College</p>
            <p className='text-[#46cc9b]'>2016 Advanced Level</p>
            </div>
          </div>
            <div className={toggle === 2 ? "flex" : "hidden"}>
        <span className='text-left w-[320px] h-auto text-white py-4'>
        G.C.E. A/L 2016<br/>
(Anuradhapura Central College)<br/>
Subject Stream: Physical Science<br/>
C Pass :<br/> 
<tab/>• Physics<br/>
• Chemistry<br/>
S Pass :<br/> 
• Combined Mathematics<br/>
Z Score : 0.6392
                </span>
        </div>
          </div>


          {/* item3 */}
          <div>

          <div className='flex flex-col  bg-[#141515] rounded-t-xl shadow-lg shadow-[#000000]' onClick={()=>updateToggle(3)}>
            <div className='rounded-t-xl overflow-hidden'>
            <img className='w-[320px] h-[180px] hover:scale-110 duration-300' src={seu} alt="" />
            </div>
            <div className='text-[#ffffff] flex flex-col p-1'>
            <p className=''>South Eastern University of Sri Lanka</p>
            <p className='text-[#46cc9b]'>2022 Bsc. Physical Science</p>
            </div>
          </div>
            <div className={toggle === 3 ? "flex" : "hidden"}>
        <span className='text-left w-[320px] h-[180px] text-white py-4'>
        BSc. Physical Science 2022<br/>
South Eastern University of Sri Lanka<br/>
• Computer Science<br/>
• Statistic<br/>
• Mathematics<br/>
                </span>
        </div>
          </div>
          
        </div>
            
      
    </div>
  )
}

export default Contact
