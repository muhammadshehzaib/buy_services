"use client";
import React, { useState } from 'react';

function Slider() {
  // Array of images and their names (you can add more here)
  const items = [
    { id: 1, name: 'YouTube', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg' },
    { id: 2, name: 'Instagram', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' },
    { id: 3, name: 'TikTok', src: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg' },
    { id: 3, name: 'TikTok', src: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg' },
    { id: 5, name: 'Spotify', src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' },
    { id: 6, name: 'Facebook', src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' }, // Add more here
    { id: 7, name: 'LinkedIn', src: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' }
    // Add more images as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 2;

  // Update the currentIndex when clicking next or previous
  const moveSlides = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
      newIndex = items.length - itemsPerSlide; // Loop to last set of items
    } else if (newIndex >= items.length) {
      newIndex = 0; // Loop back to the first set
    }
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel w-full relative border-y-2	mt-10 py-3">
      {/* Carousel container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
      >
        {/* Render each item */}
        {items.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-1/2 px-4">
            <div className="flex items-center justify-center flex-col">
              <img src={item.src} alt={item.name} className="w-16 h-16" />
              <span className="font-bold mt-2">{item.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <button onClick={() => moveSlides(-1)} className="btn btn-circle">
          ❮
        </button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button onClick={() => moveSlides(1)} className="btn btn-circle">
          ❯
        </button>
      </div>
    </div>
  );
}

export default Slider;
