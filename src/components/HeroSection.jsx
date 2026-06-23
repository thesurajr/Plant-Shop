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

    // <section className="hero">
    //   <div className="hero-inner">
    //     {/* Left Side: Text Content */}
    //     <div className="hero-content">
    //       <h1 className="hero-title">
    //         Buy your
    //         <br />
    //         dream plants
    //       </h1>
    //       <div className="hero-stats">
    //         <div className="hero-stat">
    //           <p className="hero-stat-number">50+</p>
    //           <p className="hero-stat-label">Plant Species</p>
    //         </div>
    //         <div className="hero-divider" />
    //         <div className="hero-stat">
    //           <p className="hero-stat-number">100+</p>
    //           <p className="hero-stat-label">Customers</p>
    //         </div>
    //       </div>
    //       <div className="hero-search">
    //         <input
    //           type="text"
    //           placeholder="What are you looking for?"
    //           className="hero-search-input"
    //         />
    //         <button
    //           type="button"
    //           aria-label="Search"
    //           className="hero-search-button"
    //         >
    //           <Search size={18} />
    //         </button>
    //       </div>
    //     </div>

    //     {/* right side: pot image inside dark blob */}

    //     <div className="hero-image-main">
    //       <div className="hero-image-wrap">
    //         {/* Decorative Doodle Arrow - Top Right, Curling */}

    //         <svg
    //           className="hero-doodle hero-doodle--top"
    //           viewBox="0 0 100 140"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="3"
    //           strokeLinecap="round"
    //         >
    //           <path d="M70 5 C95 15, 95 40, 75 45 C60 48, 60 65, 78 68 C90 70, 88 85, 70 88 L 10 110" />
    //           <path d="M10 110 L 28 100 M 10 110 L 18 128" />
    //         </svg>
    //         <div className="hero-blob">
    //           <img src={potImage} alt="Plant in a pot" className="hero-image" />
    //         </div>

    //         {/* Decorative Doodle Arrow - Bottom Middle, Squiggly */}

    //         <svg
    //           className="hero-doodle hero-doodle--bottom"
    //           viewBox="0 0 140 70"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="3"
    //           strokeLinecap="round"
    //         >
    //           <path d="M5 35 C5 15, 25 15, 25 35 C25 55, 45 55, 45 35 C45 15, 65 15, 65 35 C65 55, 90 50, 130 35" />
    //           <path d="M130 35 L 112 25 M 130 35 L 118 52" />
    //         </svg>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default HeroSection;
