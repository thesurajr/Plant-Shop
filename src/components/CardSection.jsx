import React from "react";
import { RiArrowRightLongLine } from "react-icons/ri";
// import "../components/CardSection.css";
import plant1 from "../assets/plant1.png";
import plant2 from "../assets/plant2.png";
import plant3 from "../assets/plant3.png";

function CardSection() {
  const plants = [
    {
      id: 1,
      image: plant1,
      title: "Natural Plant",
      price: "₹1,499.00",
    },
    {
      id: 1,
      image: plant2,
      title: "Artificial Plant",
      price: "₹900.00",
    },
    {
      id: 1,
      image: plant3,
      title: "Indoor Plant",
      price: "₹3,500.00",
    },
  ];

  return (
    <section className="w-full my-16">
      <div className="w-[95%] mx-auto md:grid grid-cols-[0.3fr_1fr] gap-2">
        <div className="">
          <h3 className="font-bold text-2xl md:text-4xl">Best Selling {<br />} Plants</h3>
          <p className="pt-4 text-gray-500">Easiest way to {<br />}  healthy life by buying  {<br />} your favorite plants </p>
          <button className=" mt-4 flex items-center gap-2 px-4 py-2 rounded-lg text-black bg-blue-300">
            See more <RiArrowRightLongLine />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-12 mt-8 md:mt-0">
          {plants.map((item) => (
            <div className="object-fill rounded-xl " key={item.id}>
              <div className="w-full ">
                <img className="w-auto md:w-full" src={item.image} alt={item.title} />
              </div>
              <div className="mt-4">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-gray-500">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardSection;
