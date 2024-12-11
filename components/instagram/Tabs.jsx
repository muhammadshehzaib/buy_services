'use client';

import React, { useState } from 'react';


export default function Herosectiontwo() {
  const [activeTab, setActiveTab] = useState('regular'); 

  return (
    <div className='items-center justify-between max-w-[1390px] px-5 mx-auto'>
      {/* Views Section */}
      <div className="flex min-[1px]:flex-col xl:flex-row justify-center items-center gap-10 pt-16">
        <div className="xl:w-[45%] min-[1px]:w-full flex flex-col xl:justify-center xl:items-center sm:mb-10 xl:mb-0 ">
          <h1 className="font-montserrat min-[320px]:text-[30px] 2xl:w-full lg:text-6xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-800 mb-4">
          Buy Instagram Followers
            <span className="font-montserrat sm:mb-4 min-[1px]:mb-4 md:mb-0 font-bold bg-[#ed2024] text-white sm:text-[1.25rem] md:text-[1.75rem] leading-[2rem] inline-block px-5 py-3 rounded-[.75rem]">
            Fast
            </span>
          </h1>
          <p className="font-montserrat lg:w-[45%] min-[1px]:[75%] xl:w-full block md:my-5 mx-0 md:py-3 sm:my-0 min-[1px]:my-0 max-[639px]:my-0 text-lg text-#050708">
          Thanks to our high-quality Instagram services with express delivery, your goals become tangible realities in a short time. Step into a realm of limitless possibilities with Views4You, and start to buy Instagram followers now.
          </p>
        </div>

        {/* Tabs Section */}
        <div className="xl:w-[50%] min-[1px]:w-[100%] lg:w-[65%] bg-white shadow-md rounded-lg">
          {/* Tabs Buttons */}
          <div className="flex justify-between mx-4">
            <button
              className={`py-3 px-6 font-bold ${
                activeTab === 'regular' ? 'text-red-600 border-b-4 border-red-600' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('regular')}
            >
              High Quality 
            </button>
            <button
              className={`py-3 px-6 font-bold ${
                activeTab === 'ads' ? 'text-red-600 border-b-4 border-red-600' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('ads')}
            >
              Real Followers
            </button>
          </div>

          {/* Info Section */}
          {activeTab === 'regular' && (
          <div className="bg-gray-100 p-4 mb-6">
            <p className="text-sm font-medium text-gray-700">
            Get high-quality Instagram followers with instant delivery.
            </p>
          </div>
          )}
          {/* Content Section */}
          {activeTab === 'regular' && (
             <div className='p-10'>
               <div className='flex w-full'>
               <div className=' min-[1px]:mb-5 sm:mb-0 flex-grow flex-shrink-0 basis-0 flex flex-col items-center justify-center rounded-tl-full rounded-bl-full border-r-0 border-2'>
                    <p className='text-[24px] font-bold'>20</p>
                    <p className='text-[15px]'>followers</p>
                    </div>
                    <div className='flex-none basis-[58%] min-[1px]:mb-5 sm:mb-0  flex items-center min-[1px]:justify-center sm:justify-end flex-col text-[18px] font-bold bg-[#f4f6f8] rounded-tr-full rounded-br-full '>
                   <p className='text-[#000] flex gap-x-2'><span className='line-through mb-2'>$0.55</span></p>
                   <p className='bg-[#ed2024] flex justify-center text-white rounded-tr-lg rounded-tl-lg px-8'>free</p>
                 </div>
               </div>
             <div className='sm:flex gap-8 mb-4 '>
               <div className='flex w-full'>
               <div className=' min-[1px]:mb-5 sm:mb-0 flex-grow flex-shrink-0 basis-0 flex flex-col items-center justify-center rounded-tl-full rounded-bl-full border-r-0 border-2'>
                    <p className='text-[24px] font-bold'>50</p>
                    <p className='text-[15px]'>followers</p>
                    </div>
                 <div className=' min-[1px]:mb-5 sm:mb-0 flex-none basis-[58%] flex items-center justify-center text-[18px] font-bold bg-[#f4f6f8] rounded-tr-full rounded-br-full '>
                   <p className='text-[#ed2024]'>$0.98</p>
                 </div>
               </div>

               <div className='flex w-full'>
               <div className=' min-[1px]:mb-5 sm:mb-0 flex-grow flex-shrink-0 basis-0 flex flex-col items-center justify-center rounded-tl-full rounded-bl-full border-r-0 border-2'>
                    <p className='text-[24px] font-bold'>100</p>
                    <p className='text-[15px]'>followers</p>
                    </div>
                 <div className='flex-none basis-[58%] min-[1px]:mb-5 sm:mb-0  flex items-center min-[1px]:justify-center sm:justify-end flex-col text-[18px] font-bold bg-[#f4f6f8] rounded-tr-full rounded-br-full '>
                   <p className='text-[#000] flex gap-x-2'><span className='line-through mb-2'>$2.10</span>  <span className='text-[#ed2024]'>$1.70</span></p>
                   <p className='bg-[#ed2024] flex justify-center text-white px-2 rounded-tr-lg rounded-tl-lg'>save 17%</p>
                 </div>
               </div>
             </div>
 
             <div className='sm:flex gap-8'>
               <div className='flex w-full'>
               <div className=' min-[1px]:mb-5 sm:mb-0 flex-grow flex-shrink-0 basis-0 flex flex-col items-center justify-center rounded-tl-full rounded-bl-full border-r-0 border-2'>
                    <p className='text-[24px] font-bold'>250</p>
                    <p className='text-[15px]'>followers</p>
                    </div>
                 <div className=' min-[1px]:mb-5 sm:mb-0 flex-col flex-none basis-[58%] flex items-center min-[1px]:justify-center sm:justify-end text-[18px] font-bold bg-[#f4f6f8] rounded-tr-full rounded-br-full '>
                   <p className='text-[#000] flex gap-x-2'><span className='line-through mb-2'>$4.50</span>  <span className='text-[#ed2024]'>$3.50</span></p>
                   <p className='bg-[#ed2024] flex justify-center text-white px-2 rounded-tr-lg rounded-tl-lg'>save 22%</p>
                 </div>
               </div>
               <div className='flex w-full'>
               <div className=' min-[1px]:mb-5 sm:mb-0 flex-grow flex-shrink-0 basis-0 flex flex-col items-center justify-center rounded-tl-full rounded-bl-full border-r-0 border-2'>
                    <p className='text-[24px] font-bold'>500</p>
                    <p className='text-[15px]'>followers</p>
                    </div>
                 <div className=' flex-col min-[1px]:mb-5 sm:mb-0 flex-none basis-[58%] flex items-center min-[1px]:justify-center sm:justify-end text-[18px] font-bold bg-[#f4f6f8] rounded-tr-full rounded-br-full '>
                   <p className='text-[#000] flex gap-x-2'><span className='line-through mb-2'>$9.00</span>  <span className='text-[#ed2024]'>$6.25</span></p>
                   <p className='bg-[#ed2024] flex justify-center text-white px-2 rounded-tr-lg rounded-tl-lg'>save 31%</p>
                 </div>
               </div>
             </div>
           </div>
          )}


{activeTab === 'ads' && (
          <div className="bg-gray-100 p-4 mb-6">
            <p className="text-sm text-center font-medium text-gray-700">
            Reach out to real Instagram followers fast and safely.
            </p> </div>
          )}
          {activeTab === 'ads' && (
                <div className='p-10'>
                <div className='sm:flex gap-8 mb-4 '>
                  <div className='flex w-full'>
                  <div className=' min-[1px]:mb-5 sm:mb-0 flex-grow flex-shrink-0 basis-0 flex flex-col items-center justify-center rounded-tl-full rounded-bl-full border-r-0 border-2'>
                       <p className='text-[24px] font-bold'>500</p>
                       <p className='text-[15px]'>followers</p>
                       </div>
                       <div className=' flex-col min-[1px]:mb-5 sm:mb-0 flex-none basis-[58%] flex items-center min-[1px]:justify-center sm:justify-end text-[18px] font-bold bg-[#f4f6f8] rounded-tr-full rounded-br-full '>
                      <p className='text-[#000] flex gap-x-2'><span className='line-through mb-2'>$12.90</span>  <span className='text-[#ed2024]'>$10.90</span></p>
                      <p className='bg-[#ed2024] flex justify-center text-white px-2 rounded-tr-lg rounded-tl-lg'>save 16%</p>
                    </div>
                  </div>
   
                  <div className='flex w-full'>
                  <div className=' min-[1px]:mb-5 sm:mb-0 flex-grow flex-shrink-0 basis-0 flex flex-col items-center justify-center rounded-tl-full rounded-bl-full border-r-0 border-2'>
                       <p className='text-[24px] font-bold'>1.000</p>
                       <p className='text-[15px]'>followers</p>
                       </div>
                    <div className='flex-none basis-[58%] min-[1px]:mb-5 sm:mb-0  flex items-center min-[1px]:justify-center sm:justify-end flex-col text-[18px] font-bold bg-[#f4f6f8] rounded-tr-full rounded-br-full '>
                      <p className='text-[#000] flex gap-x-2'><span className='line-through mb-2'>$23.90</span>  <span className='text-[#ed2024]'>$18.09</span></p>
                      <p className='bg-[#ed2024] flex justify-center text-white px-2 rounded-tr-lg rounded-tl-lg'>save 24%</p>
                    </div>
                  </div>
                </div>
    
                <div className='sm:flex gap-8'>
                  <div className='flex w-full'>
                  <div className=' min-[1px]:mb-5 sm:mb-0 flex-grow flex-shrink-0 basis-0 flex flex-col items-center justify-center rounded-tl-full rounded-bl-full border-r-0 border-2'>
                       <p className='text-[24px] font-bold'>2.500</p>
                       <p className='text-[15px]'>followers</p>
                       </div>
                    <div className=' min-[1px]:mb-5 sm:mb-0 flex-col flex-none basis-[58%] flex items-center min-[1px]:justify-center sm:justify-end text-[18px] font-bold bg-[#f4f6f8] rounded-tr-full rounded-br-full '>
                      <p className='text-[#000] flex gap-x-2'><span className='line-through mb-2'>$59.90</span>  <span className='text-[#ed2024]'>$42.30</span></p>
                      <p className='bg-[#ed2024] flex justify-center text-white px-2 rounded-tr-lg rounded-tl-lg'>save 39%</p>
                    </div>
                  </div>
                  <div className='flex w-full'>
                  <div className=' min-[1px]:mb-5 sm:mb-0 flex-grow flex-shrink-0 basis-0 flex flex-col items-center justify-center rounded-tl-full rounded-bl-full border-r-0 border-2'>
                       <p className='text-[24px] font-bold'>5.000</p>
                       <p className='text-[15px]'>followers</p>
                       </div>
                    <div className=' flex-col min-[1px]:mb-5 sm:mb-0 flex-none basis-[58%] flex items-center min-[1px]:justify-center sm:justify-end text-[18px] font-bold bg-[#f4f6f8] rounded-tr-full rounded-br-full '>
                      <p className='text-[#000] flex gap-x-2'><span className='line-through mb-2'>$129.90</span>  <span className='text-[#ed2024]'>$80.00</span></p>
                      <p className='bg-[#ed2024] flex justify-center text-white px-2 rounded-tr-lg rounded-tl-lg'>save 38%</p>
                    </div>
                  </div>
                </div>
              </div>
          )}

          {/* Buy Now Button */}
          <button className="bg-black sm:w-[90%] min-[1px]:w-4/5 mx-10 text-white text-lg font-semibold py-5 my-6 rounded-full">
            Buy now
          </button>

          {/* Features Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 px-10 mt-10 gap-4 text-gray-700 py-10 bg-[#f4f6f8]">
            <div className="flex items-center space-x-2">
              <span className="text-red-600">✔</span>
              <p>Real and Active Followers</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-600">✔</span>
              <p>Premium Service</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-600">✔</span>
              <p>Instant Start</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-600">✔</span>
              <p>Money-back Assurance</p>
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
      <div className='flex flex-wrap justify-between pt-14'>
        <img src="https://views4you.com/wp-content/uploads/2023/01/3-WTKR-1.png.webp" alt="" className='object-contain px-5' />
        <img src="https://views4you.com/wp-content/uploads/2023/01/fok13.png" alt="" className='object-contain'  />
        <img src="https://views4you.com/wp-content/uploads/2023/01/orlando.png.webp" alt="" className='object-contain'  />
        <img src="https://views4you.com/wp-content/uploads/2023/01/ok_logo1.png.webp" alt="" className='object-contain'  />
        <img src="https://views4you.com/wp-content/uploads/2023/01/NDTV.png.webp" alt="" className='object-contain'  />
      </div>
    </div>
  );
}
