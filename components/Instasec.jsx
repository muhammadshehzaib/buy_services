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
        { image1:"Stepsection../public/images/double-quotes.png",     
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


export default function Instasec() {
  return (
    <div className='items-center justify-between max-w-[1390px] px-5 mx-auto'>
   
             {/* insta page  */}

         {/* insta-sec-tabs  */}
         <div className="flex flex-col max-w-[1390px] px-5 mx-auto  md:flex-row justify-center lg:pt-16 lg:pb-20 md:pt-9 md:pb-9 sm:pt-10 sm:pb-10 min-[1px]:pb-10 min-[1px]:pt-8 max-[639px]:pb-0 max-[639px]:pt-8">
    <div className="w-full  md:mb-0 ">
    <h1 className="font-montserrat min-[320px]:text-[30px] 2xl:w-full lg:text-6xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-800 mb-4">
      Buy Instagram Followers <span className='font-bold bg-[#ed2024] text-white p-3 rounded-2xl text-[36px]'>Fast</span>
      </h1>
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
 
      {/* video sec  */}
      <div className="">
      <div className='text-center flex min-[1px]:pt-20 sm:pt-24 lg:pt-36 items-center video-sec flex-col'>
        <h2 className='text-[32px] font-bold lg:w-2/4 sm:3/4 mb-6'>Buy Instagram Followers - Real, Instant & Cheap Delivery</h2>
        <p className='text-[18px] w-3/4'>Your real followers are just a few clicks away! Buy Instagram followers from Views4You to reach the target audience you deserve. Sit back and watch how your new followers serve as social proof of your being an influencer.</p>
        <p className='flex justify-center pt-5 w-full'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/476knXrOF7E?si=qnaehgPgQlpnJBit" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </p>
      </div>
      </div>
      {/* stepssec  */}
      <div className='main-step-sec'>
      {/* step-one  */}
      <div className="step-two w-full md:mt-32 sm:mt-24 min-[1px]:mt-24 lg:flex">
  <div className="img-sec sm:w-full xl:w-2/4 flex justify-center items-center relative">
    <img
      src="https://views4you.com/wp-content/uploads/2023/09/buy-instagram-followers-faq-1-1.png.webp"
      alt=""
      className="mbl-img lg:w-[63%] sm:w-[40%] sm:top-[25px] min-[1px]:w-[55%] min-[1px]:top-[25px] h-2/5 relative rounded-xl 2xl:top-[4%] lg:top-[2%] xl:top-[5%]"
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
    Why Do You Need to Buy More Instagram Followers?
    </h3>
    <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-7 sm:leading-9 text-black">
    If you want to become one of the famous Instagram influencers, you should have strong followers following your profile who like, view, and comment on your content. This is the rule of being visible on social media. But where to find them? You need to make your voice heard around the ever-changing world. Especially if you are a newbie, it can take a tremendous effort to make yourself a place on the platform because everyone has found what they want so far while you’re still trying out ways to build your community. Even if you are an experienced Instagram user, you may need a little boost to increase your followers. Lucky for you, you’ve got Views4You from now on! Thanks to our authentic followers, your Instagram profile’s engagement rate and visibility will increase as soon as you buy Instagram likes. Also, you can boost your Instagram views on your posts to get seen on the Explore Page.
    </p>
  </div>
</div>


          {/* step two  */}
          <div className="step-two w-full md:mt-36 sm:mb-32 sm:mt-24 min-[1px]:mt-24 lg:flex lg:flex-row min-[1px]:flex min-[1px]:flex-col-reverse">
  <div className="text-sec sm:w-full xl:w-2/4">
    <h3 className="text-[32px] sm:text-[36px] md:text-[40px] pb-4 font-[550]">
    Can the Instagram Algorithm Detect My Activity?
    </h3>
    <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-7 sm:leading-9 text-black">
    The Instagram algorithm is highly developed to detect unknown activities such as sudden fake Instagram followers on accounts. Guess what? Views4You delivers only real Instagram followers within the natural flow which no algorithm detects as fake followers. Thanks to personalized and professional techniques, the way in which we use your account, it won’t be suspected or banned. We always maintain the authenticity and integrity of your Instagram account.
    </p>
  </div>
  <div className="img-sec sm:w-full xl:w-2/4 flex justify-center items-center relative">
    <img
      src="https://views4you.com/wp-content/uploads/2023/09/buy-instagram-followers-faq-2-1.png.webp"
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
    src="https://views4you.com/wp-content/uploads/2023/09/buy-instagram-followers-faq-3-1.png.webp"
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
   
User Friendly Interface to Buy Instagram Followers
    </h3>
    <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-7 sm:leading-9 text-black">
    You can buy Instagram followers from Views4You with a few clicks. All you have to do is provide your Instagram ID URL and active email account. No password or sensitive information needed. Yes, you read that right!After you choose from View4You’s affordable Instagram followers packages, we’ll send you a verified e-mail to inform you about your purchase details and the delivery time. That’s it. You don’t have to fill out long pages to purchase Instagram followers. It is so easy-peasy with Views4You. 
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
    Do you still have questions about buying Instagram followers? We have all the answers. So, find yourself a seat, and let's dive in! Also, reach us anytime to ask more via contact@views4you.com
    </p>
  </div>
  <div className='accordian w-full'>
  <div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
  How Does Views4You Guarantee the Privacy and Security of My Sensitive Data?
  </div>
  <div className="collapse-content">
    <p className="text-[18px]">
    We give importance to our customers’ safety and security. We need just your Instagram username and e-mail address to buy new Instagram followers. Besides, our payment system is protected with a 256-bit SSL encrypted code. This means that purchases cannot be faked or payment details cannot be stolen by third parties.
    </p>
  </div>
</div>
<div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
  How Can I Check if They Are Real Instagram Followers or Not?
  </div>
  <div className="collapse-content">
    <p className="text-[18px]">
    We’re planning to offer you free Instagram followers soon, where you’ll be able to check the authenticity of the process. Still, when you decide to buy some from Views4You, we’ll verify your orders, and then you’ll be able to monitor the delivery process.
    </p>
  </div>
</div>

<div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
  Does Views4You Provide any Guarantee or Refund Policy after Buying Instagram Followers?
  </div>
  <div className="collapse-content">
    <p className="text-[18px]">
    Yes, we have both a money-back guarantee and a refill policy if deemed necessary. If you are not pleased with our high-quality followers, and do not receive them after the payment due to some unpreventable cases, we’ll review your order and refund the purchase. Reach out to our customer support team to ask more about the policies.
    </p>
  </div>
</div>
<div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
  Does Views4You Cater any Additional Services to Enhance My Instagram Engagement Rate?
  </div>
  <div className="collapse-content">
    <p className="text-[18px]">
    Yes, we offer a premium Instagram likes and views service for your social media account. As a matter of fact, we have a deal for you. You can get both high-quality followers, likes, and views at the same time with our “Ready-to-Go Instagram Followers Campaign”. Don’t miss this opportunity! Also, you can buy various services for your other social media accounts, such as YouTube, Telegram, and TikTok. Go visit our pages now!
    </p>
  </div>
</div>
<div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
  How Many Followers Can I Buy for My Instagram Account? 
  </div>
  <div className="collapse-content">
    <p className="text-[18px]">
    You can buy tens of thousands of IG followers to boost your profile. We offer packages from 100 to 100.000. If you don’t know how many real active followers you need, you can consult us to decide on your required follower count.
    </p>
  </div>
</div>
<div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
  Will the Purchased Instagram Followers Like or Comment on My Posts?
  </div>
  <div className="collapse-content">
    <p className="text-[18px]">
    Yes, they can like or comment on your Instagram stories, posts, and reels if they find it valuable. Because, since they are real and active accounts, it’s their choice to interact with your content. If you want your content to be liked and viewed, Views4You offers you the best packages to buy for your Instagram growth.
    </p>
  </div>
</div>
<div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
  Is the Purchased Instagram Followers Permanent?
  </div>
  <div className="collapse-content">
    <p className="text-[18px]">
    Yes, Insta followers are completely permanent. If you notice any drop in the follower count after you made your purchase, you should get in touch with us to take advantage of our refill policy.
    </p>
  </div>
</div>
<div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
  Can I Buy Followers for a Freshly Created Instagram Account?
  </div>
  <div className="collapse-content">
    <p className="text-[18px]">
    Yes, certainly. If you have created your Instagram account, there will be no obstacle that prevents you from buying Instagram followers.
    </p>
  </div>
</div>
<div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
  How Does Buying Followers from Views4You Benefit My Social Media Presence??
  </div>
  <div className="collapse-content">
    <p className="text-[18px]">
    You can be the next Instagram influencer. What’s next? Thanks to our cheap but high-quality followers, your Instagram account can have the perfect community that you needed after all this time. With the increased engagement rate and popularity, you will shortly have a strong social media presence.
    </p>
  </div>
</div>
<div className="collapse collapse-plus mb-5 p-8 bg-white group" style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}>
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title sm:text-[24px] min-[1px]:text-[18px] font-bold group-hover:text-red-500">
  How Can I Reach a High Follower Count after I Buy Instagram Followers in 2023?
  </div>
  <div className="collapse-content">
    <p className="text-[18px]">
    Of course, buying cheap Instagram followers comes in handy. However, you need to apply some organic strategies to support your page, especially after you buy Instagram followers. No one should only depend on the buying process. This is social media, it changes. Views4You will always be here to boost your Instagram page, but this is not all you can do to enhance your profile. If you want to continue this growth, you need to interact with your audience, regularly post creative, authentic, and high-quality content as well. Even use hashtags, the simple but really one of the most effective methods. Then, we’ll handle the rest that leads more organic followers to your account.
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
            <input type="text" className='bg-[#F4F6F8] px-8 py-5 w-full mb-5 rounded-full' placeholder='Your Name*'/><br />
            <input type="text" className='bg-[#F4F6F8] px-8 py-5 w-full rounded-full' placeholder='Order Email*'/>
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
  )
};