import React from "react";

function Card({ 
  title, 
  description, 
  buttonText, 
  buttonLink, 
  buttonIcon, 
  icon, 
  startingPrice, 
  rating 
}) {
  return (
    <div className="flex items-center justify-between" id="card-sec">
      <div className="sm:pt-10 lg:py-16 sm:pb-0 max-w-[1432px] px-5 sm:w-full min-[1px]:w-full mx-auto min-[1px]:pb-0">
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <div className="flex mb-5">
            <img src={icon} alt={`${title} Icon`} className="w-[7%]" />
            <h3 className="text-[22px] font-bold ml-3">{title}</h3>
          </div>
          <p className="text-[18px] mb-4">{description}</p>
          <div>
            <a 
              href={buttonLink} 
              className="rounded-lg py-4 text-[18px] bg-[#ED2024] hover:bg-transparent hover:border-[#ED2024] hover:border-2 hover:text-[#ED2024] text-white flex justify-center items-center font-bold svg-img"
            >
              <img src={buttonIcon} alt="Button Icon" className="mr-4" />
              {buttonText}
            </a>
          </div>
          <div className="flex mt-5 justify-between items-center">
            <p className="text-gray-600">
              Starting at <span className="font-bold text-red-600">${startingPrice}</span>
            </p>
            <div className="flex text-2xl">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < rating ? "text-red-500" : "text-red-300"}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
