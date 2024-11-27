'use client'
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const testimonials = {
  slides: [
    {
      testimonials: [
        {   
          name: "Elizabeth",
          followers: "840k",
          quote: "Well, the site is terrific!!! I got my services in a moment! They gave me more confidence to work harder and monetize my channel.",
          image: "https://views4you.com/wp-content/uploads/2022/08/31.png.webp",
        },
        {
          name: "Lucy",
          followers: "100k",
          quote: "One of my friends sent the link to a video on YouTube about this site cause it has been just 1 month since I started my page. It was difficult at first but now with all these helpful videos, making them is easy!",
          image: "https://views4you.com/wp-content/uploads/2022/08/photo-3.png.webp",
        },
        {
          name: "John",
          followers: "560k",
          quote: "Wow! What a service. I’ve been following them for a while and was thinking if they are fake, I mean, they could be lost. But they didn’t! Thank you.",
          image: "https://views4you.com/wp-content/uploads/2022/08/photo-16.png.webp",
        },
      ],
    },
  ],
};

export default function story () {
  return (
    <div className='max-w-[1390px] px-5 mx-auto'>
        <div className="txt sm:mt-28 sm:mb-20 min-[1px]:my-6 flex flex-col items-center">
        <h2 className="text-3xl md:w-[65%] uppercase sm:text-3xl min-[1px]:text-[24px] font-bold text-center sm:mb-16 min-[1px]:mb-6">
        Instagram Story Viewer – Explore Profiles  Without a Trace
      </h2> 
      <p className='text-center'>Discover the freedom of viewing Instagram stories anonymously with our Instagram Story Viewer. This tool helps you to view content from any public account without compromising your privacy your identity.</p>
        </div>
        <div className="bg-white p-10 rounded-xl mb-16" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
    <input type="text" placeholder='Instagram User Name' className='w-full p-5 bg-[#F4F6F8] rounded-full mb-4'/>
    <div className="btns justify-center mb-9 flex flex-wrap">
        <a href="" className="px-14 py-6 rounded-full text-[18px] m-2 hover:bg-[#ed2024] hover:text-white font-bold text-[#ed2024] border-red-600 bg-white border-2">Stories</a>
        <a href="" className="px-14 py-6 rounded-full text-[18px] m-2 hover:bg-[#ed2024] hover:text-white font-bold text-[#ed2024] border-red-600 bg-white border-2">Posts</a>
        <a href="" className="px-14 py-6 rounded-full text-[18px] m-2 hover:bg-[#ed2024] hover:text-white font-bold text-[#ed2024] border-red-600 bg-white border-2">Highlights</a>
        <a href="" className="px-14 py-6 rounded-full text-[18px] m-2 bg-white text-[#ed2024] hover:bg-[#ed2024] hover:text-white font-bold border-red-600 border-2">Profile Photo</a>
      </div>
        </div>
        {/* story-info-sec  */}
        <div className="main lg:flex pb-24">
    <div className="fst-sec lg:border-r-2 lg:border-[#E6E6E6] lg:pr-16 lg:w-full">
      <h2 className='text-[32px]  sm:mb-10 min-[1px]:mb-5 font-bold'>What is Instagram Story Viewer?</h2>
      <p className='mb-5 text-[18px]'>
      Instagram Story Viewer is a free tool that you can view stories of active accounts anonymously. It allows you to view any accounts’ stories privately by just entering the name of that person or page without showing your personal information. If you are curious about a person and you want to check their stories without letting them know, this Instagram story tool is perfect for you!  Additionally, if you’re looking to make your own stories more visible or enhance your profile’s appeal, you might want to consider the option to buy Instagram likes.
      </p>
      <h2 className='text-[32px] font-bold sm:mb-16 min-[1px]:mb-8 min-[1px]:leading-9 sm:leading-normal'>How to Use Views4You Instagram Story Viewer</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/nr9Ynd3Ztms?si=OQCc8h5sgU0ZI0uX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='mb-10 w-full'></iframe>
      <p className='mb-5 text-[18px]'>Instagram story viewer is easy to use. </p>
      <ul className='list-disc mb-8 text-[18px]'>
        <li>Write the username or the Instagram account’s URL on the given box. </li>
        <li>Press the ‘search’ button. </li>
        <li>You can now view the stories.</li>
      </ul>
      <p>You can also use our tool as ‘Instagram Story Downloader’ to download the Instagram story of the user. However, one thing to know is that the account you want to view must be public. If you try to view any private account, it will not be allowed by Instagram’s terms of service. In the pursuit of maximizing your reach and ensuring your stories garner significant attention, you may also want to <span className='text-[#ed2024]'><a href="/insta">buy Instagram followers</a></span> to grow your audience base effectively.</p>
      <h2 className='text-[32px] font-bold sm:mt-16 min-[1px]:mt-8'>Instagram Story Viewer Features</h2>
      <p className='mb-5 text-[18px]'>Enormous features that you can benefit from:</p>
      <ul className='list-disc mb-8 text-[18px]'>
        <li><span className='font-bold'>View Instagram Story Anonymously: </span>You can keep your privacy safe while viewing Instagram stories. Your name and details will be hidden and you don’t need to have an Instagram account to do that. </li>
        <li><span className='font-bold'>No Membership & No Identification Details: </span> The tool is very easy and user-friendly. You can simply view stories without signing up on the page.  </li>
        <li><span className='font-bold'>Completely Free: </span>The tool is absolutely free and you can use it anytime and anywhere.  </li>
        <li><span className='font-bold'>No Proof! No Sign: </span> You can view an Instagram story anonymously without leaving any name details to the user.</li>
        <li><span className='font-bold'>HQ Downloader: </span>It allows you to download Instagram stories in high-quality fast and easy with this tool. Simply click on download and save stories fast. </li>
      </ul>
      <h2 className='text-[32px] font-bold sm:mt-16 min-[1px]:mt-8'>Benefits of Using Our Instagram Viewer Tool</h2>
      <p>
      Our Instagram Viewer Anonymously Tool offers you an enjoying journey while you use it. Feel free to take advantage of our tool’s benefits when you view Instagram story anonymously. 
      </p> <br />
      <p>
        <span className='font-bold text-[18px]'>Secret Browsing</span> <br />You can watch Instagram stories without your identity by using our “view Instagram story anonymously” function. It’s ideal for viewing Instagram secretly, allowing users to keep their privacy.
      </p> <br />
      <p>
        <span className='font-bold text-[18px]'>Access to the Whole</span> <br /> You don’t have an Instagram account, or Instagram is banned in your region? Not to worry! Access the stories of your favorite Instagram accounts with just one click by using our Instagram story viewer! 
      </p> <br />
      <p>
        <span className='font-bold text-[18px]'>Privacy is Respected</span> <br /> You may be sure that the anonymous watcher will keep no record of your Instagram user information. This is particularly useful when viewing stories from personal accounts. You can browse in peace knowing that we don’t jeopardize your Instagram data. 
      </p> <br />
      <p>
        <span className='font-bold text-[18px]'>Easy Ways to Share</span> <br /> Save your favorite stories before they expire so you may watch them later or share them with loved ones. Numerous gadgets, including Android and iOS phones and Mac laptops, are totally compatible with our service. 
      </p>
    </div>
    <div className="scnd-sec min-[1px]:mt-8 lg:mt-0 lg:ml-8 lg:border-b-2 lg:border-[#E6E6E6] sticky top-0 lg:pb-16 h-fit">
      {/* 1st-part  */}
      <div className='bg-[#F4F6F8] rounded-3xl'>
        <h2 className='bg-black text-white py-3 px-7 text-[18px] font-bold w-fit rounded-tl-3xl'>Free Instagram Tools</h2>
        <div className="li-sec mt-6 ">
        <div className="li-sec mt-6 sm:px-20 pb-10 min-[1px]:px-12">
  <a href="" className="mb-7 text-black underline text-[18px] block">Instagram Follower Count Checker</a>
  <a href="" className="mb-7 text-black underline text-[18px] block">Instagram Profile Picture Size</a>
  <a href="" className="mb-7 text-black underline text-[18px] block">Is Instagram Down?</a>
  <a href="" className="mb-7 text-black underline text-[18px] block">Instagram Hashtag Generator</a>
  <a href="" className="mb-7 text-black underline text-[18px] block">Instagram Font Generator</a>
  <a href="" className="mb-7 text-black underline text-[18px] block">Instagram Giveaway Picker</a>
</div>

        </div>
      </div>
      {/* 2nd part  */}
      <div className='bg-[#F4F6F8] rounded-3xl mt-7 sm:px-20 pb-10 min-[1px]:pr-5 min-[1px]:pl-20 '>
        <div className='jump-sec w-fit pt-7'><p className='bg-[#ed2024] py-2 px-6 rounded-full text-white'>Jump to section</p></div>
        <h2 className='my-7 font-bold text-[28px]'>Table of contents:</h2>
        <div className="li-sec mt-6 ">
        <div className="li-sec mt-6">
        <a 
  href="" 
  className=" text-black text-[18px] block drop  
             before:content-[''] before:block before:w-6 before:h-6 
             before:relative before:-left-[45px] before:top-6 
             before:bg-[url('https://views4you.com/wp-content/themes/views4you_theme/img/list-chevron-down.svg')] 
             before:bg-no-repeat before:bg-center before:bg-black before:rounded-full"
>
  What is Instagram Story Viewer?
</a>


  <a href="" className=" text-black text-[18px] block before:content-[''] before:block before:w-6 before:h-6 
             before:relative before:-left-[45px] before:top-6 
             before:bg-[url('https://views4you.com/wp-content/themes/views4you_theme/img/list-chevron-down.svg')] 
             before:bg-no-repeat before:bg-center before:bg-black before:rounded-full">How to Use Views4You Instagram Story Viewer?</a>
  <a href="" className=" text-black text-[18px] block before:content-[''] before:block before:w-6 before:h-6 
             before:relative before:-left-[45px] before:top-6 
             before:bg-[url('https://views4you.com/wp-content/themes/views4you_theme/img/list-chevron-down.svg')] 
             before:bg-no-repeat before:bg-center before:bg-black before:rounded-full">Instagram Story Viewer Features</a>
  <a href="" className="text-black text-[18px] block before:content-[''] before:block before:w-6 before:h-6 
             before:relative before:-left-[45px] before:top-6 
             before:bg-[url('https://views4you.com/wp-content/themes/views4you_theme/img/list-chevron-down.svg')] 
             before:bg-no-repeat before:bg-center before:bg-black before:rounded-full">Benefits of Using Our Instagram Viewer Tool</a>
</div>

        </div>
      </div>
    </div>
        </div>
        {/* faqs  */}
        <div className="lg:flex sm:pt-36 min-[1px]:pt-24 ">
          <div className="text-sec  w-[42%]  lg:pr-28">
    <h3 className="text-[32px] sm:text-[36px] md:text-[40px] pb-4 font-[550]">
    FAQs
    </h3>
    <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-7 sm:leading-9 text-black">
    Here you can see frequently asked questions commonly.
    </p>
  </div>
  <div className='accordian w-full'>
  <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
  How to view stories of private Instagram accounts ?
  </div>
  <div className="collapse-content">
    <p className="text-[18px]">
    Private accounts cannot be viewed due to Instagram Terms of Service. Our Instagram story viewer tool respect the user privacy so it doesn’t let people to view private stories or accounts. You can only view accounts  contents that are publicly open.  
    </p>
  </div>
</div>
<div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
  How to view someone's Instagram story anonymously?
  </div>
  <div className="collapse-content">
    <p className="text-[18px]">
    Views4You Instagram story viewer lets you view stories anonymously. You can easily search and view any profile with our tool. Our tool Instagram Story Viewer lets you check and view Instagram stories anonymously without showing your details to the page owner. Instagram stories can be viewed anonymously on our Instagram viewer tool. You can easily enter the name of the person in the search part and watch it.
    </p>
  </div>
</div>

<div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
  How to view an Instagram story without opening it?
  </div>
  <div className="collapse-content">
    <p className="text-[18px]">
    You don’t have to get into Instagram application to view any pages. All you need is the name of the page you wish to check. Simply go on our Instagram story viewer and enter the name. You can now enjoy viewing your favorite account profiles. One thing to remember is if you want to view the same stories over and over it is recommended that you download them on your device because the stories expire within 24 hr.
    </p>
  </div>
</div>
<div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
  Can I view Instagram stories on smart devices?
  </div>
  <div className="collapse-content">
    <p className="text-[18px]">
    Absolutely!!! You can view stories on İphone, Android and iMac computers and laptops anonymously. Our tool is designed perfectly to be used on any devices. Simply go on website and start searching.  
    </p>
  </div>
</div>
<div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
  Do I pay to use ‘Instagram Story Viewer’ tool?
  </div>
  <div className="collapse-content">
    <p className="text-[18px]">
    Instagram story viewer tool is completely free for users to use. No membership, no subscriptions and no payments! It is free, anonymous and easy to use.
    </p>
  </div>
</div>
  </div>
  </div>
   {/* Reviews Slider */}
   <div className='pt-16'>
          <h2 className='font-bold text-[32px] mb-16'>
          Reviews
          </h2>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          Pagination
          modules={[Pagination]}
        >
        
          {testimonials.slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-12 w-full">
                {slide.testimonials.map((testimonial, idx) => (
                  <div key={idx} className="testimonial-item mb-5  xl:pr-12 sm:pr-7 border-r-2">
                 <img
                  src={testimonial.image1}
                  alt=""
                />
                    <blockquote className='text-left  xl:text-xl font-bold sm:h-4/6 sm:mb-0 min-[1px]:mb-12 w-auto'>{testimonial.quote}</blockquote>
                    <div className='flex items-center gap-8'>
                    <img
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                   <div className='text-left text-[18px]'>
                   <h3 className='font-bold'>{testimonial.name}</h3>
                   <p>{testimonial.followers} followers</p>
                   </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
          {/* footer-sec / */}
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
									<img src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg" alt="" className='h-14 w-14 '/>
								</a>
																<a href="https://www.linkedin.com/company/views4you/" target="_blank" class="data-link" title="Linkedin">
                                <img src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg" alt="" className='h-14 w-14'/>
								</a>
													</div>
              </div>
              <div class="lg:flex-row gap-4 lg:flex justify-center space-x-3 pb-16 mb-10 border-b-[1px] border-gray-500 ">
             <div className='btn-one'>
             <div className='min-[1px]:flex min-[1px]:justify-center lg:block'>
             <a href='/Likes' class="bg-black text-white font-bold  py-5 px-16 rounded-full hover:bg-gray-800 transition">
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
                <a href='/Views' class="bg-black text-white sm:mt-10 lg:mt-0 font-bold py-5 px-16 rounded-full hover:bg-gray-800 transition">
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
               <a href='/Subscribers' class="bg-black text-white font-bold py-5 px-12 rounded-full hover:bg-gray-800 transition">
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

    </div>
  );
}