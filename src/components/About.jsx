import React, { useState } from 'react';

const About = () => {


  const [toggle, setToggle] = useState(3)

  function updateToggle(id) {
      setToggle(id)
  }

  return (
    <div name='about' className='w-full  h-auto bg-[#141515] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full'>
            <div className='text-center pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#46cc9b]'>About</p>
                <p className='py-4'>//it's something about me</p>
            </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div >
                <p className='sm:text-right text-4xl font-bold'>I'm Dilan Rathnayaka.</p>
                {/* <p className='sm:text-right text-4xl font-bold'> I'm a UI/UX designer</p> */}
                <p className='sm:text-right'>
                 I've just comleted my degree in graduate from South Eastern University. 
                 With majoring computer science, Statistic and Mathematics now im waiting for 
                 my convocation. I did my O/L and A/L in Anuradhapura Central College. My strengths 
                 are quick learning and I work hard until complete the task and get the job done on time. 
                 Now im seeeking for a good oppertunity to build my career path.
                </p>
            </div>
            <div>
            <div className=''>
        <ul className='flex list-none gap-2 pb-4 pt-2'>
            <li className='btn-list font-bold border-b shadow-md shadow-green-800 hover:border-green-500 hover:bg-[#8acbb325]' onClick={()=>updateToggle(1)}>About me</li>
            <li className='btn-list font-bold border-b shadow-md shadow-green-800 hover:border-green-500 hover:bg-[#8acbb325]' onClick={()=>updateToggle(2)}>Education</li>
            <li className='btn-list font-bold border-b shadow-md shadow-green-800 hover:border-green-500 hover:bg-[#8acbb325]' onClick={()=>updateToggle(3)}>Strength</li>
        </ul>


        <div className={toggle === 1 ? "flex flex-col" : "hidden"}>
        <p className='text-xl font-bold'>About me</p><br/>
        <div className='flex gap-4'>
        <p className=''>
Address<br/><br/><br/><br/>
Phone Number<br/>
Date of Birth<br/>
Age<br/>
Gender<br/>
ID Number<br/>
Nationality<br/>
Religion<br/>
Marital Status<br/>
                </p>
                <p>
: 222/36, Temple Road,<br/>
Pahalamaragahawewa,<br/>
Anuradhapura,<br/>
Sri Lanka.<br/>
: +94 71 292 6090<br/>
: 2nd of March 1996<br/>
: 27 years<br/>
: Male<br/>
: 960621557V<br/>
: Sinhala<br/>
: Buddhism<br/>
: Single<br/>
                </p>
        </div>
        </div>
        <div className={toggle === 2 ? "flex" : "hidden"}>
            <p><span className='text-xl font-bold'>Education</span><br/>I have completed my BSc. Physical Science Degree in 2022 from South Eastern University of Sri Lanka. 
                I did my G.C.E. A/L in 2016 and pass with tow C passes and a S pass. I passed my G.C.E. O/l exam in 2012 with 5 A passes, 1 B pass, 3 C passes</p>
        </div>
        <div className={toggle === 3 ? "flex flex-col" : "hidden"}>
                <span className='text-xl font-bold'>Stregth</span>
            <span className='flex gap-4'>
                <span>
➢ Teamwork<br/>
➢ Quick Learning<br/>
➢ Communicating<br/>
➢ English Literacy<br/>
➢ Logical Thinking<br/>
                </span>
<span>
➢ Self-motivated<br/>
➢ Project Management<br/>
➢ Multitasking<br/>
➢ Flexibility<br/>
➢ Dedication
</span>
</span>
        </div>

    </div>
            </div>
            </div>
        </div>

      </div>
  )
}

export default About
