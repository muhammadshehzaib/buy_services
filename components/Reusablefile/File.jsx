'use client'

import React, { useState } from 'react';

const TabsFlie = ({
    title,
    minititle,
    subtitle,
    tabs,
    features
}) => {
    const [activeTab, setActiveTab] = useState(tabs[0]?.key);
    return (
        <div className='items-center justify-between max-w-[1390px] px-5 mx-auto'>
            <div className='flex min-[1px]:flex-col xl:flex-row justify-center items-center gap-10 pt-16'>
                {/* left section  */}
                <div className="xl:w-[45%] min-[1px]:w-full flex flex-col xl:justify-center xl:items-center sm:mb-10 xl:mb-0 ">
                    <h1 className="font-montserrat min-[320px]:text-[30px] 2xl:w-full lg:text-6xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-800 mb-4">
                        {title}
                        <span className="font-montserrat sm:mb-4 min-[1px]:mb-4 md:mb-0 font-bold bg-[#ed2024] text-white sm:text-[1.25rem] md:text-[1.75rem] leading-[2rem] inline-block px-5 py-3 rounded-[.75rem]">
                            {minititle}
                        </span>
                    </h1>
                    <p className="font-montserrat lg:w-[45%] min-[1px]:[75%] xl:w-full block md:my-5 mx-0 md:py-3 sm:my-0 min-[1px]:my-0 max-[639px]:my-0 text-lg text-#050708">
                        {subtitle}
                    </p>
                </div>
                {/* right section  */}
                <div className="xl:w-[50%] min-[1px]:w-[100%] lg:w-[65%] bg-white shadow-md rounded-lg">
                    
                    <button className="bg-black sm:w-[90%] min-[1px]:w-4/5 mx-10 text-white text-lg font-semibold py-5 my-6 rounded-full">
                        Buy now
                    </button>
                    {/* Features Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 px-10 mt-10 gap-4 text-gray-700 py-10 bg-[#f4f6f8]">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <span className="text-red-600">✔</span>
                                <p>{feature.para}</p>
                            </div>
                        ))};
                    </div>


                </div>

            </div>
        </div>
    )
}

export default TabsFlie;