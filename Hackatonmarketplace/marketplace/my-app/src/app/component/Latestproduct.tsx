"use client";
import Link from "next/link";

import React, { useState } from "react";

const Latestproduct = () => {
  return (
    <div className="px-5 md:px-10">
      <div className="mt-[75px] flex text-2xl md:text-3xl text-[#1A0B5B] justify-center font-bold text-center">
        Latest Products
      </div>
      <div className="flex flex-wrap mt-3 mb-7 text-[#1A0B5B] items-center justify-center gap-4 md:gap-8 text-sm md:text-base">
        <ul className="cursor-pointer">New Arrival</ul>
        <ul className="cursor-pinter">Best Seller</ul>
        <ul className="cursor-pointer">
          {" "}
          <Link href="/#featured-products">Featured </Link>{" "}
        </ul>
        <ul className="cursor-pointer">Special Offer</ul>
      </div>
      <div></div>
    </div>
  );
};

export default Latestproduct;
