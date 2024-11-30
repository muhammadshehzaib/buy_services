import React from 'react';

const FooterButton = ({ link, text, price, rating, reviews }) => (
  <div>
    <div className='min-[1px]:flex min-[1px]:justify-center lg:block'>
      <a href={link} className="bg-black text-white font-bold py-5 px-16 rounded-full hover:bg-gray-800 transition">
        {text}
      </a>
    </div>
    <p className='text-[18px] text-center pt-5'>
      Starting at <span className='font-bold'>${price}</span>
    </p>
    <p className='text-[18px] text-center'>
      <span className='font-bold text-[#ed2024]'>{rating} / 5 </span>— based on {reviews} reviews
    </p>
  </div>
);

export default FooterButton;

