const CampaignSection = ({ title, price, description, views, likes }) => (
    <div className='w-full sm:mt-20 lg:mt-28 rounded-3xl Campaign-sec lg:flex sm:py-28 min-[1px]:pt-16 pb-36 bg-[#F4F6F8]'>
      <div className='w-full min-[1px]:px-10 sm:px-20 lg:pl-20'>
        <h1 className="font-montserrat min-[320px]:text-[30px] 2xl:w-full lg:text-[32px] sm:text-4xl md:text-[2.75rem] font-bold text-gray-800 mb-4">
          {title}
        </h1>
        <div className='xl:flex font-montserrat'>
          <span className="font-montserrat text-[1.75rem] text-white sm:mb-4 min-[1px]:mb-4 md:mb-0 font-bold bg-[#ed2024] px-5 py-3 rounded-[.75rem] flex items-center w-36">
            {price}
          </span>
          <button className='py-6 px-24 bg-black rounded-full text-white font-bold text-[18px] sm:mt-5 xl:mt-0 xl:ml-10'>
            Buy Now
          </button>
        </div>
        <p className="font-montserrat block sm:my-5 mx-0 min-[1px]:my-5 max-[639px]:my-0 lg:w-full text-lg text-#050708">
          {description}
        </p>
      </div>
      <div className='w-full min-[1px]:px-10 sm:pl-20 sm:pr-40 flex flex-col lg:justify-center xl:justify-end'>
        <div className='flex justify-between mb-5'>
          <p><span className='text-[32px] font-bold text-[#ed2024]'>{views}</span> <br /> Views for <br /> chosen video</p>
          <p><span className='text-[32px] font-bold text-[#ed2024]'>{likes}</span> <br /> Likes for <br /> chosen video</p>
        </div>
      </div>
    </div>
  );
  
  export default CampaignSection;