import React from "react";
import Image from "next/image";

const Promotional = () => {
  return (
    <div className="bg-[#F2F0FF] py-10 px-5">
      {/* Outer Container */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-5">
        {/* Lamp Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/Images/lamp.jpg"
            height={245}
            width={245}
            alt="Promotional"
            className=""
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/3 flex flex-col gap-4 text-center md:text-left items-center md:items-start">
          <p className="text-pink-500 text-sm font-semibold">
            Best Furniture for Your Castle...
          </p>
          <h1 className="text-[30px] font-bold leading-tight">
            New Furniture Collection Trends in 2020
          </h1>
          <p className="text-gray-500 text-sm">
            This site is currently under development - Ayaz Ahmed
          </p>
          <button className="bg-pink-500 text-white px-6 py-2 hover:bg-pink-600 transition">
            Shop Now
          </button>
        </div>

        {/* Sofa Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/Images/sofapromotional.jpg"
            height={400}
            width={450}
            alt="Sofa"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Promotional;
