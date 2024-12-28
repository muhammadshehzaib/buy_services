import React from "react";
import Footer from "../Footer";
import FAQ from '../faq/FAQ';  
import { faqs } from './faqData';  
export default function Generator() {
  return (
    <div className="max-w-[1390px] px-5 mx-auto">
      <div className="txt sm:mt-20 min-[1px]:mt-12 flex flex-col items-center">
        <h2 className="md:text-[32px] lg:w-[75%] uppercase sm:text-3xl min-[1px]:text-[24px] font-bold text-center sm:mb-5 min-[1px]:mb-6 ">
          YouTube Title Generator (AI-powered for Free)
        </h2>
        <p className="text-center text-[18px] lg:w-3/5 ">
          Views4You YouTube Title Generator is the only tool you need if you are searching for a quick and simple way to generate titles for your YouTube videos. Using artificial intelligence and all of our hearts, we developed this tool to come up with hundreds of possible titles for your content. Don’t forget, this AI-powered title generator tool is completely free!
        </p>
        <div className="sm:flex justify-between mt-5 full input-sec w-3/4">
          <div className="sm:w-[47%] min-[1px]:mb-5 sm:mb-0">
            <label htmlFor="Keyword" className="font-bold text-[18px] ">Keyword</label>
            <input
              id="Keyword"
              type="text"
              placeholder="Food Recipies"
              className="bg-transparent py-5 pl-8 w-full border-2 border-black dark:border-white rounded-full pr-32"
            />
          </div>
          <div className="sm:w-[47%]">
            <label htmlFor="Tone" className="font-bold text-[18px] ">Tone</label>
            <select id="Tone" className="bg-transparent py-5 pl-8 w-full border-2 border-black dark:border-white rounded-full pr-32">
              <option value="" disabled selected>
                Creative
              </option>
              <option value="Option 1">Excited</option>
              <option value="Option 2">Funny</option>
              <option value="Option 3">Witty</option>
            </select>
          </div>
        </div>
        <div className="w-3/4 mt-5">
          <label htmlFor="Des" className="font-bold text-[18px] ">Detailed Description</label>
          <textarea name="" id="Des" className="bg-transparent py-5 pl-8 w-full border-2 border-black dark:border-white rounded-2xl pr-32 h-36" placeholder="Easy Ways to Make"></textarea>
        </div>
        <a
          href=""
          className="mt-10 px-14 py-4 rounded-full min-[1px]:text-center min-[1px]:mt-5 text-[18px] bg-[#ed2024] text-white font-bold hover:text-[#ed2024] hover:border-red-600 hover:bg-white border-2 border-transparent"
        >
          Create
        </a>
      </div>

      {/* main-sec  */}
      <div className="main mt-20 lg:flex pb-24">
        <div className="fst-sec lg:border-r-2 lg:border-[#E6E6E6] lg:pr-16 lg:w-full">
          <div className="rounded-2xl mb-10 bg-[#F4F6F8] py-4 px-8">
            <h2 className='text-[22px] text-center sm:mb-5 min-[1px]:mb-5 font-bold'>Keynote</h2>
            <p className='mb-5 text-[18px] text-center'>
              Instagram Story Viewer is a free tool that you can view stories of active accounts anonymously. It allows you to view any accounts’ stories privately by just entering the name of that person or page without showing your personal information. If you are curious about a person and you want to check their stories without letting them know, this Instagram story tool is perfect for you!  Additionally, if you’re looking to make your own stories more visible or enhance your profile’s appeal, you might want to consider the option to buy Instagram likes.
            </p>
          </div>
          <h2 className='text-[32px] font-bold sm:mb-8 min-[1px]:mb-8 min-[1px]:leading-9 sm:leading-normal '>How to Utilize AI-powered Free YouTube Video Title Generator of Views4You?</h2>
          <p className="mb-5 ">This free title generator tool for YouTube videos allows flexible usage. You can benefit from this online generator for all of your content. It is possible to adjust your needs with an AI-powered tool. You can use the tool for searching options to find specific terms or look through other categories for unique ideas. Further, the Title Generator is perfect for crafting remarkable titles for your short-form videos. Thus, you can ensure that even your YouTube Shorts stand out on the platform and attract the attention of viewers with the proper words. Now, it is time to learn how to create the ideal title for your content on YouTube.</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/GFw4LdApC9k?si=nXmzWMjbdIolwXe-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="w-full"></iframe>
          <h2 className='text-[32px] mt-8 font-bold sm:mb-8 min-[1px]:mb-8 min-[1px]:leading-9 sm:leading-normal '>Enter Your Main Keyword to Get the Flawless Title</h2>
          <p className='mb-5 text-[18px] '>You can start by deciding what is your main keyword. After specifying your keyword, you can use it to find the perfect title for your video content. According to SEO guidelines, your primary keyword should be in the title. Selecting a title that is optimized for search engines is essential. Therefore, you can guarantee that your video reaches its target audience and appears highly in search results. Your video can rank higher in search results if you choose relevant keywords carefully, as we’ll demonstrate with Views4You’s free Title Generator for YouTube. Your keyword will be automatically included in the title options since improving Google’s ranking with keywords is a fundamental SEO technique. I’ll use an example to show you how to use our title generator for a YouTube video. </p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/6T7K0hPncZw?si=2sV16fJd4a9h26wB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="w-full"></iframe>
          <p className="pt-5 ">Assume that “travel blog” is our selected keyword.</p>
          <h2 className='text-[32px] font-bold min-[1px]:mt-8 min-[1px]:leading-9 sm:leading-normal '>Select a Tone that Will Work Best for Your Audience</h2>
          <p className='mb-5 text-[18px] '>Choosing a tone that fits with our YouTube niche comes next as soon as we’ve determined our keyword. We’ll choose “encouraging” from the nine different tones since it matches the style and energy of our content. This choice will enable us to better craft our title so that it will appeal to our target audience. Taking into consideration our video content, which is in the travel blog niche, an “excited” tone can also come up with better title results. It can give our title energy and excitement that draws viewers and excites them. It is possible to pique the users’ interest and increase their desire to engage with our content by choosing this tone.</p>
          <h2 className='text-[32px] font-bold  min-[1px]:mt-8 min-[1px]:leading-9 sm:leading-normal '>Give an Eye-catching Description for Your Video Content</h2>
          <p className=''>
            After selecting your tone, you need to write your video description. I’ll write two different descriptions to demonstrate the difference between them.
          </p> <br />
          <p className=''>
            <span className='font-bold text-[18px]'>First, let’s write a shorter description:</span> <br />Today, we will experience vibrant flamenco, and enjoy delightful tapas in Barcelona. Yet, the length of your video description can vary according to the content and your preferences.
          </p> <br />
          <p className=''>
            <span className='font-bold text-[18px]'>Here is a long example: </span> <br /> I changed the tone to “excited” and wrote a detailed description: In today’s vlog, we wander Shibuya’s lively streets. We wanted to share our funny culinary adventure. We visit Asakusa’s medieval streets, experiencing street foods and discovering old temples. We finished our tour in Akihabara, which is known for games and anime.
          </p> <br />
          <p className=''>
            <span className='font-bold text-[18px]'>Click “Create” and Get Your Splendid Title</span> <br /> You are now ready to move on after writing all of the essential information, which are your keyword, tone, and short or long description of the related video content. At this point, simply click the “create” button to generate several YouTube video titles. This allows you to experiment with numerous title combinations and styles. As a result, you can discover the most appropriate and appealing headings for your content.
          </p> <br />
          <p className=''>
            <span className='font-bold text-[18px]'>Choose the Perfect Title for Your Video Content on YouTube</span> <br /> After you click the “create” button on the YouTube title generator, you will see a variety of generated results. This is your opportunity to examine and choose the best title for your video. Each option will be a unique blend of your ideas, suited to your target audience. Take your time deciding which title best expresses the essence of your content. Once you’ve selected a title you desire, click on it and copy the code to the related box on YouTube. Make sure to provide a link to Views4You’s AI-powered free YouTube Title Generator website so that others can easily find and use it! If you have any questions or want to give feedback, please contact us.
          </p>
        </div>
        <div className="scnd-sec min-[1px]:mt-8 lg:mt-0 lg:ml-8 lg:border-b-2 lg:border-[#E6E6E6] sticky top-0 lg:pb-16 h-fit">
          {/* 1st-part  */}
          <div className='bg-[#F4F6F8]  rounded-3xl'>
            <h2 className='bg-black text-white py-3 px-7 text-[18px] font-bold w-fit rounded-tl-3xl'>Free Instagram Tools</h2>
            <div className="li-sec mt-6 ">
              <div className="li-sec mt-6 sm:px-20 pb-10 min-[1px]:px-12">
                <a href="" className="mb-7 text-black underline text-[18px] block">YouTube Money Calculator</a>
                <a href="" className="mb-7 text-black underline text-[18px] block">YouTube Thumbnail Downloader</a>
                <a href="" className="mb-7 text-black underline text-[18px] block">YouTube Video Analytics</a>
                <a href="" className="mb-7 text-black underline text-[18px] block">YouTube Restrictions Checker</a>
                <a href="" className="mb-7 text-black underline text-[18px] block">YouTube Subtitles Downloader</a>
                <a href="" className="mb-7 text-black underline text-[18px] block">YouTube Rank Tracker</a>
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
                  How to Utilize AI-powered Free YouTube Video Title Generator of Views4You?
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* faqs  */}
      <FAQ faqs={faqs} />

      <Footer />
    </div>
  );
}