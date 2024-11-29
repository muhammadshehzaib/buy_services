'use client'
import React, { useState } from "react";
import Footer from "./Footer";
import { ToolGrid } from './tools/ToolGrid';

// Import the tools data
import { youtubeTools, instagramTools } from './tools/toolsData';

function Alltools() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Combine all tools
  const allTools = [...youtubeTools, ...instagramTools];

  // Filter tools based on selected category
  const filteredTools = selectedCategory === 'all' 
    ? allTools 
    : allTools.filter(tool => tool.category === selectedCategory);

  return (
    <div className="" id="card-sec">
      <div className="bg-white sm:pt-10 lg:py-16 sm:pb-0 max-w-[1390px] px-5 sm:w-full min-[1px]:w-full mx-auto min-[1px]:pb-0 ">
        <h2 className="text-3xl min-[320px]:text-[2rem] sm:text-3xl font-bold text-center mb-16">
          See All Our Tools
        </h2>
        <div className="btns justify-center flex mb-20">
          <button 
            onClick={() => setSelectedCategory('youtube')}
            className={`px-14 py-6 rounded-full text-[18px] m-2 ${
              selectedCategory === 'youtube' 
                ? 'bg-white text-[#ed2024] border-red-600 border-2' 
                : 'bg-[#ed2024] text-white'
            } font-bold hover:text-[#ed2024] hover:border-red-600 hover:bg-white hover:border-2`}
          >
            Youtube
          </button>
          <button 
            onClick={() => setSelectedCategory('instagram')}
            className={`px-14 py-6 rounded-full text-[18px] m-2 ${
              selectedCategory === 'instagram' 
                ? 'bg-white text-[#ed2024] border-red-600 border-2' 
                : 'bg-[#ed2024] text-white'
            } font-bold hover:text-[#ed2024] hover:border-red-600 hover:bg-white hover:border-2`}
          >
            Instagram
          </button>
          <button 
            onClick={() => setSelectedCategory('other')}
            className={`px-14 py-6 rounded-full text-[18px] m-2 ${
              selectedCategory === 'other' 
                ? 'bg-white text-[#ed2024] border-red-600 border-2' 
                : 'bg-[#ed2024] text-white'
            } font-bold hover:text-[#ed2024] hover:border-red-600 hover:bg-white hover:border-2`}
          >
            Other Tools
          </button>
          <button 
            onClick={() => setSelectedCategory('all')}
            className={`px-14 py-6 rounded-full text-[18px] m-2 ${
              selectedCategory === 'all' 
                ? 'bg-white text-[#ed2024] border-red-600 border-2' 
                : 'bg-[#ed2024] text-white'
            } font-bold hover:text-[#ed2024] hover:border-red-600 hover:bg-white hover:border-2`}
          >
            All
          </button>
        </div>
        {filteredTools.length > 0 ? (
          <ToolGrid tools={filteredTools} />
        ) : (
          <p className="text-center text-gray-600">No tools available for this category at the moment.</p>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default Alltools;

