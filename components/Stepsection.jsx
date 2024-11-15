'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'

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


export default function Stepsection() {
  return (
    <div className="items-center justify-between">
      <div className="mx-auto max-w-[1390px] lg:pt-28 sm:pt-20 min-[1px]:pt-8 px-5 pb-8">
        <div className="mb-[6.8rem]  w-full">
          <h1 className="text-center text-[2rem] font-[750]">How Views4You Work?</h1>
        </div>
        <div className="step-sec lg:pb-32 sm:pb-16">
          {/* Step One */}
          <div className="step-one md:flex w-full">
            <div className="img-sec md:w-2/4 md:mr-[7.8%]">
              <div className="one flex min-[1px]:justify-center xl:justify-end">
                <p
                  className="paras-one xl:mb-8 min-[1px]:mb-12 bg-[#ED2024] h-[.150rem] w-[11.4rem]"
                  style={{ transform: 'matrix(1, .58, 0, .89, 0, 0)' }}
                ></p>
              </div>
              <div className="two flex min-[1px]:justify-center xl:justify-end">
                <p
                  className="paras bg-[#ED202433] rounded-3xl h-[8.9rem] w-[14.4rem] text-[3rem] font-bold text-center flex justify-center items-center text-[#ED2024]"
                  style={{ transform: 'matrix(1, .58, 0, .89, 0, 0)' }}
                >
                  Step 1
                </p>
              </div>
              <div className="three flex min-[1px]:justify-center xl:justify-end sm:mb-16 min-[1px]:mb-16 md:mb-0">
                <p
                  className="paras-two bg-[#ED2024] rounded-md ml-10 mt-12 h-[.6rem] w-[9.25rem]"
                  style={{ transform: 'matrix(1, .58, 0, .89, 0, 0)' }}
                ></p>
              </div>
            </div>
            <div className="text-sec md:w-2/4">
              <h3 className="text-[1.5rem] pb-4 font-[550]">
                Start by Choosing | What Do You Need as YouTube Growth Service
              </h3>
              <ul>
                {[...Array(6)].map((_, index) => (
                  <li key={index} className="flex mb-7 text-[18px]">
                    <span className="bg-red-600 rounded-full align-middle mt-2 mr-2 lg:w-[1rem] lg:h-[.50rem] md:w-[1.25rem] md:h-[.35rem] min-[1px]:w-[1rem] min-[1px]:h-[0.6rem]"></span>
                    <p>
                      <span className="font-bold">Strict it Rich</span> | YouTube Subscribers In this package,
                      subscribers will be directed to your account immediately after you make a purchase.
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Step Two */}
          <div className="step-two w-full md:mt-32 sm:mt-24 min-[1px]:mt-24 sm:flex-col-reverse min-[1px]:flex-col-reverse md:flex-row flex">
            <div className="text-sec md:w-2/4">
              <h3 className="text-[1.5rem] pb-4 font-[550]">Hint Your Targeted Followers for Growth Services</h3>
              <p className="text-[18px] leading-9 text-black">
                We offer a variety of packages to fit your needs and budget. Now it is time to decide how many
                subscribers, likes or views you need. You can buy as few as <span className="font-bold">500</span>{' '}
                subscribers or up to <span className="font-bold">50.000</span> views and{' '}
                <span className="font-bold">2.500 </span>likes. The best quality, real, active, and organic YouTube
                services are waiting to be sent to your account so more people can watch, like, and comment on your
                videos. So, what are you waiting for?
              </p>
            </div>
            <div className="img-sec md:w-2/4 md:mr-[7.8%] justify-end">
              <div className="three flex justify-center">
                <p
                  className="paras-two bg-[#ED2024] mb-10 rounded-md ml-10 mt-12 h-[.6rem] w-[9.25rem]"
                  style={{ transform: 'matrix(1, .58, 0, .89, 0, 0)' }}
                ></p>
              </div>
              <div className="two flex justify-center">
                <p
                  className="paras bg-[#ED202433] rounded-3xl h-[8.9rem] w-[14.4rem] text-[3rem] font-bold text-center flex justify-center items-center text-[#ED2024]"
                  style={{ transform: 'matrix(1, .58, 0, .89, 0, 0)' }}
                >
                  Step 2
                </p>
              </div>
              <div className="one flex justify-center sm:mb-16 min-[1px]:mb-16 md:mb-0">
                <p
                  className="paras-one mt-8 bg-[#ED2024] h-[.150rem] w-[11.4rem]"
                  style={{ transform: 'matrix(1, .58, 0, .89, 0, 0)' }}
                ></p>
              </div>
            </div>
          </div>

          {/* Step Three */}
          <div className="step-two w-full mt-32 sm:mt-24 min-[1px]:mt-24 sm:mb-16 lg:mb-32 min-[1px]:mb-16 md:flex">
            <div className="img-sec md:w-2/4 md:mr-[7.8%] justify-end">
              <div className="one flex md:justify-start sm:justify-center min-[1px]:justify-center">
                <p
                  className="paras-one mb-20 bg-[#ED2024] h-[.150rem] w-[11.4rem]"
                  style={{ transform: 'matrix(1, .58, 0, .89, 0, 0)' }}
                ></p>
              </div>
              <div className="two flex md:justify-start sm:justify-center min-[1px]:justify-center">
                <p
                  className="paras bg-[#ED202433] rounded-3xl h-[8.9rem] w-[14.4rem] text-[3rem] font-bold text-center flex justify-center items-center text-[#ED2024]"
                  style={{ transform: 'matrix(1, .58, 0, .89, 0, 0)' }}
                >
                  Step 3
                </p>
              </div>
              <div className="three flex md:justify-start sm:justify-center min-[1px]:justify-center sm:mb-16 md:mb-0">
                <p
                  className="paras-two bg-[#ED2024] rounded-md ml-10 mt-12 h-[.6rem] w-[9.25rem]"
                  style={{ transform: 'matrix(1, .58, 0, .89, 0, 0)' }}
                ></p>
              </div>
            </div>
            <div className="text-sec md:w-2/4 min-[1px]:mt-8 md:mt-0">
              <h3 className="text-[1.5rem] pb-4 font-[550]">Wait for the Magic Happens</h3>
              <p className="text-[18px] leading-9 text-black">
                No worries, Views4You offers a money-back guarantee if you&apos;re not satisfied with the service. Also,
                we have a flexible delivery time – you can choose to get your subscribers delivered gradually or all at
                once. Well, it depends on what do you prefer!
              </p>
            </div>
          </div>
        </div>

        {/* Article Section */}
        <div>
        <div>
              <h2 className="sm:text-[48px] min-[320px]:text-[3rem]  font-bold text-center mb-14">
              Latest articles
      </h2>
              </div>
        <div className="grid lg:grid-cols-3 gap-12 md:grid-cols-2 sm:grid-cols-2 min-[1px]:grid-cols-1 lg:mb-24">
          
          {[
            {
              image: 'https://views4you.com/wp-content/uploads/2024/11/cant-follow-users-on-Instagram.png.webp',
              title: "I Can't Follow Users on Instagram- How to Fix It?",
              excerpt: "Keynote Frustrated with the 'I can't follow...",
              date: 'Nov 12 • 4 min read',
              tag: 'Instagram',
            },
            {
              image: 'https://views4you.com/wp-content/uploads/2024/11/youtube-data-stories.png.webp',
              title: 'New Feature: YouTube Data Stories',
              excerpt: 'Keynote YouTube is experimenting the use of "data...',
              date: 'Nov 11 • 2 min read',
              tag: 'News',
            },
            {
              image: 'https://views4you.com/wp-content/uploads/2024/11/Views4You-Blog-1.png.webp',
              title: 'More YouTube AI Summary for Videos and New Tools',
              excerpt: 'Keynote YouTube has new tools for creators. The Studio app...',
              date: 'Nov 5 • 2 min read',
              tag: 'News',
            },
          ].map((post, index) => (
          
            <div key={index} className="post">
              <img src={post.image} alt="" width={400} height={225} className="sm:w-full min-[1px]:w-4/5" />
              
              <div className="flex img-box">
                <img
                  src="https://views4you.com/wp-content/uploads/2022/08/beatriz.jpg.webp"
                  alt=""
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <p className="text-[18px] font-bold ml-2">Beatriz Sirena</p>
              </div>
              <h3 className="md:text-2xl sm:text-[20px] min-[1px]:text-[18px] font-bold mt-10 mb-16">{post.title}</h3>
              <p className="text-[18px] text-[#4b4b4b] my-5">{post.excerpt}</p>
              <div className="flex link-sec mb-5">
                <Link href="#" className="text-red-500 font-[900] underline mr-7">
                  Continue Reading
                </Link>
                <button className="wcl-save-post data-button data-save-button" aria-label="Save Button">
                  <svg width="25" height="20" viewBox="0 0 25 35" fill="none" className="mr-5">
                    <path
                      d="M11.8753 24.2191L1 32.9194V1H24V32.9194L13.1247 24.2191L12.5 23.7194L11.8753 24.2191Z"
                      stroke="#9E9E9E"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </button>
                <button className="data-button data-socials-button" aria-label="Socials Button">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M19.8291 0.171324C19.6636 0.0058553 19.4154 -0.0450252 19.1983 0.041842L0.405731 7.55882C0.190708 7.64483 0.0467227 7.8496 0.038457 8.08107C0.0302304 8.31251 0.159361 8.52699 0.367717 8.62805L7.77823 12.2221L11.3723 19.6326C11.4703 19.8347 11.675 19.9623 11.8984 19.9623C11.9053 19.9623 11.9123 19.9621 11.9193 19.9619C12.1507 19.9536 12.3555 19.8097 12.4415 19.5946L19.9585 0.802086C20.0454 0.58484 19.9945 0.336754 19.8291 0.171324ZM2.06915 8.15324L16.9873 2.18603L8.09669 11.0765L2.06915 8.15324ZM11.8471 17.9312L8.92376 11.9036L17.8144 3.01307L11.8471 17.9312Z"
                      fill="#9E9E9E"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex items-center mt-4 text-gray-500 text-[18px]">
                <span>{post.date}</span>
                <span className="px-2 py-1 bg-[#d9d9d9] rounded-full text-gray-600 ml-3">{post.tag}</span>
              </div>
            </div>
          ))}
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
             <button class="bg-black text-white font-bold  py-5 px-16 rounded-full hover:bg-gray-800 transition">
                    Buy YouTube Likes
                </button>
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
                <button class="bg-black text-white sm:mt-10 lg:mt-0 font-bold py-5 px-16 rounded-full hover:bg-gray-800 transition">
                Buy YouTube Views
                </button>
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
               <button class="bg-black text-white font-bold py-5 px-12 rounded-full hover:bg-gray-800 transition">
                Buy YouTube Subscribers
                </button>
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
    </div>
  )
}