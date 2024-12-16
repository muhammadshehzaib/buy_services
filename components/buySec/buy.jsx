import React from "react";
import { data } from "./buydata.js";
const Buy = ({
}) => {
    return (
        <div className="mx-auto items-center justify-center py-20 px-5 lg:flex max-w-[1390px]">
            <div className="bg-white pt-14 pb-16 px-12 lg:w-[50%] shadow-md rounded-lg">
                <div className="sm:flex  mb-5 sm:w-[70%] justify-center items-center">
                    <h2 className="font-bold text-[24px] min-[1px]:text-center sm:text-left">Get started</h2>
                    <div className="flex items-center ml-12">
                        <h3 className="text-white font-bold text-lg py-2 px-2 rounded-lg bg-red-600">234 users</h3>
                        <p className="text-lg ml-2">online</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <input type="text" className="bg-[#f4f6f8] w-[90%] rounded-full py-4 mb-4 px-7" placeholder="YouTube Video URL" />
                    <input type="text" className="bg-[#f4f6f8] w-[90%] rounded-full py-4 mb-4 px-7" placeholder="Email address" />
                    <select type="text" className='bg-[#f4f6f8] w-[90%] rounded-full py-4 mb-4 px-7' placeholder=''>
                        {/* <option value="100">100 views - $0.98</option>
                        <option value="1000">1000 views - $4.70</option>
                        <option value="2500">2500 views - $10.90</option>
                        <option value="5000">5000 views - $21.00</option> */}
                        {data.map((option, index) => (
                            <option key={index} value={option.features}>
                                {option.features}
                            </option>
                        ))}
                    </select>
                    <div className="flex justify-left w-[80%] mt-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" className="ml-2" for="flexCheckDefault">
                            Send me special promotions and discounts</label>
                    </div>
                    <button className="bg-black sm:w-[90%] min-[1px]:w-4/5 mx-10 text-white text-lg font-semibold py-5 my-6 rounded-full">
                        Continue
                    </button>
                    <p className="w-[70%] text-center"><span className="text-red-600">*</span>If you want to select multiple video please provide your YouTube channel url</p>
                </div>
            </div>

            <div className="lg:ml-14 min-[1px]:pt-10 lg:pt-0 lg:w-[50%]">
                <img src="https://views4you.com/wp-content/themes/views4you_theme/img/icon-quote-red.svg" alt="" className="mb-7" />
                <h2 className="font-bold text-[24px] mb-7">Thank you Views4You Support team, I refounded the loss subscribers that I got from somewhere else, then bought some likes too!</h2>
                <h2 className="font-bold text-[24px] ">John Deere</h2>
                <img src="https://views4you.com/wp-content/uploads/2022/08/Trustpilot-Stars.svg" alt="" className="w-[180px]" />
            </div>
        </div>
    );
}
export default Buy;
