'use client'

import React, { useState } from 'react';

const TabsFlie = ({
    title,
    minititle,
    subtitle,
    tabsData,
    features
}) => {
    const [activeTab, setActiveTab] = useState(tabsData[0]?.key);

    const activeTabContent = tabsData.find(tab => tab.key === activeTab);

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
                    
                    {/* tabs  */}
                    <div className="flex justify-between mx-4">
                        {tabsData.map((tab) => (
                            <button
                                key={tab.key}
                                className={`py-3 px-6 font-bold ${activeTab === tab.key ? 'text-red-600 border-b-4 border-red-600' : 'text-gray-500'
                                    }`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Info Section */}
                    {activeTabContent?.info && (
                        <div className="bg-gray-100 p-4 mb-6">
                            <p className="text-sm font-medium text-gray-700">{activeTabContent.info}</p>
                        </div>
                    )}

                    {/* Pricing Section */}
                    <div className=" p-10">
                        {activeTabContent?.offers.map((offer, index) => (
                            <div key={index} className="sm:flex gap-8 mb-4">
                                <div className="flex w-full">
                                    <div className="flex-grow flex-shrink-0 flex flex-col items-center justify-center rounded-tl-full rounded-bl-full border-r-0 border-2">
                                        <p className="text-[24px] font-bold">{offer.views}</p>
                                        <p className="text-[15px]">views</p>
                                    </div>
                                    <div className="flex-none basis-[58%] flex flex-col items-center justify-center text-[18px] font-bold bg-[#f4f6f8] rounded-tr-full rounded-br-full">
                                        <p className="text-[#000] flex gap-x-2">
                                            {offer.originalPrice && (
                                                <span className="line-through mb-2">{offer.originalPrice}</span>
                                            )}
                                            <span className="text-[#ed2024]">{offer.discountedPrice}</span>
                                        </p>
                                        {offer.discount && (
                                            <p className="bg-[#ed2024] flex justify-center text-white px-2 rounded-tr-lg rounded-tl-lg">
                                                save {offer.discount}%
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabsFlie;

