import React from 'react'
import man1 from "../assets/man1.png"
import man2 from "../assets/man2.png"

function Customers() {
  return (
    <div className='w-full my-10 md:my-20'>
      <div className='w-[95%] mx-auto'>
        <div className='flex md:justify-between flex-wrap'>
          <div className='font-bold text-2xl' >
            <h4>What customers say about</h4>
            <h4>GREEMIND?</h4>
          </div>
          <div className='flex gap-2 ' >
            <div className='w-12 border-b-4 border-blue-200'></div>
            <div className='w-4 border-b-4 border-blue-100'></div>
            <div className='w-4 border-b-4  border-blue-100'></div>
          </div>
        </div>
      </div>
      <div className='w-[95%] mx-auto' >
        <div className=' md:flex md:flex-1 flex-wrap gap-8 rounded-xl'>
          <div className='mt-4 p-4 pb-0 md:p-8 md:pb-0 bg-blue-200 w-full h-auto rounded-2xl'>
            <p className='text-xs md:text-md'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eos tempore. Officiis assumenda nesciunt maiores? Ipsa, voluptatum quos corrupti eaque assumenda perspiciatis dolorum exercitationem nesciunt odio consequatur sed iusto totam.
            </p>
            <div className="flex justify-between flex-wrap items-center">
              <div className="flex items-center flex-wrap gap-2 ">
                <div className="w-auto">
                  <img className='w-20 h-30 md:w-40 md:h-50' src={man1} alt="man" />
                </div>
                <div>
                  <h3 className="font-bold md:text-2xl text-sm">John Doe </h3>
                  <p className='text-xs text-gray-500'>Youtuber</p>
                </div>
              </div>
              <div className="block">
                <p className='font-bold md:text-2xl text-sm'>★ 4.5</p>
              </div>
            </div>
          </div>
         <div className='mt-4 p-4 pb-0 md:p-8 md:pb-0 bg-blue-200 w-full h-auto rounded-2xl'>
            <p className='text-xs md:text-md'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eos tempore. Officiis assumenda nesciunt maiores? Ipsa, voluptatum quos corrupti eaque assumenda perspiciatis dolorum exercitationem nesciunt odio consequatur sed iusto totam.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 ">
                <div className="w-auto">
                  <img className='w-20 h-30 md:w-40 md:h-50' src={man2} alt="man" />
                </div>
                <div>
                  <h3 className="font-bold md:text-2xl text-sm">Phillips Marks</h3>
                  <p className='text-xs text-gray-500'>Youtuber</p>
                </div>
              </div>
              <div className="block">
                <p className='font-bold md:text-2xl text-sm'>★ 4.5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customers