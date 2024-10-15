import React from "react";

const Reviews = () => {
  return (
    <div className="flex flex-wrap justify-center mx-auto max-w-6xl py-10">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        <div className="p-6 text-center">
          <div className="number text-6xl font-bold text-red-500" data-number="100">
            <span className="mr-3">100</span>
            k
          </div>
          <p className="h6 mt-2 text-lg font-medium">Customers</p>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        <div className="p-6 text-center">
          <div className="number text-6xl font-bold text-red-500" data-number="50">
            <span className="mr-3">50</span>
            k
          </div>
          <p className="h6 mt-2 text-lg font-medium">Orders Sold</p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        <div className="p-6 text-center">
          <div className="number text-6xl font-bold text-red-500" data-number="10">
            <span className="mr-3">10</span>
            M
          </div>
          <p className="h6 mt-2 text-lg font-medium">Subscribers Sold</p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        <div className="p-6 text-center">
          <div className="number text-6xl font-bold text-red-500" data-number="500">
            <span className="mr-3">500</span>
            k
          </div>
          <p className="h6 mt-2 text-lg font-medium">Likes Sold</p>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        <div className="p-6 text-center">
          <div className="number text-6xl font-bold text-red-500" data-number="100">
            <span className="mr-3">100</span>
            M
          </div>
          <p className="h6 mt-2 text-lg font-medium">Views Sold</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
