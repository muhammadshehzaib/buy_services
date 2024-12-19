'use client'

import React, { useState } from 'react';

const Buying = ({
    title,
    minititle,
    subtitle,
    inputone,
    btn,
    para,
    heading,
    features,
    name,
}) => {
    return (
        <div className="mx-auto items-center justify-center py-20 px-5 lg:flex max-w-[1390px]">
            <div className="bg-white pt-14 pb-16 px-12 lg:w-[50%] shadow-md rounded-lg">
                <div className="sm:flex  mb-5 sm:w-[70%] justify-center items-center">
                    <h2 className="font-bold text-[24px] min-[1px]:text-center sm:text-left">{title}</h2>
                    <div className="flex items-center ml-12">
                        <h3 className="text-white font-bold text-lg py-2 px-2 rounded-lg bg-red-600">{minititle}</h3>
                        <p className="text-lg ml-2">{subtitle}</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <input type="text" className="bg-[#f4f6f8] w-[90%] rounded-full py-4 mb-4 px-7" placeholder="YouTube Video URL" />
                    <input type="text" className="bg-[#f4f6f8] w-[90%] rounded-full py-4 mb-4 px-7" placeholder="Email address" />
                    <select type="text" className="bg-[#f4f6f8] w-[90%] rounded-full py-4 mb-4 px-7" placeholder="">
                        {features.map((option, index) => (
                            <option key={index} value={option.features}>
                                {option.features}
                            </option>
                        ))}
                    </select>
                    <div className="flex justify-left w-[80%] mt-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" className="pl-4" for="flexCheckDefault">
                            {inputone}</label>
                    </div>
                    <button className="bg-black sm:w-[90%] min-[1px]:w-4/5 mx-10 text-white text-lg font-semibold py-5 my-6 rounded-full">
                        {btn}
                    </button>
                    <p className="w-[70%] text-center"><span className="text-red-600">*</span>{para}</p>
                </div>
            </div>

            <div className="lg:ml-14 min-[1px]:pt-10 lg:pt-0 lg:w-[50%]">
                <img src="https://views4you.com/wp-content/themes/views4you_theme/img/icon-quote-red.svg" alt="" className="mb-7" />
                <h2 className="font-bold text-[24px] mb-7">{heading}</h2>
                <h2 className="font-bold text-[24px] ">{name}</h2>
                <img src="https://views4you.com/wp-content/uploads/2022/08/Trustpilot-Stars.svg" alt="" className="w-[180px]" />
            </div>
        </div>
    )
}
export default Buying