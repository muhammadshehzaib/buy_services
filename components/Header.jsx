"use client";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLargeMenuOpen, setLargeMenuOpen] = useState(false);

  return (
    
    <header className="flex items-center justify-around pt-20	 relative">gi
      <div className="flex items-center">
        <a href="#" className="w-3/5">
          <img
            src="https://views4you.com/wp-content/uploads/2022/08/logo@2x.png.webp"
            alt="Logo"
            className=""
          />
        </a>
      </div>

      <nav className="hidden md:flex space-x-4 bg-red-200 py-1 px-1 rounded-full menu-outer">
        <a
          href="#"
          className="text-black font-bold hover:bg-red-600 rounded-full py-3	px-4 hover:text-white"
        >
          Buy YouTube Views
        </a>
        <a
          href="#"
          className="text-black font-bold hover:bg-red-600 rounded-full py-3	px-4 hover:text-white"
        >
          Buy YouTube Subscribers
        </a>
        <a
          href="#"
          className="text-black font-bold hover:bg-red-600 rounded-full py-3	px-4 hover:text-white"
        >
          Buy YouTube Likes
        </a>
        <a
          href="#"
          className="text-black font-bold hover:bg-red-600 rounded-full py-3	px-4 hover:text-white"
        >
          Buy Instagram Followers
        </a>
      </nav>

      <div className="hidden md:flex items-center py-1 px-1 space-x-8 menu-outer">
        <div className="relative group">
          <button className="text-black font-bold focus:outline-none flex items-center pl-4 group-hover:text-red-600">
          <a href="#">
        <span class="inline-block hover:transition-transform duration-300 ease-in-out delay-100 transform group-hover:translate-y-1">T</span>
        <span class="inline-block hover:transition-transform duration-300 ease-in-out delay-200 transform group-hover:translate-y-1">o</span>
        <span class="inline-block hover:transition-transform duration-300 ease-in-out delay-300 transform group-hover:translate-y-1">o</span>
        <span class="inline-block hover:transition-transform duration-300 ease-in-out delay-400 transform group-hover:translate-y-1">l</span>
        <span class="inline-block hover:transition-transform duration-300 ease-in-out delay-400 transform group-hover:translate-y-1">s</span>
      </a>
            <svg
              className="-mr-1 h-5 w-5 text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="absolute top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block">
            <ul className="py-2">
              <li>
                <a href="#" className="block px-4 py-2 hover:text-red-600">
                  Instagram Story Viewer
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:text-red-600">
                  YouTube Money Calculator
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:text-red-600">
                  YouTube Title Generator
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:text-red-600">
                  Best Time to Post on YouTube
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:text-red-600">
                  YouTube Video Analytics
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:text-red-600">
                  YouTube Rank Tracker
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:text-red-600">
                  See All Tools
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative group">
          <button className="text-black font-bold focus:outline-none flex items-center group-hover:text-red-600">
          <a href="#">
        <span class="inline-block hover:transition-transform duration-300 ease-in-out delay-100 transform group-hover:translate-y-1">B</span>
        <span class="inline-block hover:transition-transform duration-300 ease-in-out delay-200 transform group-hover:translate-y-1">o</span>
        <span class="inline-block hover:transition-transform duration-300 ease-in-out delay-300 transform group-hover:translate-y-1">t</span>
        <span class="inline-block hover:transition-transform duration-300 ease-in-out delay-400 transform group-hover:translate-y-1">s</span>
      </a>
            <svg
              className="-mr-1 h-5 w-5 text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="absolute top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block">
            <ul className="py-2">
              <li>
                <a href="#" className="block px-4 py-2 hover:text-red-600">
                  Instagram Bot
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <button
        className="md:hidden btn btn-square btn-ghost text-[#ED2024]"
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-5 w-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      <button
        className="hidden md:inline btn btn-square btn-ghost"
        onClick={() => setLargeMenuOpen(!isLargeMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-11 w-11 rounded-lg stroke-current bg-neutral-100	p-2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button> 

      {isMenuOpen && (
        <div className="absolute top-20 right-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 md:hidden menu-outer sub-menu">
          <a href="#" className="text-black font-bold hover:text-red-600">
            Buy YouTube Views
          </a>
          <a href="#" className="text-black font-bold hover:text-red-600">
            Buy YouTube Subscribers
          </a>
          <a href="#" className="text-black font-bold hover:text-red-600">
            Buy YouTube Likes
          </a>
          <a href="#" className="text-black font-bold hover:text-red-600">
            Buy Instagram Followers
          </a>
          <div className="relative group">
            <button className="text-black font-bold focus:outline-none flex items-center group-hover:text-red-600">
              Tools
              <svg
                className="-mr-1 h-5 w-5 text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="absolute top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block">
              <ul className="py-2">
                <li>
                  <a href="#" className="block px-4 py-2 hover:text-red-600">
                    Instagram Story Viewer
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:text-red-600">
                    YouTube Money Calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:text-red-600">
                    YouTube Title Generator
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:text-red-600">
                    Best Time to Post on YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:text-red-600">
                    YouTube Video Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:text-red-600">
                    YouTube Rank Tracker
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:text-red-600">
                    See All Tools
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {isLargeMenuOpen && (
        <div className="absolute top-32 right-12 w-1/5 bg-white shadow-md py-4 flex flex-col items-center space-y-4 md:flex menu-outer">
          <a href="#" className="text-black font-bold hover:text-red-600">
            Buy YouTube Views
          </a>
          <a href="#" className="text-black font-bold hover:text-red-600">
            Buy YouTube Subscribers
          </a>
          <a href="#" className="text-black font-bold hover:text-red-600">
            Buy YouTube Likes
          </a>
          <a href="#" className="text-black font-bold hover:text-red-600">
            Buy Instagram Followers
          </a>
          <div className="relative group">
            <button className="text-black font-bold focus:outline-none flex items-center group-hover:text-red-600">
              Tools
              <svg
                className="-mr-1 h-5 w-5 text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="absolute top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block">
              <ul className="py-2">
                <li>
                  <a href="#" className="block px-4 py-2 hover:text-red-600">
                    Instagram Story Viewer
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:text-red-600">
                    YouTube Money Calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:text-red-600">
                    YouTube Title Generator
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:text-red-600">
                    Best Time to Post on YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:text-red-600">
                    YouTube Video Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:text-red-600">
                    YouTube Rank Tracker
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:text-red-600">
                    See All Tools
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
