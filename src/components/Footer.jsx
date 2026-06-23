import React from 'react'
import logo from "../assets/GREENMIND.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="w-full p-4 bg-blue-200 rounded-2xl">
            <div className=" p-5 md:p-8 md:px-16 block md:flex justify-between ">
            <div className="block">
                <div className="w-full">
                    <img className='w-30 h-auto' src={logo} alt="Greenmind" />
                </div>
                <p className='mt-8 text-gray-500 text-lg'>We help you find {<br />}your dream plant </p>
                <div className="my-8 flex flex-wrap gap-8 ">
                    <a className='p-3 rounded-full border ' href="www.facebook.com" target='_blank'><FaFacebook /></a>
                    <a className='p-3 rounded-full border ' href="www.instagram.com" target='_blank'><FaInstagram /></a>
                    <a className='p-3 rounded-full border ' href="www.twitter.com" target='_blank'><FaSquareXTwitter /></a>
                </div>

            </div>
            <div className="flex justify-between flex-wrap md:gap-8 gap-3 ">
                <div className="flex flex-col gap-4 text-gray-500">
                    <h1 className=" font-bold pointer">Information</h1>
                    <a className='hover:text-green-400' href="#">About</a>
                    <a className='hover:text-green-400' href="#">Product</a>
                    <a className='hover:text-green-400' href="#">Blog</a>
                </div>
                <div className="flex flex-col gap-4 text-gray-500">
                    <h1 className=" font-bold">Company</h1>
                    <a className='hover:text-green-400' href="#">Community</a>
                    <a className='hover:text-green-400' href="#">Career</a>
                    <a className='hover:text-green-400' href="#">Our story</a>
                </div>
                <div className="flex flex-col gap-4 text-gray-500">
                    <h1 className=" font-bold">Contact</h1>
                    <a className='hover:text-green-400' href="#">Getting Started</a>
                    <a className='hover:text-green-400' href="#">Pricing</a>
                    <a className='hover:text-green-400' href="#">Resources</a>
                </div>
            </div>
        </div>
        <p className=' mx-auto text-gray-500'>2023 all Rights Reserved Term of use GREENMIND</p>

        </footer>
        
    )
}

export default Footer