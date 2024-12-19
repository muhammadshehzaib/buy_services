import React from 'react';

export function Card({ icon, title, description, rating }) {
  return (
    <div className="bg-white border rounded-lg shadow-lg p-8 flex flex-col mx-auto max-w-xs sm:w-full lg:max-w-xl relative before:absolute before:content-[''] before:bg-red-500 before:h-2 before:w-1/3 before:rotate-[25deg] before:opacity-30 before:right-[40px] before:-top-[0] card-one after:-top-6 after:absolute after:bg-[#ed2024] after:h-[18px] after:w-[75px] after:rotate-[25deg] after:left-[306px]">
      <h3 className="flex items-center text-xl font-bold text-gray-800 mb-4">
        <img
          src={icon}
          alt=""
          className=
          "mr-2 h-5 w-5"
        />
        {title}
      </h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <button className="flex items-center justify-center bg-[#ed2024] text-white font-bold py-2 px-4 rounded mb-2 hover:text-[#ed2024] hover:border-red-600 hover:bg-white hover:border-2">
        <span className="ml-2">View Details</span>
      </button>
      <div className="flex text-3xl">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-red-600">★</span>
        ))}
      </div>
    </div>
  );
}

