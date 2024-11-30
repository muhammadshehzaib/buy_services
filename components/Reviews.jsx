'use client'
import React from "react";
import CountUp from 'react-countup';
const Reviews = () => {
  return (
    <div className="flex items-center justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-[1390px] px-5 sm:w-full min-[1px]:w-full mx-auto items-center sm:py-24 min-[1px]:py-16 gap-8">
    <div className="w-full px-8">
      <div className="text-center">
      <div className="number text-6xl xl:text-6xl lg:text-4xl font-bold text-red-500" data-number="100">
      <span className="mr-3">
        <CountUp end={100}  />
      </span>
      k
    </div>
        <p className="h6 mt-2 text-lg font-medium">Customers</p>
      </div>
    </div>

    <div className="w-full px-8">
      <div className="text-center">
        <div className="number text-6xl xl:text-6xl lg:text-4xl font-bold text-red-500" data-number="50">
          <span className="mr-3">
          <CountUp end={500}  />
          </span>
          k
        </div>
        <p className="h6 mt-2 text-lg font-medium">Orders Sold</p>
      </div>
    </div>

    <div className="w-full px-8">
      <div className="text-center">
        <div className="number text-6xl xl:text-6xl lg:text-4xl font-bold text-red-500" data-number="10">
          <span className="mr-3">
          <CountUp end={10}  />
          </span>
          M
        </div>
        <p className="h6 mt-2 text-lg font-medium">Subscribers Sold</p>
      </div>
    </div>

    <div className="w-full px-8">
      <div className="text-center">
        <div className="number text-6xl xl:text-6xl lg:text-4xl font-bold text-red-500" data-number="500">
          <span className="mr-3">
          <CountUp end={500}  />
          </span>
          k
        </div>
        <p className="h6 mt-2 text-lg font-medium">Likes Sold</p>
      </div>
    </div>

    <div className="w-full px-8">
      <div className="text-center">
        <div className="number text-6xl xl:text-6xl lg:text-4xl font-bold text-red-500" data-number="100">
          <span className="mr-3">
          <CountUp end={100}  />
          </span>
          M
        </div>
        <p className="h6 mt-2 text-lg font-medium">Views Sold</p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Reviews;
