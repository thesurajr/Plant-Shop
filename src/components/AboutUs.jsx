import React from "react";
import vector1 from "../assets/Vector1.png";
import vector2 from "../assets/Vector2.png";
import vector3 from "../assets/Vector3.png";

function AboutUs() {
  return (
    <section className="w-full flex items-center justify-center py-4">
      <div className="w-[95%] flex flex-col items-center text-center gap-4 md:gap-6 mb-16" >
        <h1 className=" mx-auto text-2xl font-semibold text-center">
          About us
        </h1>
        <p className="text-gray-500 md:mb-4">
          Order now and appreciate the beauty of nature
        </p>
        <div className=" w-[95%] grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 bg-[#C1DCDC] rounded-full flex items-center justify-center">
              <img
                className="w-10 h-10 "
                src={vector1}
                alt="Large Assortment"
              />
            </div>
            <h3 className="font-bold text-lg md:text-sm">Large Assortment</h3>
            <p className="text-gray-500 md:w-[160px] md:text-sm lg:w-[310px]">
              we offer many different types of products with fewer variations in
              each category.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 bg-[#C1DCDC] rounded-full flex items-center justify-center">
              <img
                className="w-10 h-10 "
                src={vector2}
                alt="Fast & Free Shipping"
              />
            </div>
            <h3 className="font-bold text-lg md:text-sm">Fast & Free Shipping</h3>
            <p className="text-gray-500 md:w-[160px] md:text-sm lg:w-[310px]">
              4-day or less delivery time, free shipping and an expedited
              delivery option.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 bg-[#C1DCDC] rounded-full flex items-center justify-center">
              <img className="w-10 h-10 " src={vector3} alt="24/7 Support" />
            </div>
            <h3 className="font-bold text-lg md:text-sm">24/7 Support</h3>
            <p className="text-gray-500 md:w-[160px] md:text-sm lg:w-[310px] ">
              answers to any business related inquiry 24/7 and in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
