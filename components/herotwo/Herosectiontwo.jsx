'use client'

import CampaignSection from "../campaignsection/CampaignSection";
import Footer from "../Footer";
import LineSection from "../linesection/LineSection";
import FAQ from '../faq/FAQ';
import { Newfaqs } from './Newdata';
import Tabs from '../herotwo/Tabs';
import NewSlider from "./NewSlider";



export default function Herosectiontwo() {
  return (
    <div className='items-center justify-between max-w-[1390px] px-5 mx-auto'>

      {/* views page  */}
    <Tabs />
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
      <div className='md:flex gap-11'>
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
      </div>
      {/* video sec  */}
      <div className="">
        <div className='text-center flex min-[1px]:pt-20 sm:pt-24 lg:pt-36 items-center video-sec flex-col'>
          <h2 className='text-[32px] font-bold lg:w-2/4 sm:3/4 mb-6'>The world&apos;s number one YouTube Views service!</h2>
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
      <NewSlider />
      {/* FAQ,S sec  */}
      <FAQ faqs={Newfaqs} />
      {/* reviews slider  */}
      <NewSlider />

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