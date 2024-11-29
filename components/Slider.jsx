"use client";
import React, { useState } from "react";

// JSON data
const jsonData = {
  items: [
    {
      id: 1,
      name: "YouTube",
      src: "https://views4you.com/wp-content/uploads/2023/07/icon-youtube.svg",
      submenu: [
        {
          label: "Instagram Story Viewer",
          link: "/insta-story"
        },
        {
          label: "YouTube Money Calculator",
          link: "/calculator"
        },
        {
          label: "YouTube Title Generator",
          link: "/title"
        },
        {
          label: "Best Time to Post on YouTube",
          link: "/time"
        },
        {
          label: "YouTube Video Analytics",
          link: "/analytics"
        },
        {
          label: "YouTube Rank Tracker",
          link: "/TrackerTracker"
        },
        {
          label: "See All Tools",
          link: "/tools"
        }
      ]
    },
    {
      id: 2,
      name: "Instagram",
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
    },
    {
      id: 3,
      name: "TikTok",
      src: "https://views4you.com/wp-content/uploads/2023/07/icon-tiktok.svg"
    },
    {
      id: 4,
      name: "YouTube",
      src: "https://views4you.com/wp-content/uploads/2023/07/icon-youtube.svg",
      submenu: [
        {
          label: "Instagram Story Viewer",
          link: "/insta-story"
        },
        {
          label: "YouTube Money Calculator",
          link: "/calculator"
        },
        {
          label: "YouTube Title Generator",
          link: "/title"
        },
        {
          label: "Best Time to Post on YouTube",
          link: "/time"
        },
        {
          label: "YouTube Video Analytics",
          link: "/analytics"
        },
        {
          label: "YouTube Rank Tracker",
          link: "/TrackerTracker"
        },
        {
          label: "See All Tools",
          link: "/tools"
        }
      ]
    },
    {
      id: 5,
      name: "Instagram",
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
    },
    {
      id: 5,
      name: "Instagram",
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
    }
  ]
};

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 2; // Number of items to show per slide

  const moveSlides = (direction) => {
    let newIndex = currentIndex + direction;
    const maxIndex = Math.ceil(jsonData.items.length / itemsPerSlide) - 1;

    if (newIndex < 0) {
      newIndex = maxIndex; // Go to the last slide
    } else if (newIndex > maxIndex) {
      newIndex = 0; // Go back to the first slide
    }

    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel relative w-full overflow-visible border-y-2 mt-10 py-5">
      {/* Carousel container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${jsonData.items.length * (100 / itemsPerSlide)}%`,
        }}
      >
        {jsonData.items.map((item) => (
          <div
            key={item.id}
            className="w-[20%] flex-shrink-0 flex items-center justify-center px-4 group relative"
          >
            <div className="flex items-center gap-4">
              {/* Add submenu only for YouTube */}
              {item.name === "YouTube" && item.submenu ? (
              <div className="relative">
              <img
                src={item.src}
                alt={item.name}
                className="w-10 object-contain cursor-pointer"
              />
              {/* Submenu */}
              <div
                className="absolute left-0 top-full hidden group-hover:block sm:z-50 w-80 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg"
                style={{
                  position: "absolute",
                  zIndex: 9999,
                  transform: "translateY(10px)",
                }}
              >
                <ul className="py-2">
                  {item.submenu.map((submenuItem, index) => (
                    <li key={index}>
                      <a
                        href={submenuItem.link}
                        className="block px-4 py-2 hover:text-red-600 font-bold"
                      >
                        {submenuItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
              ) : (
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-10 object-contain cursor-pointer"
                />
              )}
              <span className="font-bold mt-2">{item.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => moveSlides(-1)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-[#ED2024] text-[20px] z-10"
      >
        ←
      </button>
      <button
        onClick={() => moveSlides(1)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-[#ED2024] text-[20px] z-10"
      >
        →
      </button>
    </div>
  );
}

export default Slider;
