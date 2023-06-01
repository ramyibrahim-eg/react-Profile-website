import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="container mx-auto px-4 my-16 flex flex-col justify-center items-center p-40">
      <span className="text-lg relative hover:text-designColor duration-300 group cursor-pointer">
        <Link to="/">Go Home</Link>
      </span>
      <div className="w-full flex justify-center flex-wrap">
        <div className=" text-center bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne w-[20rem] m-8">
          <div className="px-6 py-4 rounded card">
            <h1 className="font-bold mb-2">ECONOMY</h1>
            <div className="flex items-center justify-center">
              <span className="text-6xl">100</span>
              <span className="text-2xl -mt-8">EGB /mo</span>
            </div>
            <ul>
              <li className="text-lg">1 Domain free</li>
              <li className="text-lg pt-1">1 Website</li>
              <li className="text-lg pt-1">1 GB Storage</li>
              <li className="text-lg pt-1">1 Databases</li>
              <li className="text-lg pt-1">24/7 support</li>
            </ul>

            <a
              href="https://merchant.kashier.io/ar/paypage/PP-175312901?mode=live"
              target="_blank"
            >
              <button className="bg-transparent text-white-700 font-semibold py-3 px-4 border border-white-500 rounded mt-4 w-full">
                Buy Now
              </button>
            </a>
          </div>
        </div>
        <div className=" text-center bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne w-[20rem] m-8">
          <div className="px-6 py-4 rounded card">
            <h1 className="font-bold mb-2">DELUXE</h1>
            <div className="flex items-center justify-center">
              <span className="text-6xl">180</span>
              <span className="text-2xl -mt-8">EGB /mo</span>
            </div>
            <ul>
              <li className="text-lg">1 Domain free</li>
              <li className="text-lg pt-1">2 Website</li>
              <li className="text-lg pt-1">2 GB Storage</li>
              <li className="text-lg pt-1">2 Databases</li>
              <li className="text-lg pt-1">24/7 support</li>
            </ul>

            <a
              href="https://merchant.kashier.io/ar/paypage/PP-175312902?mode=live"
              target="_blank"
            >
              <button className="bg-transparent text-white-700 font-semibold py-3 px-4 border border-white-500 rounded mt-4 w-full">
                Buy Now
              </button>
            </a>
          </div>
        </div>
        <div className=" text-center bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne w-[20rem] m-8">
          <div className="px-6 py-4 rounded card">
            <h1 className="font-bold mb-2">ULTIMATE</h1>
            <div className="flex items-center justify-center">
              <span className="text-6xl">290</span>
              <span className="text-2xl -mt-8">EGB /mo</span>
            </div>
            <ul>
              <li className="text-lg">1 Domain free</li>
              <li className="text-lg pt-1">3 Website</li>
              <li className="text-lg pt-1">3 GB Storage</li>
              <li className="text-lg pt-1">3 Databases</li>
              <li className="text-lg pt-1">24/7 support</li>
            </ul>

            <a
              href="https://merchant.kashier.io/ar/paypage/PP-175312903?mode=live"
              target="_blank"
            >
              <button className="bg-transparent text-white-700 font-semibold py-3 px-4 border border-white-500 rounded mt-4 w-full">
                Buy Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
