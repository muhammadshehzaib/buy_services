import React from "react";

export default function footer () {
    return (
        <footer className='lg:pt-40 sm:pt-28 min-[1px]:pt-24px '>
        <div className='flex justify-center'>
          <img src="https://views4you.com/wp-content/uploads/2022/08/logo@2x.png.webp" alt="" className='lg:w-[20%] w-[30%] sm:w-[30%] min-[1px]:w-[30%] my-10' />
        </div>
        <h1 className='md:text-[3rem] sm:text-[2.75rem] text-[2rem] sm:leading-[55px] font-bold text-center mb-10'>
          Connect with Views4You on <br /> social media to see all articles
        </h1>
        <div className='flex justify-center mb-20'>
          <div class="flex justify-around w-2/4 footer-social">
            <a href="https://www.youtube.com/@views4you.official" target="_blank" class="data-link" title="Youtube">
              <img src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg" alt="" className='h-14 w-14 ' />
            </a>
            <a href="https://www.linkedin.com/company/views4you/" target="_blank" class="data-link" title="Linkedin">
              <img src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg" alt="" className='h-14 w-14' />
            </a>
          </div>
        </div>
        <div class="lg:flex-row gap-4 lg:flex justify-center space-x-3 pb-16 mb-10 border-b-[1px] border-gray-500 ">
          <div className='btn-one'>
            <div className='min-[1px]:flex min-[1px]:justify-center lg:block'>
              <a href='/likes' class="bg-black text-white font-bold  py-5 px-16 rounded-full hover:bg-gray-800 transition">
                Buy YouTube Likes
              </a>
            </div>
            <p className='text-[18px] text-center pt-5'>
              Starting at <span className='font-bold'>$4.8</span>
            </p>
            <p className='text-[18px] text-center'>
              <span className='font-bold text-[#ed2024]'>4.9 / 5 </span>— based on 12 reviews
            </p>
          </div>
          <div>
            <div className='min-[1px]:flex  min-[1px]:justify-center lg:block '>
              <a href='/views' class="bg-black text-white sm:mt-10 lg:mt-0 font-bold py-5 px-16 rounded-full hover:bg-gray-800 transition">
                Buy YouTube Views
              </a>
            </div>
            <p className='text-[18px] text-center pt-5'>
              Starting at <span className='font-bold'>$3.5</span>
            </p>
            <p className='text-[18px] text-center'>
              <span className='font-bold text-[#ed2024]'>5.0 / 5 </span>— based on 6 reviews
            </p>
          </div>
          <div>
            <div className='min-[1px]:flex sm:mt-10 lg:mt-0 min-[1px]:justify-center lg:block '>
              <a href='/subscribers' class="bg-black text-white font-bold py-5 px-12 rounded-full hover:bg-gray-800 transition">
                Buy YouTube Subscribers
              </a>
            </div>
            <p className='text-[18px] text-center pt-5'>
              Starting at <span className='font-bold'>$3.9</span>
            </p>
            <p className='text-[18px] text-center'>
              <span className='font-bold text-[#ed2024]'>4.9 / 5 </span>— based on 78 reviews
            </p>
          </div>
        </div>
        <div className='mb-16'>
          <ul id="menu-footer_menu_new" className="menu-list flex flex-wrap justify-between sm:flex-wrap md:flex-nowrap w-full">
            <li className='text-[18px] font-bold'><a href="https://views4you.com/offers/">Offers</a></li>
            <li className='text-[18px] font-bold'><a href="https://views4you.com/affiliate-program/">Affiliate Program</a></li>
            <li className='text-[18px] font-bold'><a rel="privacy-policy" href="https://views4you.com/privacy-policy/">Privacy Policy</a></li>
            <li className='text-[18px] font-bold'><a href="https://views4you.com/terms-of-service/">Terms of Service</a></li>
            <li className='text-[18px] font-bold'><a href="https://views4you.com/about-us/">About Us</a></li>
          </ul>

        </div>
        <div className='flex justify-center'>
          <p className='text-center pb-4 w-11/12'>
            All materials provided by Views4You are protected by copyright laws. Any unauthorized reproduction or distribution of our materials, including videos, graphics and text, is strictly prohibited. Unauthorized use of our materials may lead to legal action. It is important to understand that Views4You operates independently and is not affiliated with any social media platform.
          </p>
        </div>
        <div className='flex justify-center'>
          <img src="https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=94a7c7e8-00c7-46d7-b097-aca6d83c0e04" alt="" />

        </div>
      </footer>
    );
}