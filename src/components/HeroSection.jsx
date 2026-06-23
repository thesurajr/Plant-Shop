import React from "react";
import potImage from "../assets/pot.png";
import { Search } from "lucide-react";
import "tailwindcss";
function HeroSection() {
  return (
    <div className="w-full flex  justify-center items-center">
      <div className="block  md:w-[95%] w-[95%]  h-auto bg-blue-200 rounded-2xl md:flex flex-col gap-4 flex-wrap  md:flex-row ">
        <div className="flex flex-col flex-1 gap-4  md:py-2 md:px-10 mb-2">
          <p className="font-bold text-5xl mt-4 md:mt-4">Buy your <br /> dream plants</p>
          <div className="flex items-center gap-4 justify-betwwen flex-wrap md:justify-start mt-4 md:mt-3">
            <div className="pr-4">
              <p className="font-bold text-2xl">50+</p>
              <p>Plant Species</p>
            </div>
            <div className="h-12 pl-1 bg-gray-500"></div>
            <div className="pl-4">
              <p className="font-bold text-2xl">100+</p>
              <p>Customers</p>
            </div>
          </div>
          <div className="hidden  w-auto md:flex items-center justify-between  bg-white rounded-lg mt-14">
            <input className="text-gray-800 border-none outline-none py-2 px-1 " type="text" placeholder="What are you looking for?" />
            <button className="p-1 mr-2 bg-blue-300 rounded-md hover:bg-indigo-600 pointer"><Search /></button>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-end mr-4 items-center ">
          <div className="mx-auto">
            <div className=" md:flex justify-center md:h-85 md:w-100 md:rounded-[50%_50%_0%_50%] md:bg-black bg-none" >
              <img className=" w-40 md:w-auto h-auto " src={potImage} alt="potImage" />
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
