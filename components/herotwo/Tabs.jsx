'use client';

import React, { useState } from 'react';


export default function Herosectiontwo() {
  const [activeTab, setActiveTab] = useState('regular'); 

  return (
    <div className='items-center justify-between max-w-[1390px] px-5 mx-auto'>
      {/* Views Section */}
      <div className="flex gap-10 pt-16">
        <div className="w-[45%] flex flex-col justify-center items-center md:mb-0 ">
          <h1 className="font-montserrat min-[320px]:text-[30px] 2xl:w-full lg:text-6xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-800 mb-4">
            Buy YouTube Views
            <span className="font-montserrat sm:mb-4 min-[1px]:mb-4 md:mb-0 font-bold bg-[#ed2024] text-white sm:text-[1.25rem] md:text-[1.75rem] leading-[2rem] inline-block px-5 py-3 rounded-[.75rem]">
              Instantly
            </span>
          </h1>
          <p className="font-montserrat block md:my-5 mx-0 md:py-3 sm:my-0 min-[1px]:my-0 max-[639px]:my-0 lg:w-full text-lg text-#050708">
            Views4You is the safest way to buy YouTube Views with delivery in just a few minutes. We offer multiple packages with real users for all different needs - choose wisely!
          </p>
        </div>

        {/* Tabs Section */}
        <div className="w-[55%] bg-white shadow-md rounded-lg">
          {/* Tabs Buttons */}
          <div className="flex justify-between mx-4">
            <button
              className={`py-3 px-6 font-bold ${
                activeTab === 'regular' ? 'text-red-600 border-b-4 border-red-600' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('regular')}
            >
              Regular Views
            </button>
            <button
              className={`py-3 px-6 font-bold ${
                activeTab === 'ads' ? 'text-red-600 border-b-4 border-red-600' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('ads')}
            >
              Ads Views
            </button>
          </div>

          {/* Info Section */}
          {activeTab === 'regular' && (
          <div className="bg-gray-100 p-4 mb-6">
            <p className="text-sm font-medium text-gray-700">
              <span className="font-bold">Information:</span> We recommend our
              <span className="text-red-600 font-bold">“Ads YouTube Views”</span> packages for orders with a high number of views.
            </p>
          </div>
          )}
          {/* Content Section */}
          {activeTab === 'regular' && (
             <div className='p-10'>
              


             <div className='flex gap-8 mb-4'>
               <div className='flex w-[75%]'>
                 <div className='flex-none basis-[35%] justify-center flex rounded-tl-full rounded-bl-full border-r-0 border-2'><p className='text-[24px] font-bold'>100 <br /> <span className='text-[15px]'>views</span></p></div>
                 <div className='flex-none basis-[58%] flex items-center justify-center text-[18px] font-bold bg-[#f4f6f8] rounded-tr-full rounded-br-full '>
                   <p className='text-[#ed2024]'>$0.98</p>
                 </div>
               </div>
               <div className='flex w-[75%]'>
                 <div className='flex-none basis-[35%] justify-center flex  rounded-tl-full rounded-bl-full border-r-0 border-2'><p className='text-[24px] font-bold'>1000 <br /> <span className='text-[15px]'>views</span></p></div>
                 <div className='flex-none basis-[58%] flex items-center justify-end flex-col text-[18px] font-bold bg-[#f4f6f8] rounded-tr-full rounded-br-full '>
                   <p className='text-[#000] flex gap-x-2'><span className='line-through mb-2'>$6.50</span>  <span className='text-[#ed2024]'>$4.70</span></p>
                   <p className='bg-[#ed2024] flex justify-center text-white px-2 rounded-tr-lg rounded-tl-lg'>save 28%</p>
                 </div>
               </div>
             </div>
 
             <div className='flex gap-8'>
               <div className='flex w-[78%]'>
                 <div className='flex-none basis-[35%] justify-center flex rounded-tl-full rounded-bl-full border-r-0 border-2'><p className='text-[24px] font-bold'>1000 <br /> <span className='text-[15px]'>views</span></p></div>
                 <div className='flex-col flex-none basis-[58%] flex items-center justify-end text-[18px] font-bold bg-[#f4f6f8] rounded-tr-full rounded-br-full '>
                   <p className='text-[#000] flex gap-x-2'><span className='line-through mb-2'>$16.00</span>  <span className='text-[#ed2024]'>$10.90</span></p>
                   <p className='bg-[#ed2024] flex justify-center text-white px-2 rounded-tr-lg rounded-tl-lg'>save 32%</p>
                 </div>
               </div>
               <div className='flex w-[75%]'>
                 <div className='flex-none basis-[35%] justify-center flex rounded-tl-full rounded-bl-full border-r-0 border-2'><p className='text-[24px] font-bold'>1000 <br /> <span className='text-[15px]'>views</span></p></div>
                 <div className=' flex-col flex-none basis-[58%] flex items-center justify-end text-[18px] font-bold bg-[#f4f6f8] rounded-tr-full rounded-br-full '>
                   <p className='text-[#000] flex gap-x-2'><span className='line-through mb-2'>$33.00</span>  <span className='text-[#ed2024]'>$21.00</span></p>
                   <p className='bg-[#ed2024] flex justify-center text-white px-2 rounded-tr-lg rounded-tl-lg'>save 36%</p>
                 </div>
               </div>
             </div>
           </div>
          )}


{activeTab === 'ads' && (
          <div className="bg-gray-100 p-4 mb-6">
            <p className="text-sm text-center font-medium text-gray-700">
            We recommend this service if you want a high rate and fast delivering.
            </p> </div>
          )}
          {activeTab === 'ads' && (
               <div className='p-10'>
               <div className='flex gap-8 mb-4'>
               <div className='flex w-[75%]'>
                   <div className='px-5 rounded-tl-full rounded-bl-full border-r-0 border-2'><p className='text-[24px] font-bold'>10.000 <br /> <span className='text-[15px]'>views</span></p></div>
                   <div className='px-5 flex flex-col justify-end text-[18px] font-bold bg-[#f4f6f8] rounded-tr-full rounded-br-full '>
                     <p className='text-[#000] flex gap-x-2'><span className='line-through mb-2'>$42.90</span>  <span className='text-[#ed2024]'>$37.90</span></p>
                     <p className='bg-[#ed2024] flex justify-center text-white  rounded-tr-lg rounded-tl-lg w-[80%]'>save 12%</p>
                   </div>
                 </div>

                 <div className='flex w-[75%]'>
                   <div className='px-5 rounded-tl-full rounded-bl-full border-r-0 border-2'><p className='text-[24px] font-bold'>25.000 <br /> <span className='text-[15px]'>views</span></p></div>
                   <div className='px-5 flex flex-col justify-end text-[18px] font-bold bg-[#f4f6f8] rounded-tr-full rounded-br-full '>
                     <p className='text-[#000] flex gap-x-2'><span className='line-through mb-2'>$112.00</span>  <span className='text-[#ed2024]'>$95.00</span></p>
                     <p className='bg-[#ed2024] flex justify-center text-white  rounded-tr-lg rounded-tl-lg w-[80%]'>save 15%</p>
                   </div>
                 </div>
               </div>
   
               <div className='flex gap-8'>
                 <div className='flex w-[78%]'>
                   <div className='px-5 rounded-tl-full rounded-bl-full border-r-0 border-2'><p className='text-[24px] font-bold'>50.000 <br /> <span className='text-[15px]'>views</span></p></div>
                   <div className='px-3 flex flex-col justify-end text-[18px] font-bold bg-[#f4f6f8] rounded-tr-full rounded-br-full '>
                     <p className='text-[#000] flex gap-x-2'><span className='line-through mb-2'>$216.00</span>  <span className='text-[#ed2024]'>$179.00</span></p>
                     <p className='bg-[#ed2024] flex justify-center text-white  rounded-tr-lg rounded-tl-lg w-[80%]'>save 17%</p>
                   </div>
                 </div>
                 <div className='flex w-[75%]'>
                   <div className='px-5 rounded-tl-full rounded-bl-full border-r-0 border-2'><p className='text-[24px] font-bold'>75.000 <br /> <span className='text-[15px]'>views</span></p></div>
                   <div className='px-8  flex flex-col justify-end text-[18px] font-bold bg-[#f4f6f8] rounded-tr-full rounded-br-full '>
                     <p className='text-[#000] flex gap-x-2'><span className='line-through mb-2'>$354.00</span>  <span className='text-[#ed2024]'>$285.00</span></p>
                     <p className='bg-[#ed2024] flex justify-center text-white  rounded-tr-lg rounded-tl-lg w-[80%]'>save 36%</p>
                   </div>
                 </div>
               </div>
             </div>
          )}

          {/* Buy Now Button */}
          <button className="bg-black w-[90%] mx-10 text-white text-lg font-semibold py-5 my-6 rounded-full">
            Buy now
          </button>

          {/* Features Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 px-10 mt-10 gap-4 text-gray-700 py-10 bg-[#f4f6f8]">
            <div className="flex items-center space-x-2">
              <span className="text-red-600">✔</span>
              <p>Real & Organic Views</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-600">✔</span>
              <p>High Quality</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-600">✔</span>
              <p>Instant Start</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-600">✔</span>
              <p>Refill Guaranteed</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-600">✔</span>
              <p>No Drops</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-600">✔</span>
              <p>Privacy and Safety</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
