'use client'

import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from "./Footer";
import LineSection from "./linesection/LineSection";
import CampaignSection from "./campaignsection/CampaignSection"
import { mainTitle, mainContent, reasons } from './reasons/YoutubeLikeReasons';
import ReasonsContainer from './reasons/ReasonsContainer'; 


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


export default function Likesec() {
  return (
    <div className='items-center justify-between max-w-[1390px] px-5 mx-auto'>

      {/* Like page  */}

      {/* Like-sec-tabs  */}
      <div className="flex flex-col max-w-[1390px] px-5 mx-auto  md:flex-row justify-center lg:pt-16 lg:pb-20 md:pt-9 md:pb-9 sm:pt-10 sm:pb-10 min-[1px]:pb-10 min-[1px]:pt-8 max-[639px]:pb-0 max-[639px]:pt-8">
        <div className="w-full  md:mb-0 ">
          <h1 className="font-montserrat min-[320px]:text-[30px] 2xl:w-full lg:text-6xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-800 mb-4">
            Buy YouTube Likes
          </h1>
          <span className="font-montserrat sm:mb-4 min-[1px]:mb-4 md:mb-0 font-bold bg-[#ed2024] text-white sm:text-[1.25rem] md:text-[1.75rem] leading-[2rem] inline-block px-5 py-3 rounded-[.75rem]">
            Now
          </span>
          <p className="font-montserrat block md:my-5 mx-0 md:py-3 sm:my-0 min-[1px]:my-0 max-[639px]:my-0 lg:w-full text-lg text-#050708">
            Give wings to your YouTube videos with high quality YouTube likes that no YouTube algorithm can suspect. Because, they are from real people! Experience the doping effect of the right audience with a reasonable price. with Views4You. Read what is written about us in the press.
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
      title="All In One YouTube Likes Campaign"
      price="$45.00"
      description="Buy YouTube likes from Views4You, the best site to buy quality likes! There are no fake likes, only real account engagement to make your videos rank higher on search results. To create effective content marketing strategies on YouTube, all you need is to try our campaign combined by buying YouTube views and YouTube subscribers to get them all at once!"
      views="5000"
      likes="1000"
    />
    <LineSection />

    <ReasonsContainer
        mainTitle={mainTitle}
        mainContent={mainContent}
        reasons={reasons}
      />
      {/* video sec  */}
      <div className="">
        <div className='text-center flex min-[1px]:pt-20 sm:pt-24 lg:pt-36 items-center video-sec flex-col'>
          <h2 className='text-[32px] font-bold lg:w-2/4 sm:3/4 mb-6'>Double Your Engagement with YouTube Likes!</h2>
          <p className='text-[18px] w-3/4'>YouTube likes are, too, very important aspects of YouTube channel growth. Once you have them, they will work as a social proof for your real audience.</p>
          <p className='flex justify-center pt-5 w-full'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rKkT5LAEC-4?si=nmCZBvDYuSqmiH8H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </p>
        </div>
      </div>
      {/* stepssec  */}
      <div className='main-step-sec'>
        {/* step-one  */}
        <div className="step-two w-full md:mt-32 sm:mt-24 min-[1px]:mt-24 lg:flex">
          <div className="img-sec sm:w-full xl:w-2/4 flex justify-center items-center relative">
            <img
              src="https://views4you.com/wp-content/uploads/2022/08/2.jpg"
              alt=""
              className="mbl-img lg:w-[63%] sm:w-[40%] sm:top-[25px] min-[1px]:w-[55%] min-[1px]:top-[25px] h-auto relative rounded-xl 2xl:top-[4%] lg:top-[2%] xl:top-[5%]"
              style={{
                transform: "matrix(1, -.58, 0, .89, 0, 0)"
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
              Why Do You Need More YouTube Likes?
            </h3>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-7 sm:leading-9 text-black">
              If you’re running an online business, you need to have a strong presence on the world’s second-largest search engine, YouTube. Reaching your target audience is not an easy feat. Making it look real is even more difficult. If you have lots of subscribers, you need likes on your content and also views! Otherwise, the subscriber count will look fake. It’s alright if you don’t know how to get them simultaneously. Here’s where Views4You offers you a solution. With this service, you will increase your channel’s visibility by growing your likes. You’re wrong if you think likes are not very important for growth. Read more about visibility tactics and being an influencer conditions on YouTube by visiting our YouTube Money Calculator tool, and other tools, including blog posts. The more likes your channel has, the more likely it is that new viewers will watch and engage with your content. YouTube’s algorithm favors channels with high-quality videos like engagement rates, as well. Likes are also very important for growth. The more likes your channel has, the more likely new viewers will watch and engage with your content. YouTube’s algorithm favors channels with high engagement rates, as well.
            </p>
          </div>
        </div>


        {/* step two  */}
        <div className="step-two w-full md:mt-36 sm:mb-32 sm:mt-24 min-[1px]:mt-24 lg:flex lg:flex-row min-[1px]:flex min-[1px]:flex-col-reverse">
          <div className="text-sec sm:w-full xl:w-2/4">
            <h3 className="text-[32px] sm:text-[36px] md:text-[40px] pb-4 font-[550]">
              How Can I Buy YouTube Likes
            </h3>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-7 sm:leading-9 text-black">
              To get started, Views4You will need some basic information from you before you can buy YouTube likes. This includes your YouTube channel URL, your username, and your chosen package with affordable solutions. The next step is to sit back and let us do our thing. We’ll use our tried-and-true methods to help you organically grow your YouTube channel. One of the most important things about buying likes from Views4You is that we do not use your sensitive credit card information for suspicious activities. Rest assured that all the payments you make are secure. However, if you buy likes from any other place, they might steal your bank info to use later.
            </p>
          </div>
          <div className="img-sec sm:w-full xl:w-2/4 flex justify-center items-center relative">
            <img
              src="https://views4you.com/wp-content/uploads/2022/08/11.jpg"
              alt=""
              className="mbl-img lg:w-[63%] sm:w-[40%] sm:top-[25px] min-[1px]:w-[55%] min-[1px]:top-[25px] h-auto relative rounded-xl 2xl:top-[4%] lg:top-[2%] xl:top-[5%]"
              style={{
                transform: "matrix(1, .58, 0, .89, 0, 0)"
              }}
            />

          </div>

        </div>

        {/* step three  */}
        <div className="step-two w-full  md:mt-36 sm:mt-24 min-[1px]:mt-24 lg:flex ">
          <div className="img-sec relative sm:w-full xl:w-2/4 flex justify-center items-center">
            {/* First Image Inside the Second */}
            <img
              src="https://views4you.com/wp-content/uploads/2022/08/women-is-shocked.jpg"
              alt="YouTube Content"
              className="absolute left-[50%] w-[33%] 2xl:h-[78%] lg:h-2/5 object-cover xl:h-[70%] min-[1px]:h-4/5 rounded-xl "
              style={{ transform: "matrix(1, .6, 0, .89, 0, 0)" }}
            />
            {/* Second Image (Frame) */}
            <img
              src="https://views4you.com/wp-content/themes/views4you_theme/img/device-3.png"
              alt="Device Frame"
              className="relative w-[100%]"
            />
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
            We are here to answer all of your questions, so let&apos;s get started to improve your YouTube presence!
          </p>
        </div>
        <div className='accordian w-full'>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              How Long Will it Take for the YouTube Likes I Purchased to Appear on My Video?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Views4You offers two different YouTube like services in terms of delivery speed. The daily delivery speed of Views4You fast likes option is 2,000. Therefore you may get maximum 2,000 likes a day. You may choose to have the likes in fast version if you have any concerns of not getting them in time. However, to clarify all the process, we provide “order track” service once you purchased any YouTube growth service from Views4You. Therefore, there is no such thing as not getting your orders. On the other hand, if you choose Views4You slow likes option while buying YouTube likes, this speed is limited to 45 likes per day. You may choose to have the likes in slow version if you have any concerns of getting them at once. Our customers can receive their likes at the speed as they need.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Is it Legal to Buy Likes?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Yes, of course buying likes is legal. There is no legal issue preventing this. However, we should inform you that these and similar services are against YouTube’s terms of policies. Still, there is nothing to worry about if you buy it from Views4You, the real YouTube growth service provider. Our team is constantly working to ensure that our services offer you with the best benefit.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Can YouTube Remove Likes /or Can YouTube Detect Fake Likes?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                No bad news here, YouTube cannot remove likes or cause a drop in the likes you bought later. The reasons for this are simple: the likes you buy from third-party YouTube growth provider such as Views4You is a part of an organic process, therefore they are not fake or spam accounts. Also, through these purchasing, we are not connected to your account in any way, so, YouTube has no power over the top quality service Views4You. It means that since do all these in accordance with YouTube polices. There will no problem on secure delivery. Additionally, once the purchase is made and delivered, it’s permanent and can’t be reversed. That said, it’s important to note that buying likes and doing nothing on YouTube by yourself does not guarantee that you’re an excellent YouTuber in postion. You need to increase in engagement with your content, so consider other tactics such as creating engaging videos and promoting them on social media when looking to boost engagement by reading our blog posts. Ultimately, the success of your videos will depend on the quality of content you produce. In any way, we should also mark that our services are covered by a 30-day fall compensation or we offer money-back guarantee.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Are YouTube Likes Anonymous If You Buy Them from Views4You?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Of course they are from real YouTube users with real names and YouTube channels since they are directed to your account through suggested videos but, you definitely don’t know who they are. But, soon, you may become friends with your genuine subscribers. It’s all up to you.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Are YouTube Likes Private and Protect Your Privacy?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                We maintain your privacy throughout the process. Also never require you to give any information for more than what you need to give in order to get social media marketing services you ordered from Views4You. There is ssl encrypted payment gateway, too, to provide services with secure systems. We understand the importance of keeping your YouTube likes private and confidential so we make sure to maintain this privacy for all of our customers unlike any other social media platforms third party services. We want to make sure you can trust us with your content, and that’s why we never share any information concerning your orders or purchases with anyone else. With Views4you, you can be sure that all of your Likes will stay private so you can rest assured knowing your content is safe.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              What Effect Will These Likes Have on Your Video?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                There are some algorithms that YouTube arranges for users to reach more viewers and encourage users to create YouTube content strategy which are the main reasons to prioritize watch time on the platform itself. As in daily life, if you have more YouTube likes, YouTube often recommends your videos to other users.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Does YouTube Likes Make Money /or Play a Part on Making Money on YouTube?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Yes, YouTube likes can be an important factor in making money on YouTube. While having more YouTube views is certainly a great way to increase revenue, the number of likes and subscribers also play a role in determining how much money someone can make from their YouTube videos. A higher like count on your video content demonstrates that you have an engaged fanbase and social media success which will attract brands looking for influencers. Additionally, having many YouTube subscribers, YouTube likes, or YouTube comments means that viewers are more likely to share your content with others, thereby increasing the reach and viewership of your channel. This increased viewership brings even more ad revenue to YouTube creators and helps to ensure their continued success. That is all YouTube Partner Program stands for, to make your YouTube engagement keep going. In conclusion, likes and subscriptions both play an important part in helping creators earn money through their YouTube ventures.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              How Many YouTube Likes You Need to Get Paid by YouTube?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                This depends on a number of factors such as your content, type of audience and how much effort you put into promoting your videos. Generally speaking, the more likes you have on YouTube, the more your videos will be seen by potential viewers and advertisers. That said, it is estimated that 10,000 likes are needed to start making money from YouTube through ad revenue alone. However, if you can build up your fan base over time and get more YouTube video views for each video, then even lower numbers than that could be profitable for you. Each situation is unique though so there’s no one-size-fits-all answer here – just keep trying new things and focus on creating great content!
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              How to Increase YouTube Likes?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Increasing YouTube likes can be a difficult task if you don’t rather to buy high quality likes from Views4You. There are some steps you can take to make it easier, or read more to learn more about the ways to grow your YouTube channel on our blog section. <br />
                <span className='font-bold'>1. Create Quality Content:</span>
                To get more likes on your videos, the most important thing is to create content that people will like and share. Make sure your video has interesting subject matter, good visuals, and compelling audio. <br />
                <span className='font-bold'>2. Promote Your Video:</span>
                You should promote your video as much as possible in order to get more views and thus more likes. Utilize social media platforms such as Facebook, Twitter, and Instagram to share your video with friends and followers. Additionally, post links to other websites or videos related to what you’ve created so viewers have an easy way of finding it. <br />
                <span className='font-bold'>3. Interact with Viewers:</span>
                Responding to comments and messages will make viewers feel like they have a personal connection with you, which can be a great way to get more likes on your videos. Additionally, liking other people’s videos or commenting on them is an easy way to network with others in the YouTube community. <br />
                <span className='font-bold'>4. Collaborate With Other YouTubers:</span>
                If you reach out to other creators who have similar interests as you do, you can collaborate on content or do small promotions for each other’s channels. This helps both parties by exposing their videos to different audiences, resulting in potentially more views and likes. <br />
                <span className='font-bold'>5. Follow Trends:</span>
                Staying up-to-date with the latest trends can help boost the views and likes of your videos. People are more likely to watch a video that is current or related to something they’re passionate about. It also helps if the title of your video accurately reflects the content you are providing. Following these steps can help get more likes on your YouTube videos, but remember it may take time before you start seeing results. <br />
                Remain consistent in producing quality content and engaging with viewers and other YouTubers, and eventually you will be able to reap the rewards.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              What Country Do the Likes Come From?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                The likes you buy from Views4You reach your videos from all over the world, mainly from the USA. It’s better to mention about best time to post on YouTube when we’re talking about the audience, we have a post about that concern if you like to read it. And you could be able to know your target audience’s activation time on YouTube to post your content “on time”.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              How Many YouTube Likes Can You Buy?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Although the maximum limit is set on Views4You’s likes sales page, you can have more likes by making more than one purchase. There is no upper limit.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              How Many Likes Should You Buy?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                It’s all about how many views your video already has, and how more you want them to be. If you have 100,000 views, it will look more natural for this video to have 3,000 – 5,000 likes at least.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Are These Likes Real?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Certainly. Before you made your purchase, every YouTube like you buy from Views4You is regularly checked if they are consists of active, real Youtube accounts by our team of exper
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              How to Hide YouTube Likes and Dislikes?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                The good news is that there are several ways to hide your likes and dislikes on YouTube. To start, the most obvious and secure way to do this is to switch your account to a private or unlisted profile. This allows you to control who can view your activity and restricts video discovery view from non-subscribers. If you have already made your account public, you can still make it private by heading over to the ‘Privacy Settings’ in the account menu. Another option is to manually delete any liked or disliked videos from your activity feed which can be done through the ‘My Activity’ tab on YouTube. After clicking on each activity entry, click on ‘Remove’ and then confirm the removal. Additionally, you can go to the ‘History’ section of YouTube and disable the ‘Private Results’ toggle which prevents anyone who is logged into your account from seeing your video history. Finally, you can also just opt-out of YouTube liking and disliking altogether by disabling the feature completely in the account settings menu. This will prevent any future likes or dislikes from appearing on your profile but it will not hide existing likes and dislikes that have already been documented. For a more secure approach, use a combination of these methods to make sure no one can see your activity on YouTube.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              How to See /or Check YouTube Likes of Another YouTube Channel?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Unfortunately, YouTube does not reveal the likes of another channel or video to viewers. Likes are only visible to the channel owner and those with access to YouTube Studio. If you would like to see how many people have liked a video on someone else’s channel, there are two ways that you can do so: <br />

                1. Check out a third-party website such as SocialBlade, Vidooly, or Influencer Marketing Hub. These websites provide detailed analytics about content performance across social media platforms including YouTube. You can use these services to view the total number of likes for a specific YouTube video or even track monthly performance over time. <br />

                2. Ask the creator directly via comment, email, or private message if possible. Many creators are more than happy to share the likes on their videos.

                Regardless of which method you choose, remember that it’s important to respect a creator’s privacy and not to make any assumptions based on the numbers. Every viewer counts when it comes to YouTube SEO, regardless of whether they click “like” or not.
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