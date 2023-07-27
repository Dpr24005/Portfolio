import React from "react";
import Foods from "../assets/projects/foods.png";
import Photography from "../assets/projects/photography.png";
import Calculator from "../assets/projects/calculator.png";
import Realestate from "../assets/projects/realestate.png";
import POS from "../assets/projects/pos.png";

const Works = () => {
  return (
    <div name='works' className="w-full md:h-screen text-gray-300 bg-[#141515]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#46cc9b]">
            Works
          </p>
          <p className="py-6"> [// Check out some of my recent work] </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          {/* grid Item */}
          <div
            style={{ backgroundImage: `url(${Calculator})` }}
            className="shadow-lg shadow-[#86b0e3] group container rounded-md flex 
                justify-center mx-auto content-div hover:scale-110 duration-500"
          >
            {/* Hover Effects */}
            <div className="opacity-0 hover:opacity-80 flex items-center">
              <span className="bg-[#202020dc] text-2xl font-bold text-white rounded-lg px-4 text-center">
                Calculator App
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" rel="noopener noreferrer" href="https://dpr24005.github.io/Calculator/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#202020dc]
                                 text-white font-bold text-lg" > Demo </button> </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Dpr24005/Calculator.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#202020dc]
                                 text-white font-bold text-lg" >Code </button>  </a>
              </div>
            </div>
          </div>

          {/* grid Item */}
          <div
            style={{ backgroundImage: `url(${Photography})` }}
            className="shadow-lg shadow-[#86b0e3] group container rounded-md flex 
                justify-center mx-auto content-div hover:scale-110 duration-500"
          >
            {/* Hover Effects */}
            <div className="opacity-0 hover:opacity-80 flex items-center">
              <span className="bg-[#202020dc] text-2xl font-bold text-white rounded-lg px-4 text-center">
                Photography Web Site
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" rel="noopener noreferrer" href="https://dpr24005.github.io/Photography/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#202020dc]
                                 text-white font-bold text-lg" > Demo </button> </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Dpr24005/Photography.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#202020dc]
                                 text-white font-bold text-lg" >Code </button>  </a>
              </div>
            </div>
          </div>

          {/* grid Item */}
          <div
            style={{ backgroundImage: `url(${Foods})` }}
            className="shadow-lg shadow-[#86b0e3] group container rounded-md flex 
                justify-center mx-auto content-div hover:scale-110 duration-500"
          >
            {/* Hover Effects */}
            <div className="opacity-0 hover:opacity-80 flex items-center">
              <span className="bg-[#202020dc] text-2xl font-bold text-white rounded-lg px-4 text-center">
                Foods Delivery App
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" rel="noopener noreferrer" href="https://dpr24005.github.io/food-delivery-app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#202020dc]
                                 text-white font-bold text-lg" > Demo </button> </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Dpr24005/food-delivery-app.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#202020dc]
                                 text-white font-bold text-lg" >Code </button>  </a>
              </div>
            </div>
          </div>
          
          {/* grid Item */}
          <div
            style={{ backgroundImage: `url(${Realestate})` }}
            className="shadow-lg shadow-[#86b0e3] group container rounded-md flex 
                justify-center mx-auto content-div hover:scale-110 duration-500"
          >
            {/* Hover Effects */}
            <div className="opacity-0 hover:opacity-80 flex items-center">
              <span className="bg-[#202020dc] text-2xl font-bold text-white rounded-lg px-4 text-center">
                Real Estate Web Site
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" rel="noopener noreferrer" href="https://real-state-web-dilan.pages.dev/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#202020dc]
                                 text-white font-bold text-lg" > Demo </button> </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Dpr24005/Real-Estate.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#202020dc]
                                 text-white font-bold text-lg" >Code </button>  </a>
              </div>
            </div>
          </div>
          {/* grid Item */}
          <div
            style={{ backgroundImage: `url(${POS})` }}
            className="shadow-lg shadow-[#86b0e3] group container rounded-md flex 
                justify-center mx-auto content-div hover:scale-110 duration-500"
          >
            {/* Hover Effects */}
            <div className="opacity-0 hover:opacity-80 flex items-center">
              <span className="bg-[#202020dc] text-2xl font-bold text-white rounded-lg px-4 text-center">
                POS System
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" rel="noopener noreferrer" href="https://dpr24005.github.io/POS/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#202020dc]
                                 text-white font-bold text-lg" > Demo </button> </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Dpr24005/POS.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#202020dc]
                                 text-white font-bold text-lg" >Code </button>  </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Works;
// https://github.com/Dpr24005/POS-System.git