import Image from "next/image";

function HeroSection() {
  return (
      <div className="flex flex-col max-w-[1390px] px-5 mx-auto  md:flex-row justify-center lg:py-16 md:pt-9 md:pb-0 sm:pt-8 sm:pb-0 min-[1px]:pb-0 min-[1px]:pt-8 max-[639px]:pb-0 max-[639px]:pt-8">
        <div className="w-full  md:mb-0 sm:w-full ">
          <h1 className="font-montserrat min-[320px]:text-[30px] 2xl:w-2/5 lg:text-6xl sm:text-4xl md:text-4xl font-bold text-gray-800 mb-4">
            Organic YouTube Growth Service
          </h1>
          <span className="font-montserrat font-bold bg-[#ed2024] text-white sm:text-[1.25rem] md:text-[1.75rem] leading-[2rem] inline-block px-5 py-3 rounded-[.75rem]">
            Views4You
          </span>
          <p className="font-montserrat block md:my-5 mx-0 md:py-3 sm:my-0 min-[1px]:my-0 max-[639px]:my-0 lg:w-3/5 text-lg text-#050708">
            Lights, camera, and action! You're live on the best social media 
            channel for views—YouTube. But you may require some 
            backup to quickly gain a huge amount of views in a short time.
            Of course, this is where the highly-recommended YouTube
            growth service,Views4You, comes on the stage!
          </p>
          <div className="flex items-center">
            <a
              href="#"
              className="font-montserrat bg-black text-white text-lg font-bold py-6	 px-14 rounded-full hover:bg-gray-800 transition"
            >
              Offers
            </a>
            <a href="#">
              <img
                src="https://views4you.com/wp-content/uploads/2022/08/Trustpilot-Stars.svg"
                alt="Trustpilot"
                width={128}
                height={32}
                className="h-32"
              />
            </a>
          </div>
          <div className="grid grid-cols-4 items-center w-7/12">
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
          className="ml-10"
        />
        <img
          src="https://views4you.com/wp-content/uploads/2023/01/ok_logo1.png.webp"
          alt="OK Logo"
          width={100}
          height={100}
          className="mx-10"
        />
        <img
          src="https://views4you.com/wp-content/uploads/2023/01/NDTV.png.webp"
          alt="NDTV"
          width={100}
          height={100}
          className="mx-10"
        />
      </div>
        </div>
      </div>
  );
}

export default HeroSection;
