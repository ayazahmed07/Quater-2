"use client";
import Link from "next/link";

import React, { useState } from "react";

const Latestproduct = () => {
  const [activeLink, setActiveLink] = useState(""); // Track the currently active link

  // Function to handle link click
  const handleLinkClick = (link: string) => {
    setActiveLink(link); // Update the active link
  };

  return (
    <div className="px-5 md:px-10">
      <div className="mt-[75px] flex text-2xl md:text-3xl text-[#1A0B5B] justify-center font-bold text-center">
        Latest Products
      </div>
      <div className="flex flex-wrap mt-3 mb-7 text-[#1A0B5B] items-center justify-center gap-4 md:gap-9 text-sm md:text-base">
        <ul
          className={`cursor-pointer ${
            activeLink === "New Arrival" ? "text-red-800 underline" : "text-black "
          } hover:text-red-400`}
          onClick={() => handleLinkClick("New Arrival")}
        >
          New Arrival
        </ul>
        <ul
          className={`cursor-pointer ${
            activeLink === "Best Seller" ? "text-red-800 underline" : "text-black"
          } hover:text-red-400`}
          onClick={() => handleLinkClick("Best Seller")}
        >
          Best Seller
        </ul>
        <ul
          className={`cursor-pointer ${
            activeLink === "Featured" ? "text-red-800 underline" : "text-black"
          } hover:text-red-400`}
          onClick={() => handleLinkClick("Featured")}
        >
          {" "}
          <Link href="/#featured-products">Featured </Link>{" "}
        </ul>
        <ul
          className={`cursor-pointer ${
            activeLink === "Special Offer" ? "text-red-800 underline" : "text-black"
          } hover:text-red-400`}
          onClick={() => handleLinkClick("Special Offer")}
        >
          Special Offer
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Latestproduct;
