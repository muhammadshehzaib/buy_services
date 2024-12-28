'use client'
import React, { useState } from 'react';

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null); // Track which FAQ is open

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className="lg:flex sm:pt-36 min-[1px]:pt-0">
      <div className="text-sec lg:w-2/4 lg:pr-28">
        <h3 className="text-[32px] sm:text-[36px] md:text-[40px] pb-4 font-[550] ">
          Frequently Asked Questions
        </h3>
      </div>
      <div className='accordian w-full'>
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="collapse collapse-plus mb-5 p-8 bg-white group" 
            style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}
          >
            <input 
              type="radio" 
              name="my-accordion" 
              checked={activeIndex === index} 
              onChange={() => handleToggle(index)} 
            />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500 dark:text-black text-black">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
