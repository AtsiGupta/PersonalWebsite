import React from "react";
import MilkAndMochaImage from "../assets/milkandmocha.webp";

const HiddenPage = () => {
  return (
    <div className="h-screen bg-pink-100 flex flex-col items-center justify-center overflow-hidden">
      {/* Image */}
      <img
        src={MilkAndMochaImage}
        alt="Milk and Mocha"
        className="w-1/3 mb-2"
      />

      {/* Buttons */}
      <div className="flex space-x-4 mb-4">
        <a
          href="https://custom-connections-game.vercel.app/lstf0XCdgaQMcC8NWkPm"
          className="btn bg-pink-200 text-pink-700 hover:bg-pink-300 hover:text-pink-800 font-semibold px-4 py-2 rounded-lg flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          🎄 Christmas Game 1
        </a>
        <a
          href="https://custom-connections-game.vercel.app/mo3zAOeYShEvyHxFlqsJ"
          className="btn bg-pink-200 text-pink-700 hover:bg-pink-300 hover:text-pink-800 font-semibold px-4 py-2 rounded-lg flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          🎁 Christmas Game 2
        </a>
      </div>

      {/* Text */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-pink-700">I love you, Sahej &lt;3</h1>
        <p className="mt-2 text-lg text-pink-600">
          you found your special baby message!
        </p>
      </div>

      {/* Animated Hearts */}
      <div className="flex space-x-2 mt-6">
        <div className="animate-ping h-10 w-10 bg-pink-500 rounded-full"></div>
        <div className="animate-ping h-10 w-10 bg-pink-400 rounded-full"></div>
        <div className="animate-ping h-10 w-10 bg-pink-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default HiddenPage;
