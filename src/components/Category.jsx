import React from "react";
import plant4 from "../assets/plant4.png";
import plant5 from "../assets/plant5.png";
import plant6 from "../assets/plant6.png";

function Category() {
  return (
    <div className="w-full ">
      <div className="w-full block text-center ">
        <h1 className="font-bold text-2xl">Categories</h1>
        <p className="text-gray-500 mt-3">Find what you are looking for</p>
        <div className="bg-blue-200">
          <div className="w-full flex justify-evenly flex-wrap md:mt-50 mt-5 gap-12 md:gap-0 ">
            <div className="md:mt-[-60px] mt-5 ">
              <div className=" w-full">
                <img
                  className="md:w-58 w-65 h-80 object-fill"
                  src={plant4}
                  alt="Natural Plants"
                />
              </div>
              <h3 className="mt-2 font-bold text-md">Natural Plants</h3>
            </div>
            <div className="md:mt-10">
              <div className=" w-full">
                <img
                  className="md:w-58 w-65 h-80 object-fill"
                  src={plant5}
                  alt="Plant Accessories"
                />
              </div>
              <h3 className="mt-2 font-bold text-md">Plant Accessories</h3>
            </div>
            <div className="md:mt-[-60px]">
              <div className=" w-full">
                <img
                  className="md:w-58 w-65 h-80 object-fill"
                  src={plant6}
                  alt="Artificial Plants"
                />
              </div>
              <h3 className="mt-2 font-bold text-md">Artificial Plants</h3>
            </div>
          </div>
          <p className="w-auto items-cente mx-auto py-4 text-gray-600 text-md ">
            Lorem ipsum dolor amet consectetur adipisicing elit. Architecto, nulla?
          </p>

        </div>


      </div>
    </div>
  );
}

export default Category;
