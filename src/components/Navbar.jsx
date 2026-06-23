import React from "react";
import { Link, NavLink } from "react-router-dom";
import Greenmind from "../assets/GREENMIND.png";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { MdOutlineSegment } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";

function Navbar() {
  return (
    <nav className="w-full h-14 flex items-center justify-center">
      <div className="w-[95%] flex flex-row justify-between items-center text-center ">
        <div className=" flex justify-start gap-4 items-center ">
          <div className="w-full pl-8">
            <img className="w-20 h-auto" src={Greenmind} alt="logo" />
          </div>
          <div className=" hidden md:flex gap-8 text-lg">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-blue-800 pr-4" : "")}
            >
              Home
            </NavLink>
            <Link to="/products" className="">
              Products
            </Link>
            <Link to="/contact" className="">
              Contact
            </Link>
          </div>
        </div>
        <div className="hidden md:flex justify-between items-center text-center gap-8 text-lg">
          <Link to="/cart" className=""><CiShoppingCart /></Link>
          <Link to="/admin" className=""><CiUser /></Link>
          <RxDividerVertical size={20} />
          <Link to="/hamburger/menu" className=""><MdOutlineSegment /></Link>
        </div>
        <div className="md:hidden">
          &#9776;
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
