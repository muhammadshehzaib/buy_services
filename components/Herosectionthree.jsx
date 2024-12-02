'use client'

import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from "./Footer";
import LineSection from "./linesection/LineSection";
import CampaignSection from "./campaignsection/CampaignSection"


const testimonials = {
  slides: [
    {
      testimonials: [
        {
          image1: "Stepsection../public/images/double-quotes.png",
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


export default function Herosectionthree() {
  return (
    <div className='items-center justify-between max-w-[1390px] px-5 mx-auto'>

      {/* Subscriber page  */}

      {/* Subscriber-sec-tabs  */}
      <div className="flex flex-col max-w-[1390px] px-5 mx-auto  md:flex-row justify-center lg:pt-16 lg:pb-20 md:pt-9 md:pb-9 sm:pt-10 sm:pb-10 min-[1px]:pb-10 min-[1px]:pt-8 max-[639px]:pb-0 max-[639px]:pt-8">
        <div className="w-full  md:mb-0 ">
          <h1 className="font-montserrat min-[320px]:text-[30px] 2xl:w-full lg:text-6xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-800 mb-4">
            Buy YouTube Subscribers <span className='font-bold bg-[#ed2024] text-white p-3 rounded-2xl text-[36px]'>Fast</span>
          </h1>
          <p className="font-montserrat block md:my-5 mx-0 md:py-3 sm:my-0 min-[1px]:my-0 max-[639px]:my-0 lg:w-full text-lg text-#050708">
            Views4You is the safest way to buy YouTube Views with delivery in just a few minutes. We offer multiple packages with real users for all different needs - choose wisely!
          </p>

        </div>
        <div className="w-full h-80 bg-slate-300 tabs-sec">
          <div className="flex justify-between">
            <p className='text-xl font-montserrat  font-bold text-[#ed2024]'>Regular Views</p>
            <p className='text-xl font-montserrat  font-bold'>Ads Views</p>
          </div>
          <div className='h-28 flex items-center bg-slate-50'>
            <p className='font-montserrat text-[18px]'><span className='font-bold'>Information:</span> We recommend our <span className='text-[#ed2024] font-bold'>“Ads YouTube Views”</span> packages for orders with a high number of views.</p>
          </div>
          <div>

          </div>
        </div>
      </div>
      {/* Campaign sec */}
       {/* Campaign sec */}
       <CampaignSection
      title="All In One YouTube Subscribers Campaign"
      price="$68.00"
      description="Buy real YouTube subscribers from Views4You with an exclusive package, including buy YouTube Views service to add more engagement to your videos. Also, you can buy YouTube likes service to increase your channel’s performance instantly. After your purchase, you can benefit from customer service at all hours of the day and night."
      views="5000"
      likes="1000"
    />
    <LineSection />

      {/* video sec  */}
      <div className="">
        <div className='text-center flex items-center video-sec flex-col'>
          <h2 className='text-[32px] font-bold lg:w-2/4 sm:3/4 mb-6'>The Best YouTube Subscribers Service in the World!</h2>
          <p className='text-[18px] w-3/4'>Just click to buy YouTube subscribers. If you start buying YouTube subscribers from us right now, your active users will surely increase. Once you get them, they will serve as social proof for your audience.</p>
          <p className='flex justify-center pt-5 w-full'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3bdcvn7NfhI?si=KsbLNGvy7oDdx1Ul" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </p>
        </div>
      </div>
      {/* stepssec  */}
      <div className='main-step-sec'>
        {/* step-one  */}
        <div className="step-two w-full md:mt-32 sm:mt-24 min-[1px]:mt-24 lg:flex">
          <div className="img-sec sm:w-full xl:w-2/4 flex justify-center items-center relative">
            <img
              src="https://views4you.com/wp-content/uploads/2023/01/views4you-live-stream-record.jpg"
              alt=""
              className="mbl-img lg:w-[65%] sm:w-[45%] sm:top-[25px] min-[1px]:w-[55%] min-[1px]:top-[25px] h-auto relative rounded-xl 2xl:top-[7%] lg:top-[5%]"
              style={{
                transform: "matrix(1, -.6, 0, .89, 0, 0)",
              }}
            />
            <img
              src="https://views4you.com/wp-content/themes/views4you_theme/img/device-1.png"
              alt=""
              className="absolute xl:w-full sm:w-[65%] min-[1px]:w-[85%] lg:w-auto"
            />
          </div>
          <div className="text-sec sm:w-full sm:mt-32 min-[1px]:mt-32 lg:mt-0 xl:w-2/4">
            <h3 className="text-[32px] sm:text-[36px] md:text-[40px] pb-4 font-[550]">
              Why Risk your Money on an Unknown Service when we Guarantee the Quality?
            </h3>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-7 sm:leading-9 text-black">
              To make your channel stand out on YouTube, you need active subscribers. If you are new to this platform, it is so natural that you have fewer subscribers at first. But you can buy organic YouTube subscribers safely and quickly. Thanks to active YouTube subscribers, the number of likes and views will increase soon. Therefore, maybe a thousand subscribers can watch each YouTube video. If you shoot high quality videos and share these from other social media accounts, you can gain organic subscribers. If you have been on the YouTube platform for a long time and your number of subscribers is staying the same, you can get support from Views4You. Your YouTube channel will be visible again in a short time. You can continue to be successful thanks to purchased YouTube subscribers or add more success to your channel by buying YouTube watch hours service for your videos. You need more active YouTube subscribers to grow their channel and make money. Therefore, if you are one of them, you can buy as many subscribers as you want.
            </p>
          </div>
        </div>


        {/* step two  */}
        <div className="step-two w-full md:mt-36 sm:mb-32 sm:mt-24 min-[1px]:mt-24 lg:flex lg:flex-row min-[1px]:flex min-[1px]:flex-col-reverse">
          <div className="text-sec sm:w-full xl:w-2/4">
            <h3 className="text-[32px] sm:text-[36px] md:text-[40px] pb-4 font-[550]">
              Do My Activities on YouTube Cause My Account to Be Suspended?
            </h3>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-7 sm:leading-9 text-black">
              Buying subscribers from Views4You is one of the best ways to grow your channel. We send you the real subscribers you buy within days. There is a reason we do this. The YouTube algorithm may detect organic users who suddenly start following your page as fake subscribers. Thanks to Views4You, popular video sharing platform will not detect any unusual movement, and your YouTube channel will not be banned. As long as you buy YouTube subscribers packages from us, you will not encounter such a problem.
            </p>
          </div>
          <div className="sm:w-3/4 min-[1px]:w-2/4 lg:mb-36 para items-center relative sm:mb-12 min-[1px]:mb-12 ">
            <div className='sm:flex sm:justify-center xl:justify-center'><p className="para-text bg-[#ED202433] rounded-3xl h-[8.9rem] sm:w-[12.4rem] min-[1px]:w-[9.4rem]" style={{ transform: "matrix(1, -.58, 0, .89, 0, 0)" }} ></p></div>
            <div className='sm:flex sm:justify-center xl:justify-center'><p className='paras-one-text bg-[#ED2024] h-[.150rem] sm:w-[11.4rem] min-[1px]:w-[7.4rem] bottom-[120px] left-20 relative' style={{ transform: "matrix(1, -.58, 0, .89, 0, 0)" }}></p></div>
          </div>

        </div>


        {/* step three  */}
        <div className="step-two w-full md:mt-36 sm:mt-24 min-[1px]:mt-24 lg:flex ">
          <div className="sm:w-3/4 min-[1px]:w-2/4 lg:mb-36 para items-center relative sm:mb-12 min-[1px]:mb-12">
            <div className='sm:flex sm:justify-center xl:justify-center'><p className="para-text bg-[#ED202433] rounded-3xl h-[8.9rem] sm:w-[12.4rem] min-[1px]:w-[9.4rem]" style={{ transform: "matrix(1, -.58, 0, .89, 0, 0)" }} ></p></div>
            <div className='sm:flex sm:justify-center xl:justify-center'><p className='paras-one-text bg-[#ED2024] h-[.150rem] sm:w-[11.4rem] min-[1px]:w-[7.4rem] bottom-[120px] left-20 relative' style={{ transform: "matrix(1, -.58, 0, .89, 0, 0)" }}></p></div>
          </div>
          <div className="text-sec sm:w-full xl:w-2/4">
            <h3 className="text-[32px] sm:text-[36px] md:text-[40px] pb-4 font-[550]">
              Gain Online Reputation and Money with Views4You
            </h3>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-7 sm:leading-9 text-black">
              What was your expectation when opening the YouTube account? If you want to get a reputation and gain more money, you are at the right social media service provider! If you have fewer subscribers, we are here for your YouTube journey. You can gain organic subscribers for your YouTube channels. Buy subscribers, as much as you wish! Don’t you want to get the reward for your efforts as soon as possible? Wouldn’t you like to announce your work to a broader subscriber base? Or do you want to earn more money? If your answer is yes to all of these questions, try Views4You, one of the YouTube subscriber packages. As a Youtube channel owners, you can be reach your targets. Creating an audience in digital media takes time. That’s why you can double or even triple your YouTube success with support from a trusted source, Views4You. You can choose one of the YouTube subscription packages and enjoy becoming famous quickly. Still uncertain? Views4You has been declared the top-rated platform for purchasing YouTube subscribers by a variety of prestigious publications, including Entrepreneur, Wtkr, and OrlandoWeekly. Don’t miss out on the opportunity to join the ranks of thousands of satisfied YouTubers who have already made the wise decision to choose Views4You. All you have to do is select the number of channel subscribers and click the buy now button!
            </p>
          </div>

        </div>
      </div>
      {/* reviews slider  */}
      <div className='pt-14'>
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
      {/* FAQ,S sec  */}

      <div className="lg:flex sm:pt-36 min-[1px]:pt-24 ">
        <div className="text-sec sm:w-full  lg:pr-32">
          <h3 className="text-[32px] sm:text-[36px] md:text-[40px] pb-4 font-[550]">
            Frequently Asked Questions
          </h3>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-7 sm:leading-9 text-black">
            Got some questions about our services? We are here to answer all of them, so grab a seat and let&apos;s get started!
          </p>
        </div>
        <div className='accordian w-full'>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Can YouTube Subscribers Be Bought?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Of course, we are for it! We are a reliable website that sells genuine YouTube subscribers. We have verification from reputable organizations, which attests to the credibility of our services. When you purchase from us, you can be confident that you will receive high-quality subscribers who will assist you in growing your channel.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              How Can I Trust This Site?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                We are a trustworthy site that sells real YouTube subscribers. We have certification from authoritative organizations that confirms the legitimacy of our services. When you buy from us, you can be certain that you’re getting quality subscribers who will help you grow your channel.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Are These Subscribers’ Bots or Real People?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                If YouTube detects that you are using bots, your account will be closed. This is to protect the site from spam and fraud.
                We understand how important your account safety is to you. That’s why we only provide real, organic subscribers who will engage with your content. You can rest assured knowing that your account is in safe hands with us. We would never sell you bots!
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              How to Get YouTube Subscribers Free?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                You can try our free YouTube subscribers trial. Also, you can obtain your free subscribers in as little as one day. We do not require your payment method or any personal information. You can only get 20 free subscribers for one channel at a time. We offer you an opportunity to meet Views4You. After the free trial, there will be no drop in your subscribers. Because the subscribers we offer you, even for free, are real people. If you try a free trial from a site other than Views4You, you may soon notice that the subscribers are bots. In addition, spam accounts will unsubscribe you after a while. It proves that those services are unreliable. Visit Views4You Buy YouTube Subscribers for reliable and permanent subscribers.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Is My Subscriber Number Going to Change?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                If you buy YouTube subscribers from us, your subscriber count will change. Since they are real subscribers, we also have to consider the potential impact of their feedback. Subscribers who don’t like the content on your page are likely to leave. However, we can quickly refill them again with new subscribers.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Are YouTube Subscribers Permanent?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                If you buy YouTube subscribers from us, then, yes. Because our team checks each subscriber to see whether s/he is real; however, if you purchase subscribers from other services, they might not be permanent. They can be a bot or spam account. You can see that the accounts can unsubscribe you.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Do I Have to Increase My YouTube Subscribers Number Near a Thousand?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                You’ll be able to participate in the YouTube Partnership Program, begin monetizing your videos, and earn delightful passive revenue once you’ve reached this milestone. Over 10 million video makers have exceeded the 1,000-subscriber milestone, demonstrating that it is possible. If you create your new account, buy organic subscribers from Views4You.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              How do YouTube Subscribers Increase in Other Way?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                There are many ways to increase YouTube subscribers. You can post videos frequently and share them on other platforms. Over time, you will see your subscribers increase slowly. However, there is a way to increase this number more quickly. You know what it is. You can buy YouTube subscribers from us. Choose the most suitable package for your budget with different package options. It is possible to buy more than one package, too. In this way, you will be increasing your follower count organically.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Why YouTube Subscribers Are Decreasing?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                There are numerous reasons why a person can choose to unsubscribe to your YouTube channel. You may not be very creative as your subscriber expects or you may not posting your content in timely manner, or even your voice may affect the subscriber who got irritated. Then, s/he may choose to unsubscribe from your channel which causes the decrease. But, if you buy YouTube subscribers from somewhere and started to loose them. The most obvious reason is that these newcomers can be a bot or fake accounts. This is the most common situation you may encounter if you buy subscribers from another. you can encounter this situation. If you want to have permanent subscribers, you can choose Views4You’s subscriber packages, we only offer real YouTube user engagement.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              How Long Does it Take to Refill My Subscribers?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                There will be no drop in number of subscribers, but just in case, we estimate that the average period for refilling subscribers is between 1 and 5 days. You can be sure that this package will be delivered on time and without any hassle.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Can I Gain Money From These Subscribers?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Although they are real subscribers, YouTube can’t accept them as your first 1,000 subs to monetize your account. Instead, the purpose of these subscribers is to help you show other YouTube users that you have good content and you have some subscribers. This will give your page value and influence others to subscribe.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Is YouTube Subscribers Count Important?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Of course, YouTube cares about your subscriber numbers. It is the one of the conditions that is considered when you applied to YouTube Partner Program. The program that allows you to make money on YouTube.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Do I Need YouTube Subscribers for Monetization?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Yes, of course! If you want to be considered for YouTube’s monetization scheme, you must have at least 1,000 subscribers and 4,000 view hours in the last 12 months. Once you pass these numbers, you can start making money quickly. You can even begin by buying subscribers from us.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              How Much Do I Pay for YouTube Subscribers to Make Money?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Paying more or less is up to you. You can choose one of the packages depending on how many subscribers you want to your channel. You can find the most affordable subscription packages on our site. Contact us if you see the opportunity to buy a YouTube subscriber on a different site. In this way, we can equalize our prices and offer you a better-quality service at the same price.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              How to Get YouTube Subscribers for Making Money?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                It is so easy! You can buy from Views4You with basic information and a few clicks. First of all, you should enter in Buy YouTube Subscribers page. After that, you have to pick one of the affordable packages. Then, we need your channel URL and name. That’s all!
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Do I Need YouTube Subscribers to Get Paid?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                If you have a YouTube channel, you must also have subscribers to get the video views which is the real proved thing to make money on YouTube. Especially if you opened this channel to make money, you must have a lot of subscribers to promote your content to get more views. You can use Views4You’s service to get more subscribers, or views.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Are There Any Effects YouTube Subscribers to Views Ratio?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Yes, of course! More YouTube subscribers are essentially social proof. It is due to the popularity of the channel. More subscribers may persuade others to subscribe to your YouTube channel. More subscribers equals to high views ratio.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Are These Subscribers Going to Watch My Videos?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                When you buy YouTube subscribers from us, these subscribers are only going to reflect on your analytics. The subscribers don’t watch the actual videos unless it’s content they like. They just change your subscriber count. If you want your video views to match up with your subscriber numbers, you’ll need to buy some view packages. Simply check out how many subscribers you have, and find a view package that will give you at least that many views or something close. Otherwise, the content on your page will look kind of deserted and empty.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Who Are My YouTube Subscribers when I buy from Views4You?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                The subscribers you buy from us are real. We make subscribers all over the world available to you. It’s always been challenging to find the ideal subscribers for your needs! You can find the ideal match for your company with our updated and enhanced subscription options. We do not send you random or unchecked subscribers. Every account is carefully reviewed and sent to you to ensure you grow organically.
              </p>
            </div>
          </div><div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Where are These Subscribers From?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                The location of your subscribers is also very important. That’s why we make subscribers available to you from all around the world. Choosing the right subscribers for your needs has never been easier! With our new and improved subscriber options, you can find the perfect match for your business. The subscribers are not going to write anything in any language, so don’t worry if you didn’t find your country on the list, just pick something close.
              </p>
            </div>
          </div><div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Do I see YouTube Subscriber Names after I Bought One of the Packages from Views4You?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Yes, you can see YouTube subscribers’ names. You may see a list of your latest subscribers on the channel dashboard. In YouTube Studio, you can also see your subscriber numbers over time. Enter your YouTube Studio username and password. Then, locate the “Recent subscribers” card on the Dashboard. To enlarge the card, click See all. Subscribers appear on your list of recent subscribers if they made their subscriptions public or joined your channel during the previous 28 days. However, subscribers may not appear on your list of current subscribers if they decide to keep their subscriptions confidential. Or their account has been suspended or flagged as spam. However, if you buy subscribers from us, you can see the newcomers daily because we don’t send them at once. We send the subscribers according to the package that you buy.
              </p>
            </div>
          </div><div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              How Long Does it Take to Start After Payment?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Once you make your payment, the process will instantly begin from our end, although it may take about 48 hours before changes begin to occur on your page. Once it kicks off, you’ll start to see an influx of new subscribers! There are different packages you can choose from that will determine how long we’ll send you subscribers. Choose the package that best fits your needs.
              </p>
            </div>
          </div><div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              When Can I Check My YouTube Subscribers After I Bought?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                When you complete your purchase, the procedure will begin immediately on our end, but it could take up to 48 hours for changes to appear on your page. Once it gets going, you’ll notice an increase in new subscribers! You can select one of several bundles to decide how long we will send you subscribers. Select the option that best meets your requirements.
              </p>
            </div>
          </div><div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              After I Bought One of The Packages from Views4you, Why Do YouTube Subscribers Not Updating?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                It depends on your subscriber count. If you have less than 1,000, it will be updated for each subscriber. However, if you have more than 100,000 subscribers, it will be updated for every 1,000 new subscribers.
              </p>
            </div>
          </div><div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Why Are My YouTube Subscribers Not Showing Up?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                This is not the thing you’ll face when you buy packages from Views4You. We provide every single order in time. But, if you wonder why your subscribers are not show up when you buy from another service. That’s probably they send you fakes and robots. Then, they might not show up on your recent list of subscribers. Because, they may have had their account suspended or marked as spam.
              </p>
            </div>
          </div><div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              How Can I Contact Your Site if I Had Any Problems?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                If you need to get in touch with us, there are several ways you can do so. You can email us if you like. Alternatively, our customer service is here to help immediately!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* reviews slider  */}
      <div className='pt-28 mb-16 flex justify-between items-center'>
        <h2 className='font-bold text-[32px] '>
          Reviews
        </h2>
        <div>
          <p>Average: <span className='font-bold'>4.9</span> / 5</p>
        </div>
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

      {/* form-sec  */}
      <div className="form bg-white rounded-2xl p-8" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
        <div className="heading mb-7">
          <h3 className='text-[24px] text-center font-bold'>Leave a review</h3>
        </div>
        <div className="sm:flex gap-10 mb-7">
          <div className="inputs sm:w-2/4">
            <input type="text" className='bg-[#F4F6F8] px-8 py-5 w-full mb-5 rounded-full' placeholder='Your Name*' /><br />
            <input type="text" className='bg-[#F4F6F8] px-8 py-5 w-full rounded-full' placeholder='Order Email*' />
          </div>
          <div className='sm:w-2/4 sm:mt-0 min-[1px]:mt-5'>
            <textarea name="" id="" placeholder='Your Review*' className='bg-[#F4F6F8] px-8 py-5 w-full rounded-2xl h-full'></textarea>
          </div>
        </div>
        <div className="rating flex justify-between items-center">
          <p className="text-[18px] ml-3">Rating*</p>
          <div className="rating-btn w-[47%]">
            <button className="text-[18px] bg-[#B4B4B4] text-white w-full h-[50px] rounded-full flex justify-center items-center"> Send</button>
          </div>
        </div>
      </div>
      {/* footer-sec / */}
      <Footer />
    </div>
  )
};