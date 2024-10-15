import Image from "next/image";

function HeroSection() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 mr-11">
          <h1 className="font-montserrat text-6xl font-bold text-gray-800 mb-4">
            Organic YouTube Growth Service
          </h1>
          <span className="font-montserrat font-bold bg-[#ed2024] text-white text-[1.75rem] leading-[2rem] inline-block px-5 py-3 rounded-[.75rem]">
            Views4You
          </span>
          <p className="font-montserrat block my-5 mx-0 py-3 text-[1.15rem] text-gray-600">
            Lights, camera, and action! You're live on the best social media
            channel for views—YouTube. But you may require some backup to
            quickly gain a huge amount of views in a short time. Of course,
            this is where the highly-recommended YouTube growth service,
            Views4You, comes on the stage!
          </p>
          <div className="flex items-center">
            <a
              href="#"
              className="font-montserrat bg-black text-white text-lg font-bold py-4 px-11 rounded-full hover:bg-gray-800 transition"
            >
              Offers
            </a>
            <a href="#">
              <Image
                src="./images/Trustpilot-Stars.svg"
                alt="Trustpilot"
                width={128}
                height={32}
                className="h-32"
              />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative">
          <img
            src="/path/to/phone_image.png" 
            alt="YouTube growth service"
            layout="responsive"
            width={500}
            height={500}
            className="w-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-row items-start justify-start px-8 mt-0 mx-32">
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
  );
}

export default HeroSection;
