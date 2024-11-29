import React from "react";
import Footer from "./Footer";
function Alltools() {
  return (
    <div className="flex items-center justify-between" id="card-sec">
      <div className="bg-white sm:pt-10 lg:py-16 sm:pb-0 max-w-[1390px] px-5 sm:w-full min-[1px]:w-full mx-auto min-[1px]:pb-0 ">
        <h2 className="text-3xl min-[320px]:text-[2rem] sm:text-3xl  font-bold text-center mb-16">
          See All Our Tools
        </h2>
        <div className="btns justify-center flex mb-20">
          <a href="" className="px-14 py-6 rounded-full text-[18px] m-2 bg-[#ed2024] text-white font-bold hover:text-[#ed2024] hover:border-red-600 hover:bg-white hover:border-2">Youtube</a>
          <a href="" className="px-14 py-6 rounded-full text-[18px] m-2 bg-[#ed2024] text-white font-bold hover:text-[#ed2024] hover:border-red-600 hover:bg-white hover:border-2">Instagram</a>
          <a href="" className="px-14 py-6 rounded-full text-[18px] m-2 bg-[#ed2024] text-white font-bold hover:text-[#ed2024] hover:border-red-600 hover:bg-white hover:border-2">Other Tools</a>
          <a href="" className="px-14 py-6 rounded-full text-[18px] m-2 bg-white text-[#ed2024] font-bold border-red-600 border-2">All</a>
        </div>
        <div className=" justify-center w-[65%] mx-auto">

          <div className="bg-white border rounded-lg shadow-lg p-8 flex flex-col mx-auto max-w-xs sm:w-[48%] lg:max-w-xl relative before:absolute before:content-[''] before:bg-red-500 before:h-2 before:w-1/3 before:rotate-[25deg] before:opacity-30 before:right-[40px] before:-top-[0] card-one after:-top-6 after:absolute after:bg-[#ed2024] after:h-[18px] after:w-[75px] after:rotate-[25deg] after:left-[306px]">
            <h3 className="flex items-center text-xl font-bold text-gray-800 mb-4">
              <img
                src="https://views4you.com/wp-content/uploads/2023/07/icon-instagram.png.webp"
                alt=""
                className="mr-2 h-5 w-5"
              />
              Instalifter Instagram Bot
            </h3>
            <p className="text-gray-600 mb-4 flex-grow">
              InstaLifter empowers you to rapidly and securely grow your Instagram presence, boost organic engagement, and connect with a broad audience with the world’s most advanced Instagram management tool for the Instagram bot.
            </p>
            <button className="flex items-center justify-center bg-[#ed2024] text-white font-bold py-2 px-4 rounded mb-2 hover:text-[#ed2024] hover:border-red-600 hover:bg-white hover:border-2">
              <span className="ml-2">View Details</span>
            </button>
            <div className="flex text-3xl">
              <span className="text-red-600">★</span>
              <span className="text-red-600">★</span>
              <span className="text-red-600">★</span>
              <span className="text-red-600">★</span>
              <span className="text-red-600">★</span>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Alltools;
