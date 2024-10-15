import React from "react";

function Card() {
  return (
    <div className="bg-white py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Buy YouTube Views, Subscribers, And Likes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl">
        {/* YouTube Views Card */}
        <div className="bg-white border rounded-lg shadow-lg p-6 flex flex-col mx-auto max-w-xs sm:max-w-sm lg:max-w-md">
          <h3 className="flex items-center text-xl font-bold text-gray-800 mb-4">
            <img
              src="https://views4you.com/wp-content/uploads/2022/08/icon-eye-red.svg"
              alt=""
              className="mr-2"
            />
            YouTube Views
          </h3>
          <p className="text-gray-600 mb-4 flex-grow">
            It's the views that will help you boost your YouTube channel. They'll give your videos significant recognition in the YouTube algorithm, leading you to more organic views soon, and this steady growth for your channel will be a long run. Unlike many other YouTube growth agencies, we have one genuine package.
          </p>
          <button className="flex items-center justify-center bg-red-600 text-white font-bold py-2 px-4 rounded mb-2">
            Buy YouTube views
          </button>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Starting at <span className="font-bold text-red-600">$4.80</span>
            </p>
            <div className="flex">
              <span className="text-red-500">★</span>
              <span className="text-red-500">★</span>
              <span className="text-red-500">★</span>
              <span className="text-red-500">★</span>
              <span className="text-red-300">★</span>
            </div>
          </div>
        </div>

        {/* YouTube Likes Card */}
        <div className="bg-white border rounded-lg shadow-lg p-6 flex flex-col mx-auto max-w-xs sm:max-w-sm lg:max-w-md">
          <h3 className="flex items-center text-xl font-bold text-gray-800 mb-4">
            <img
              src="https://views4you.com/wp-content/uploads/2022/08/icon-like-red.svg"
              alt=""
              className="mr-2"
            />
            YouTube Likes
          </h3>
          <p className="text-gray-600 mb-4 flex-grow">
            When YouTube visitors see that your videos have a lot of likes, they will be more likely to watch them. Video views are the most valued ads revenue, so the likes will help you to grow your channel quicker. At Views4You, we offer the best prices and the highest quality YouTube Likes service in the industry.
          </p>
          <button className="flex items-center justify-center bg-red-600 text-white font-bold py-2 px-4 rounded mb-2">
            Buy YouTube Likes
          </button>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Starting at <span className="font-bold text-red-600">$3.50</span>
            </p>
            <div className="flex">
              <span className="text-red-500">★</span>
              <span className="text-red-500">★</span>
              <span className="text-red-500">★</span>
              <span className="text-red-500">★</span>
              <span className="text-red-300">★</span>
            </div>
          </div>
        </div>

        {/* YouTube Subscribers Card */}
        <div className="bg-white border rounded-lg shadow-lg p-6 flex flex-col mx-auto max-w-xs sm:max-w-sm lg:max-w-md col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="flex items-center text-xl font-bold text-gray-800 mb-4">
            <img
              src="https://views4you.com/wp-content/uploads/2022/08/icon-user-red.svg"
              alt=""
              className="mr-2"
            />
            YouTube Subscribers
          </h3>
          <p className="text-gray-600 mb-4 flex-grow">
            Subscribers are the main drivers of YouTube's algorithm. Once you have a good number of YouTube subscribers, it means you're someone whose video contents are worth following. The best part about this service is that it is affordable and organically provided by real users.
          </p>
          <button className="flex items-center justify-center bg-red-600 text-white font-bold py-2 px-4 rounded mb-2">
            Buy YouTube Subscribers
          </button>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Starting at <span className="font-bold text-red-600">$3.90</span>
            </p>
            <div className="flex">
              <span className="text-red-500">★</span>
              <span className="text-red-500">★</span>
              <span className="text-red-500">★</span>
              <span className="text-red-500">★</span>
              <span className="text-red-300">★</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
