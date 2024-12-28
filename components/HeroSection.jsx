import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="flex flex-col max-w-[1390px] px-5 mx-auto md:flex-row justify-center lg:pt-16 lg:pb-20 md:pt-9 md:pb-9 sm:pt-10 sm:pb-10 min-[1px]:pb-10 min-[1px]:pt-8 max-[639px]:pb-0 max-[639px]:pt-8">
      <div className="w-full md:mb-0">
        <h1 className=" text-black  font-montserrat min-[320px]:text-[30px] 2xl:w-full lg:text-6xl sm:text-4xl md:text-[2.75rem] font-bold mb-4">
          Organic YouTube Growth Service
        </h1>
        <span className=" font-montserrat sm:mb-4 min-[1px]:mb-4 md:mb-0 font-bold bg-[#ed2024] text-white sm:text-[1.25rem] md:text-[1.75rem] leading-[2rem] inline-block px-5 py-3 rounded-[.75rem]">
          Views4You
        </span>
        <p className="font-montserrat block md:my-5 mx-0 md:py-3 sm:my-0 min-[1px]:my-0 max-[639px]:my-0 lg:w-full text-lg text-black ">
          Lights, camera, and action! You&apos;re live on the best social media
          channel for views—YouTube. But you may require some
          backup to quickly gain a huge amount of views in a short time.
          Of course, this is where the highly-recommended YouTube
          growth service, Views4You, comes on the stage!
        </p>
        <div className="flex min-[1px]:my-5 sm:my-0 items-center">
          <a
            href="#card-sec"
            className="font-montserrat bg-black  text-white text-lg font-bold py-6 mr-10 px-16 rounded-full hover:bg-gray-800 dark:hover:bg-gray-300 transition"
          >
            Offers
          </a>
          <a href="#">
            <img
              src="https://views4you.com/wp-content/uploads/2022/08/Trustpilot-Stars.svg"
              alt="Trustpilot"
              className="w-[70%]"
            />
          </a>
        </div>
        <div className="grid grid-cols-4 md:mt-14 items-center sm:w-4/5 min-[1px]:w-full">
          <img
            src="https://views4you.com/wp-content/uploads/2023/01/3-WTKR-1.png.webp"
            alt="WTKR"
            width={100}
            height={100}
          />
          <img
            src="https://views4you.com/wp-content/uploads/2023/01/orlando.png.webp"
            alt="Orlando"
            width={100}
            height={100}
            className="sm:ml-10 min-[1px]:ml-5"
          />
          <img
            src="https://views4you.com/wp-content/uploads/2023/01/ok_logo1.png.webp"
            alt="OK Logo"
            width={100}
            height={100}
            className="mx-10 sm:w-2/5 min-[1px]:w-3/5"
          />
          <img
            src="https://views4you.com/wp-content/uploads/2023/01/NDTV.png.webp"
            alt="NDTV"
            width={100}
            height={100}
            className="mx-10 sm:w-[50%] min-[1px]:w-3/4"
          />
        </div>
      </div>
      <div className="w-full flex justify-center img">
        <img
          src="https://views4you.com/wp-content/uploads/2022/08/image-8.png.webp"
          alt="Organic YouTube Growth Service"
        />
      </div>
    </div>
  );
}

export default HeroSection;
