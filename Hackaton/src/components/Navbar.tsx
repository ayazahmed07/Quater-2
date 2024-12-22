import React from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "./ui/input";


const Navbar = () => {
  return (
    <div>
      <div className="mt-2 font-thin flex text-black h-[40px] bg-White gap-[120px] item-center ">
        <div className="ml-[180px] flex gap-6 items-center">
          <ul className="flex items-center gap-2 font-extrabold text-3xl">
            Hekto
          </ul>
        </div>

        <div className="flex gap-4 items-center">
          <ul className="text-red-400">Home</ul>
          <ul>Pages </ul>
          <ul>Products</ul>
          <ul>Blog</ul>
          <ul>Shop</ul>
          <ul>Contact</ul>

<p className="ml-[120px]"> <Input/ > </p>
          
          <div className="h-[24px] w-[24px] justify-center items-center flex bg-pink-500 text-white ">
            <FaSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
