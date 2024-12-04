"use client";
import { useState } from "react";
import Link from "next/link";
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLargeMenuOpen, setLargeMenuOpen] = useState(false);

  return (

    <header className="flex sm:flex sm:items-start  lg:items-center justify-between ">
      <div className="lg:max-w-[1390px] xl:pt-20 sm:pt-14 min-[1px]:pt-10 lg:px-5 mx-auto sm:w-full  min-[1px]:w-full">
        <div className="items-center  relative w-full lg:hidden block xl:flex sm:w-full sm:flex min-[1px]:flex  min-[1px]:px-4 max-[639px]:px-4">
          <div className="flex lg:ml-0 items-center lg:w-3/12 sm:ml-7 min-[1px]:justify-center">
            <a href="http://localhost:3000/" className="w-full">
              <img
                src="https://views4you.com/wp-content/uploads/2022/08/logo@2x.png.webp"
                alt="Logo"
                className=""
              />
            </a>
          </div>

          <nav className="w-full	flex justify-end lg:mt-1.5 xl:mt-0">
            <div className="hidden hover:bg-[#ffffff] lg:flex bg-red-200 py-1 px-1 rounded-full menu-outer">
              <Link
                href="/views"
                className="text-black text-[.90rem] 2xl:text-[1rem] font-bold hover:bg-red-600 rounded-full py-2.5 px-3 hover:text-white"
                style={{ marginLeft: 0, marginRight: 0, transition: 'all 0.3s ease-in-out' }}
              >
                Buy YouTube Views
              </Link>
              <Link
                href="/subscribers"
                className="text-black text-[.90rem] 2xl:text-[1rem] font-bold hover:bg-red-600 rounded-full py-2.5 px-3 hover:text-white"
                style={{ marginLeft: 0, marginRight: 0, transition: 'all 0.3s ease-in-out' }}
              >
                Buy YouTube Subscribers
              </Link>
              <Link
                href="/likes"
                className="text-black text-[.90rem] 2xl:text-[1rem] font-bold hover:bg-red-600 rounded-full py-2.5 px-3 hover:text-white"
                style={{ marginLeft: 0, marginRight: 0, transition: 'all 0.3s ease-in-out' }}
              >
                Buy YouTube Likes
              </Link>
              <Link
                href="/insta"
                className="text-black text-[.90rem] 2xl:text-[1rem] font-bold hover:bg-red-600 rounded-full py-2.5 px-3 hover:text-white"
                style={{ marginLeft: 0, marginRight: 0, transition: 'all 0.3s ease-in-out' }}
              >
                Buy Instagram Followers
              </Link>
            </div>
          </nav>



          <div className="w-4/12 justify-end flex">
            <div className="hidden lg:flex items-center py-1 px-1 space-x-8 menu-outer">
              <div className="relative group">
                <button className="text-black font-bold focus:outline-none flex items-center pl-4 group-hover:text-red-600">
                  <a href="/tools">
                    <span className="inline-block hover:transition-transform duration-300 ease-in-out delay-100 transform group-hover:translate-y-1">T</span>
                    <span className="inline-block hover:transition-transform duration-300 ease-in-out delay-200 transform group-hover:translate-y-1">o</span>
                    <span className="inline-block hover:transition-transform duration-300 ease-in-out delay-300 transform group-hover:translate-y-1">o</span>
                    <span className="inline-block hover:transition-transform duration-300 ease-in-out delay-400 transform group-hover:translate-y-1">l</span>
                    <span className="inline-block hover:transition-transform duration-300 ease-in-out delay-400 transform group-hover:translate-y-1">s</span>
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
                <div className="absolute left-0 top-full hidden group-hover:block sm:z-10 w-80 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <ul className="py-2">
                    <li>
                      <a href="/insta-story" className="block px-4 py-2 hover:text-red-600 font-bold">
                        Instagram Story Viewer
                      </a>
                    </li>
                    <li>
                      <a href="/calculator" className="block px-4 py-2 hover:text-red-600 font-bold">
                        YouTube Money Calculator
                      </a>
                    </li>
                    <li>
                      <a href="/title" className="block px-4 py-2 hover:text-red-600 font-bold">
                        YouTube Title Generator
                      </a>
                    </li>
                    <li>
                      <a href="/time" className="block px-4 py-2 hover:text-red-600 font-bold">
                        Best Time to Post on YouTube
                      </a>
                    </li>
                    <li>
                      <a href="/analytics" className="block px-4 py-2 hover:text-red-600 font-bold">
                        YouTube Video Analytics
                      </a>
                    </li>
                    <li>
                      <a href="/tracker" className="block px-4 py-2 hover:text-red-600 font-bold">
                        YouTube Rank tracker
                      </a>
                    </li>
                    <li>
                      <a href="/tools" className="block px-4 py-2 hover:text-red-600 font-bold">
                        See All Tools
                      </a>
                    </li>
                  </ul>
                </div>
              </div>


              <div className="relative group">
                <button className="text-black font-bold focus:outline-none flex items-center group-hover:text-red-600">
                  <a href="/bots">
                    <span className="inline-block hover:transition-transform duration-300 ease-in-out delay-100 transform group-hover:translate-y-1">B</span>
                    <span className="inline-block hover:transition-transform duration-300 ease-in-out delay-200 transform group-hover:translate-y-1">o</span>
                    <span className="inline-block hover:transition-transform duration-300 ease-in-out delay-300 transform group-hover:translate-y-1">t</span>
                    <span className="inline-block hover:transition-transform duration-300 ease-in-out delay-400 transform group-hover:translate-y-1">s</span>
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
                <div className="absolute top-full left-0 z-10 w-80 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block">
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
              className="lg:hidden sm:mr-7 sm:pt-2.5 btn btn-square btn-ghost text-[#ED2024]"
              onClick={() => setMenuOpen(!isMenuOpen)} // Toggle state on click
            >
              {isMenuOpen ? (
                // Cross Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-11 w-11 stroke-current rounded-lg p-2.5 bg-neutral-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-11 w-11 stroke-current rounded-lg p-2.5 bg-neutral-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>


            <button
              className="hidden lg:inline btn btn-square btn-ghost"
              onClick={() => setLargeMenuOpen(!isLargeMenuOpen)} // Toggle state on click
            >
              {isLargeMenuOpen ? (
                // Cross Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-11 w-11 ml-2.5 rounded-lg stroke-current bg-neutral-100 p-2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-11 w-11 ml-2.5 rounded-lg stroke-current bg-neutral-100 p-2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>

            {isMenuOpen && (
              <div className="absolute sm:w-2/5 z-10 top-14 min-[1px]:w-10/12 rounded-3xl bg-white shadow-md py-4 flex flex-col items-center space-y-4 md:flex menu-outer">
                <Link href="/views" className="text-black font-bold hover:text-red-600">
                  Buy YouTube Views
                </Link>
                <Link href="/subscribers" className="text-black font-bold hover:text-red-600">
                  Buy YouTube Subscribers
                </Link>
                <Link href="/likes" className="text-black font-bold hover:text-red-600">
                  Buy YouTube Likes
                </Link>
                <Link href="/insta" className="text-black font-bold hover:text-red-600">
                  Buy Instagram Followers
                </Link>
                <div className="relative group">
                  <button className="text-black font-bold focus:outline-none flex items-center pl-4 group-hover:text-red-600">
                    <a href="/tools">
                      Tools
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
                  <div className="absolute top-full sm:right-0 min-[1px]:w-48 hidden group-hover:block sm:z-10 sm:w-80 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <ul className="py-2">
                      <li>
                        <a href="/insta-story" className="block px-4 py-2 hover:text-red-600 font-bold">
                          Instagram Story Viewer
                        </a>
                      </li>
                      <li>
                        <a href="/calculator" className="block px-4 py-2 hover:text-red-600 font-bold">
                          YouTube Money Calculator
                        </a>
                      </li>
                      <li>
                        <a href="/title" className="block px-4 py-2 hover:text-red-600 font-bold">
                          YouTube Title Generator
                        </a>
                      </li>
                      <li>
                        <a href="/time" className="block px-4 py-2 hover:text-red-600 font-bold">
                          Best Time to Post on YouTube
                        </a>
                      </li>
                      <li>
                        <a href="/analytics" className="block px-4 py-2 hover:text-red-600 font-bold">
                          YouTube Video Analytics
                        </a>
                      </li>
                      <li>
                        <a href="/tracker" className="block px-4 py-2 hover:text-red-600 font-bold">
                          YouTube Rank Tracker
                        </a>
                      </li>
                      <li>
                        <a href="/tools" className="block px-4 py-2 hover:text-red-600 font-bold">
                          See All Tools
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            )}
            {isLargeMenuOpen && (
              <div className="absolute sm:top-20 sm:rounded-3xl right-12 w-2/5 z-10 bg-white shadow-md py-4 flex flex-col items-center space-y-4 md:flex menu-outer">
                <Link href="/views" className="text-black font-bold hover:text-red-600">
                  Buy YouTube Views
                </Link>
                <Link href="/subscribers" className="text-black font-bold hover:text-red-600">
                  Buy YouTube Subscribers
                </Link>
                <Link href="/likes" className="text-black font-bold hover:text-red-600">
                  Buy YouTube Likes
                </Link>
                <Link href="/insta" className="text-black font-bold hover:text-red-600">
                  Buy Instagram Followers
                </Link>
                <div className="relative group">
                  <button className="text-black font-bold focus:outline-none flex items-center pl-4 group-hover:text-red-600">
                    <a href="/tools">
                      Tools
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
                  <div className="absolute left-0 top-full hidden group-hover:block sm:z-10 w-80 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <ul className="py-2">
                      <li>
                        <a href="/insta-story" className="block px-4 py-2 hover:text-red-600 font-bold">
                          Instagram Story Viewer
                        </a>
                      </li>
                      <li>
                        <a href="/calculator" className="block px-4 py-2 hover:text-red-600 font-bold">
                          YouTube Money Calculator
                        </a>
                      </li>
                      <li>
                        <a href="/title" className="block px-4 py-2 hover:text-red-600 font-bold">
                          YouTube Title Generator
                        </a>
                      </li>
                      <li>
                        <a href="/time" className="block px-4 py-2 hover:text-red-600 font-bold">
                          Best Time to Post on YouTube
                        </a>
                      </li>
                      <li>
                        <a href="/analytics" className="block px-4 py-2 hover:text-red-600 font-bold">
                          YouTube Video Analytics
                        </a>
                      </li>
                      <li>
                        <a href="/tracker" className="block px-4 py-2 hover:text-red-600 font-bold">
                          YouTube Rank Tracker
                        </a>
                      </li>
                      <li>
                        <a href="/tools" className="block px-4 py-2 hover:text-red-600 font-bold">
                          See All Tools
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* md-menu  */}


        <div className="lg:mx-7 lg:block lg:flex-wrap xl:hidden">
          <div className="flex items-center lg:w-full lg:justify-between">
            <a href="#" className="w-2/5">
              <img
                src="https://views4you.com/wp-content/uploads/2022/08/logo@2x.png.webp"
                alt="Logo"
                className="min-[1px]:hidden sm:hidden lg:block w-2/5"
              />
            </a>
            <div className="hidden lg:flex items-center py-1 px-1 space-x-8 menu-outer">
              <div className="relative group">
                <button className="text-black font-bold focus:outline-none flex items-center pl-4 group-hover:text-red-600">
                  <a href="/tools">
                    <span className="inline-block hover:transition-transform duration-300 ease-in-out delay-100 transform group-hover:translate-y-1">T</span>
                    <span className="inline-block hover:transition-transform duration-300 ease-in-out delay-200 transform group-hover:translate-y-1">o</span>
                    <span className="inline-block hover:transition-transform duration-300 ease-in-out delay-300 transform group-hover:translate-y-1">o</span>
                    <span className="inline-block hover:transition-transform duration-300 ease-in-out delay-400 transform group-hover:translate-y-1">l</span>
                    <span className="inline-block hover:transition-transform duration-300 ease-in-out delay-400 transform group-hover:translate-y-1">s</span>
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
                <div className="absolute top-9 right-10 z-10 w-80 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block">
                  <ul className="py-2">
                    <li>
                      <a href="/insta-story" className="block px-4 py-2 hover:text-red-600">
                        Instagram Story Viewer
                      </a>
                    </li>
                    <li>
                      <a href="/calculator" className="block px-4 py-2 hover:text-red-600">
                        YouTube Money Calculator
                      </a>
                    </li>
                    <li>
                      <a href="/title" className="block px-4 py-2 hover:text-red-600">
                        YouTube Title Generator
                      </a>
                    </li>
                    <li>
                      <a href="/time" className="block px-4 py-2 hover:text-red-600">
                        Best Time to Post on YouTube
                      </a>
                    </li>
                    <li>
                      <a href="/analytics" className="block px-4 py-2 hover:text-red-600">
                        YouTube Video Analytics
                      </a>
                    </li>
                    <li>
                      <a href="/tracker" className="block px-4 py-2 hover:text-red-600">
                        YouTube Rank Tracker
                      </a>
                    </li>
                    <li>
                      <a href="/tools" className="block px-4 py-2 hover:text-red-600">
                        See All Tools
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative group">
                <button className="text-black font-bold focus:outline-none flex items-center group-hover:text-red-600">
                  <a href="/bots">
                    <span className="inline-block hover:transition-transform duration-300 ease-in-out delay-100 transform group-hover:translate-y-1">B</span>
                    <span className="inline-block hover:transition-transform duration-300 ease-in-out delay-200 transform group-hover:translate-y-1">o</span>
                    <span className="inline-block hover:transition-transform duration-300 ease-in-out delay-300 transform group-hover:translate-y-1">t</span>
                    <span className="inline-block hover:transition-transform duration-300 ease-in-out delay-400 transform group-hover:translate-y-1">s</span>
                  </a>
                  <svg
                    className="-mr-1  h-5 w-5 text-black"
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
                <div className="absolute top-9 right-10 z-10 w-80 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block">
                  <ul className="py-2">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:text-red-600">
                        Instagram Bot
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                className="hidden lg:inline btn btn-square btn-ghost"
                onClick={() => setLargeMenuOpen(!isLargeMenuOpen)} // Toggle state on click
              >
                {isLargeMenuOpen ? (
                  // Cross Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-11 w-11 ml-2.5 rounded-lg stroke-current bg-neutral-100 p-2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  // Hamburger Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-11 w-11 ml-2.5 rounded-lg stroke-current bg-neutral-100 p-2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                )}
              </button>
              {isLargeMenuOpen && (
                <div className="absolute top-28 right-20 z-10 rounded-3xl lg:w-2/5 bg-white x shadow-md py-4 lg:flex flex-col items-center space-y-4 md:flex menu-outer">
                  <Link href="/views" className="text-black font-bold hover:text-red-600">
                    Buy YouTube Views
                  </Link>
                  <Link href="/subscribers" className="text-black font-bold hover:text-red-600">
                    Buy YouTube Subscribers
                  </Link>
                  <Link href="/likes" className="text-black font-bold hover:text-red-600">
                    Buy YouTube Likes
                  </Link>
                  <Link href="/insta" className="text-black font-bold hover:text-red-600">
                    Buy Instagram Followers
                  </Link>
                  <div className="relative group">
                    <button className="text-black font-bold focus:outline-none flex items-center group-hover:text-red-600">
                      <a href="/tools">Tools</a>
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
                    <div className="absolute top-9 right-10 z-10 w-80 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block">
                      <ul className="py-2">
                        <li>
                          <a href="/insta-story" className="block px-4 py-2 hover:text-red-600">
                            Instagram Story Viewer
                          </a>
                        </li>
                        <li>
                          <a href="/calculator" className="block px-4 py-2 hover:text-red-600">
                            YouTube Money Calculator
                          </a>
                        </li>
                        <li>
                          <a href="/title" className="block px-4 py-2 hover:text-red-600">
                            YouTube Title Generator
                          </a>
                        </li>
                        <li>
                          <a href="/time" className="block px-4 py-2 hover:text-red-600">
                            Best Time to Post on YouTube
                          </a>
                        </li>
                        <li>
                          <a href="/analytics" className="block px-4 py-2 hover:text-red-600">
                            YouTube Video Analytics
                          </a>
                        </li>
                        <li>
                          <a href="/tracker" className="block px-4 py-2 hover:text-red-600">
                            YouTube Rank tracker
                          </a>
                        </li>
                        <li>
                          <a href="/tools" className="block px-4 py-2 hover:text-red-600">
                            See All Tools
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <nav className="w-full	lg:flex lg:justify-center mr-7 lg:mt-1.5 xl:mt-0">
            <div className="hidden lg:flex bg-red-200 py-1 px-1 rounded-full menu-outer">
              <Link
                href="/views"
                className="text-black text-base font-bold hover:bg-red-600 rounded-full py-2.5 px-3 hover:text-white"
                style={{ marginLeft: 0, marginRight: 0 }}
              >
                Buy YouTube Views
              </Link>
              <Link
                href="/subscribers"
                className="text-black text-base font-bold hover:bg-red-600 rounded-full py-2.5 px-3 hover:text-white"
                style={{ marginLeft: 0, marginRight: 0 }}
              >
                Buy YouTube Subscribers
              </Link>
              <Link
                href="/likes"
                className="text-black text-base font-bold hover:bg-red-600 rounded-full py-2.5 px-3 hover:text-white"
                style={{ marginLeft: 0, marginRight: 0 }}
              >
                Buy YouTube Likes
              </Link>
              <Link
                href="/insta"
                className="text-black text-base font-bold hover:bg-red-600 rounded-full py-2.5 px-3 hover:text-white"
                style={{ marginLeft: 0, marginRight: 0 }}
              >
                Buy Instagram Followers
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
