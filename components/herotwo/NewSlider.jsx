
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

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
  


export default function NewSlider() {
  return (
    <div className="pt-16">
      <h2 className="font-bold text-[32px] mb-16">Reviews</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {testimonials.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-12 w-full">
              {slide.testimonials.map((testimonial, idx) => (
                <div
                  key={`${index}-${idx}`}
                  className="testimonial-item mb-5 xl:pr-12 sm:pr-7 border-r-2"
                >
                  {/* Double Quotes Image */}
                  <Image
                    src={testimonial.image1}
                    alt="Double Quotes"
                    width={40}
                    height={40}
                    className="mb-4"
                  />
                  {/* Testimonial Quote */}
                  <blockquote className="text-left xl:text-xl font-bold sm:h-4/6 sm:mb-0 min-[1px]:mb-12 w-auto">
                    {testimonial.quote}
                  </blockquote>
                  {/* User Info */}
                  <div className="flex items-center gap-8">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="text-left text-[18px]">
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p>{testimonial.followers} followers</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
