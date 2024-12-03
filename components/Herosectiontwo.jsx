'use client'

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CampaignSection from "./campaignsection/CampaignSection";
import Footer from "./Footer";
import LineSection from "./linesection/LineSection";


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


export default function Herosectiontwo() {
  return (
    <div className='items-center justify-between max-w-[1390px] px-5 mx-auto'>

      {/* views page  */}

      {/* views-sec-tabs  */}
      <div className="flex flex-col max-w-[1390px] px-5 mx-auto  md:flex-row justify-center lg:pt-16 lg:pb-20 md:pt-9 md:pb-9 sm:pt-10 sm:pb-10 min-[1px]:pb-10 min-[1px]:pt-8 max-[639px]:pb-0 max-[639px]:pt-8">
        <div className="w-full  md:mb-0 ">
          <h1 className="font-montserrat min-[320px]:text-[30px] 2xl:w-full lg:text-6xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-800 mb-4">
            Buy YouTube Views
          </h1>
          <span className="font-montserrat sm:mb-4 min-[1px]:mb-4 md:mb-0 font-bold bg-[#ed2024] text-white sm:text-[1.25rem] md:text-[1.75rem] leading-[2rem] inline-block px-5 py-3 rounded-[.75rem]">
            Instantly
          </span>
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
      <CampaignSection
      title="All In One YouTube Views Campaign"
      price="$45.00"
      description="With Views4You's all-inclusive package, you can buy YouTube subscribers, and views simultaneously. Moreover, you may order YouTube likes service and add it to the package for the best price."
      views="5000"
      likes="1000"
    />
    <LineSection />
      {/* Views4You’s Guarantee  */}
    <Guranted />
      {/* <div className='md:flex gap-11'>
        <div className='main md:w-2/4'>
          <div className='xl:p-10 min-[1px]:p-5'>
            <h1 className="font-montserrat 2xl:w-full sm:text-[32px] min-[1px]:text-[23px] font-bold text-gray-800 mb-4">
              Views4You’s Guarantee When You Buy YouTube Views
            </h1>
            <p className='text-[18px]'>
              We know that you put in a lot of hours to produce amazing content on YouTube. Views4You works to give your content the popularity you deserve. With our services, your superb content is crowned with the reward of hundreds of thousands of views, just select how many you want! <br />
              To grow their YouTube subscribers and likes daily with Views4You, our customers buy YouTube views for every video they produce.
            </p>
          </div>
          <div className='bg-[#F4F6F8] xl:p-10 min-[1px]:p-5 rounded-2xl'>
            <img
              src="https://views4you.com/wp-content/themes/views4you_theme/img/list-icon.svg"
              alt="OK Logo"
              width={100}
              height={100}
              className=" w-28 h-28 "
            />
            <h1 className="font-montserrat 2xl:w-full sm:text-[32px] min-[1px]:text-[23px] font-bold text-gray-800 mb-4">
              Views4You’s Guarantee When You Buy YouTube Views
            </h1>
            <p className='text-[18px]'>
              After selecting the number of views you want to buy, you will be asked to enter the link of your video. Our system will automatically check your channel and will suggest a suitable country for your channel on the next screen. In this way, you will get a boost in views from viewers that are in alignment with your target audience.
            </p>
          </div>
          <div className='bg-[#F4F6F8] mt-8 xl:p-10 min-[1px]:p-5 rounded-2xl'>
            <img
              src="https://views4you.com/wp-content/themes/views4you_theme/img/list-icon.svg"
              alt="OK Logo"
              width={100}
              height={100}
              className=" w-28 h-28 "
            />
            <h1 className="font-montserrat 2xl:w-full sm:text-[32px] min-[1px]:text-[23px] font-bold text-gray-800 mb-4">
              Views4You’s Guarantee When You Buy YouTube Views
            </h1>
            <p className='text-[18px]'>
              One side of the world is day meanwhile the other side is night, but this does not affect our service. Our team is available 24/7 to answer your questions about our YouTube growth services, no matter what country you live in.
            </p>
          </div>
        </div>
        <div className='scnd-main md:w-2/4'>
          <div className='bg-[#F4F6F8] sm:mt-8 md:mt-0 xl:p-10 min-[1px]:p-5 rounded-2xl'>
            <img
              src="https://views4you.com/wp-content/themes/views4you_theme/img/list-icon.svg"
              alt="OK Logo"
              width={100}
              height={100}
              className=" w-28 h-28 "
            />
            <h1 className="font-montserrat 2xl:w-full sm:text-[32px] min-[1px]:text-[23px] font-bold text-gray-800 mb-4">
              Views4You’s Guarantee When You Buy YouTube Views
            </h1>
            <p className='text-[18px]'>
              One side of the world is day meanwhile the other side is night, but this does not affect our service. Our team is available 24/7 to answer your questions about our YouTube growth services, no matter what country you live in.
            </p>
          </div>
          <div className='bg-[#F4F6F8] mt-8 xl:p-10 min-[1px]:p-5 rounded-2xl'>
            <img
              src="https://views4you.com/wp-content/themes/views4you_theme/img/list-icon.svg"
              alt="OK Logo"
              width={100}
              height={100}
              className="  w-28 h-28 "
            />
            <h1 className="font-montserrat 2xl:w-full sm:text-[32px] min-[1px]:text-[23px] font-bold text-gray-800 mb-4">
              Views4You’s Guarantee When You Buy YouTube Views
            </h1>
            <p className='text-[18px]'>
              One side of the world is day meanwhile the other side is night, but this does not affect our service. Our team is available 24/7 to answer your questions about our YouTube growth services, no matter what country you live in.
            </p>
          </div>
          <div className='bg-[#F4F6F8] mt-8 xl:p-10 min-[1px]:p-5 rounded-2xl'>
            <img
              src="https://views4you.com/wp-content/themes/views4you_theme/img/list-icon.svg"
              alt="OK Logo"
              className=" w-28 h-28 "
            />
            <h1 className="font-montserrat 2xl:w-full sm:text-[32px] min-[1px]:text-[23px] font-bold text-gray-800 mb-4">
              Views4You’s Guarantee When You Buy YouTube Views
            </h1>
            <p className='text-[18px]'>
              One side of the world is day meanwhile the other side is night, but this does not affect our service. Our team is available 24/7 to answer your questions about our YouTube growth services, no matter what country you live in.
            </p>
          </div>
        </div>
      </div> */}
      {/* video sec  */}
      <div className="">
        <div className='text-center flex min-[1px]:pt-20 sm:pt-24 lg:pt-36 items-center video-sec flex-col'>
          <h2 className='text-[32px] font-bold lg:w-2/4 sm:3/4 mb-6'>The world's number one YouTube Views service!</h2>
          <p className='text-[18px] w-3/4'>Why wait? Your views are sure to go up, but only if you start to buy YouTube views from us today. Increase your view count and watch them shoot up quickly and safely.</p>
          <p className='flex justify-center pt-5 w-full'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/nC5bR-OCi90?si=4s_sU0oiqV7IfHH1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </p>
        </div>
      </div>
      {/* stepssec  */}
      <div className='main-step-sec'>
        {/* step-one  */}
        <div className="step-two w-full md:mt-32 sm:mt-24 min-[1px]:mt-24 lg:flex">
          <div className="img-sec sm:w-full xl:w-2/4 flex justify-center items-center relative">
            <img
              src="https://views4you.com/wp-content/uploads/2022/11/Youtube-views-growing-video-optimized.gif"
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
              Why Do You Need To Buy YouTube Views?
            </h3>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-7 sm:leading-9 text-black">
              True, YouTube views may not always be a good measure of video quality or engagement. But, they remain a vital factor in the success of your video’s performance. The number of people who have watched your videos depict a sense of importance about its popularity and level of interest to your visitors! <br />
              The number of views a video has, for most visitors, automatically indicates that it is valuable and quality. Regardless of whether they eventually like the content or not, the number of views makes videos seem important, period! The more times a user watches your video, the higher your chances of engaging them and the more likely they are to consider what else you might have to offer them. If you continue to keep them interested, they’ll keep coming back, which means more subscribers and more views for your channel!
            </p>
          </div>
        </div>


        {/* step two  */}
        <div className="step-two w-full md:mt-36 sm:mb-32 sm:mt-24 min-[1px]:mt-24 lg:flex lg:flex-row min-[1px]:flex min-[1px]:flex-col-reverse">
          <div className="text-sec sm:w-full xl:w-2/4">
            <h3 className="text-[32px] sm:text-[36px] md:text-[40px] pb-4 font-[550]">
              Numbers, Engagement, and Reputation; Views4You
            </h3>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-7 sm:leading-9 text-black">
              What is your expectation? Do you just want numerical superiority? Do you want your videos to reach more viewers? Or do you want your company’s ad to look good online? What about making money from YouTube? Numbers are everything in today’s digital world. Buying views makes a quick and immediate contribution to your numerical superiority, making you seem like a legit channel for viewers to flock to. <br />
              What number of views will satisfy you? Would 100,000 views look good on a video promoting your company? Views4You can provide this for you. Thanks to the quality views we send to your videos, we’re able to activate the YouTube algorithm and make the system work for you. <br />
              With a little boost from our YouTube growth service, you naturally get the chance to reach more viewers. If you want to earn money from YouTube, Views4You gives you a chance to achieve that.
            </p>
          </div>
          <div className="img-sec relative sm:w-full xl:w-2/4 flex justify-center items-center">
            {/* First Image Inside the Second */}
            <img
              src="https://views4you.com/wp-content/uploads/2022/08/image-2.jpg"
              alt="YouTube Content"
              className="absolute left-[50%] w-[27%] 2xl:h-[80%] xl:h-[70%] min-[1px]:h-4/5 rounded-xl "
              style={{ transform: "matrix(1, .6, 0, .89, 0, 0)" }}
            />
            {/* Second Image (Frame) */}
            <img
              src="https://views4you.com/wp-content/themes/views4you_theme/img/device-3.png"
              alt="Device Frame"
              className="relative w-[80%]"
            />
          </div>

        </div>


        {/* step three  */}
        <div className="step-two w-full md:mt-36 sm:mt-24 min-[1px]:mt-24 lg:flex ">
          <div className="img-sec relative sm:w-full xl:w-2/4 flex justify-center items-center">
            {/* First Image Inside the Second */}
            <img
              src="https://views4you.com/wp-content/uploads/2022/08/youtube-logo-2.png"
              alt="YouTube Content"
              className="absolute left-[50%] w-[27%] 2xl:h-[80%] xl:h-[70%] min-[1px]:h-4/5 rounded-xl "
              style={{ transform: "matrix(1, .6, 0, .89, 0, 0)" }}
            />
            {/* Second Image (Frame) */}
            <img
              src="https://views4you.com/wp-content/themes/views4you_theme/img/device-3.png"
              alt="Device Frame"
              className="relative w-[80%]"
            />
          </div>
          <div className="text-sec sm:w-full xl:w-2/4">
            <h3 className="text-[32px] sm:text-[36px] md:text-[40px] pb-4 font-[550]">
              An Excellent Strategy To Uplift Your YouTube Channel
            </h3>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-7 sm:leading-9 text-black">
              Organic views are great, but if you’re in need, it is possible to buy YouTube views and buy <span className='font-bold text-[#ed2024]'>YouTube watch hours</span> that will provide you with just as much influence in way shorter time. <br />
              The majority of YouTube visitors never question where these numbers come from. They accept them as quality engagement without thinking too deeply about their origin or authenticity. This means the views you buy can serve as an effective support base for your channel, giving it the credibility visitors need to see to convince them to become subscribers. Whether you are trying to make the next video stand out against the large competition or want to grow your channel’s subscriber base, buying views on YouTube may be an excellent strategy.
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
            Have questions about how to purchase YouTube views or do you want to know how to boost YouTube views on your YouTube channel? We’re here to answer all your questions, so let's get started!
          </p>
        </div>
        <div className='accordian w-full'>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Why buy YouTube views from Views4you?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Since the start of our company, we have always ensured that every one of your needs is met with unrivaled quality.
                As a manual team who manually checks all products for authenticity before they are delivered to you – there’s no
                better option than us! We are the only company that offers a complete package of products for publishers,
                including high-quality views for YouTube ads and high retention views. Views4You care about our customer
                satisfaction, so our customer support team provides solutions on the payment process a few hours after you make
                the purchase. We also care about your pocket; our services come at rock-bottom prices so that you can afford them!
                We offer a refill package money-back guarantee on all of our products, so there’s nothing you can lose when you
                give us a try. Other packages we have include premium-quality views for 1000 views or less!
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Do Views4You's YouTube views affect YouTube ranking?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                We know that many factors affect YouTube ranking. When these elements come together, YouTube automatically sends you more viewers. The title of your video, your video description, and the thumbnail pictures you use for your videos are some factors that directly affect your ranking. In addition to these factors, buying high-quality views can also be among the factors that affect your ranking positively.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Does it take a long time, and how do YouTube views increase?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                First, you go to our YouTube views service and send your video link to our system. Right after you buy views for your YouTube video, you can see the incoming views on the video statistics page within an average of 10 minutes! For slow viewings, the daily rate is around 2000 views on average, but for immediate viewings, this can be up to 10,000+ views per day. The reflection of the views just below your YouTube video may take up to three hours, depending on YouTube.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Is it legal to buy YouTube Views?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Yes, of course, buying YouTube views is legal in all countries. However, buying views are not in line with YouTube’s terms. YouTube works every day to make this and similar services impossible. Views4You, on the other hand, is trying to do the service it provides in line with YouTube’s terms to fulfill the demands of its customers. As long as you buy real video plays from real YouTube accounts, the number of views of your YouTube videos will continue to grow organically.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Why do people need to buy real YouTube views?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Standing out from the crowd on YouTube is not easy, and it’s even more challenging to appear on the search results when you have a small following or no one. That’s why purchasing YouTube views increases your Social Media engagement; as a result, your YouTube video views impact your ranking on YouTube’s search engine.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Can I choose the YouTube views location?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Yes! Of course, you can. We currently send you views from the USA, England, Spain, Italy, Japan, Korea, Brazil, Indonesia, India, and Israel. We are adding new countries to this list depending on the demands of the target audience you want. After clicking the buy button, you will be directed to the page where you’ll enter your video link. After that, our system will automatically determine your video’s language and suggest that country to you. We offer many services at affordable prices to help you get more views for every video content you share. Similarly, you can buy YouTube subscribers, or YouTube likes and also, you can buy YouTube lives stream views in the same method but on different pages.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Are YouTube views real when people come from Views4you to watch my YouTube videos?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Yes! We guarantee that the views come from real people and regularly optimize our systems accordingly. You can confirm that the views you buy from us are real. How? Once the views start coming to your video, look at your statistics page and observe where the views are coming from. We have an efficient screening process through which we filter out any spam accounts that have yet to show the right amount of credibility and legitimacy on YouTube. Again, you can observe the authenticity of views yourself since you will also start to receive active subscribers automatically to your channel, not just views.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              How to grow my brand with YouTube views?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Views4You will not only get you more views, but you’ll also be able to create other strategies that will lead to more exposure and brand awareness. Using our specific customized techniques on our YouTube growth services, you’ll learn how to ensure that your target audience watches your video content. We’re here to help you gain more exposure on the YouTube platform to grow your social media presence and become a leading influencer! Ready? Just read on, choose your package, and let’s get started!
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              1 million YouTube views is how much in costs, if yes is it possible to buy it?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Views4you is the best place to get as many views as you like without any limits. We will help you increase your views to up to 1 million YouTube video views and more, if you like, with our service!
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Can YouTube views decrease after I make the purchase?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Purchased YouTube views will stay on your channel, but if it ever happens that YouTube views go down, we’ll make it up for free for 60 days!
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              How long will my videos be watched?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                We cannot guarantee exactly, but it should be a minimum of 1 minute of watch time on average.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              There is a country restriction on my video. Does this affect your work?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                If your channel has a country restriction, unfortunately, we cannot offer you our YouTube views service. We recommend using other promotional strategies to get more views for your YouTube channel.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              How many views should I buy?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Your YouTube promotion decision is totally up to you and what you want for your YouTube channel. But remember that the more views you buy, the higher your chances of getting the popularity you want on YouTube.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              What is the difference between your fast views and slow views service?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                The difference between buying the Fast or Slow YouTube views service depends only on how quickly you want your video to get views.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Are YouTube views fake an option to buy?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Yes. Of course, you can buy fake views for your YouTube videos. But if you can buy real YouTube views from Views4You, why would you need a fake one?
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Does buying YouTube views have an impact on visibility in search engines like Google?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                If you paid attention while searching on Google, you must have noticed that YouTube includes the most watched videos on the first pages. If the YouTube views you purchased have a high-quality source (Views4You gets its traffic from within YouTube), it will positively affect both YouTube SEO and search engines. Don’t forget that the YouTube views you receive from Views4You come from only real accounts bringing more YouTube views real and quickly to your network.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              Will others know that I bought views?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                The great thing about purchasing YouTube views from Views4You is that they make your video views look authentic. Our packages also work to bring more organic traffic since when users see popular content such as yours, it’s hard not to check in!
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
              How can I trust companies that sell YouTube views services, like Views4You offers?
            </div>
            <div className="collapse-content">
              <p className="text-[18px]">
                Anytime you are thinking about trusting a company with YouTube views services, you should ask yourself a few questions: How long has this company been in business? Do they have any positive reviews? What do other people say about their services? Once you have looked into these things, you can make an informed decision about whether or not you want to trust the company. In the case of Views4You, we have been in business for years and have countless satisfied customers. We also have a five-star rating on Trustpilot, so you can be confident that we are a company you can trust. When it comes to promoting your YouTube business or product, Views4You is a clear choice.
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