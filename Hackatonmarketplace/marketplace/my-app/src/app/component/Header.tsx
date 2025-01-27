import React from "react";
import {
  FaChevronDown,
  FaEnvelopeOpen,
  FaHeart,
  FaPhoneAlt,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";


const Header = () => {
  return (
    <div className="font-thin flex flex-wrap text-white h-auto bg-[#7E33E0] px-4 py-2 lg:h-[44px] lg:gap-[480px] lg:px-16">
      {/* Left Section */}
      <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto lg:ml-0">
        <ul className="flex items-center gap-2 text-sm">
          <FaEnvelopeOpen />
          <span>ayazahmed824@gmail.com</span>
        </ul>
        <ul className="flex items-center gap-2 text-sm">
          <FaPhoneAlt />
          <span>+(92341)2366922</span>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap items-center gap-4 w-full justify-between lg:w-auto lg:justify-end">
        <ul className="flex items-center gap-1 text-sm">
          <span>English</span>
          <FaChevronDown />
        </ul>
        <ul className="flex items-center gap-1 text-sm">
          <span>USD</span>
          <FaChevronDown />
        </ul>
        <ul className="flex items-center gap-1 text-sm">
          <span>Login</span>
          <FaUser />
        </ul>
        <ul className="flex items-center gap-1 text-sm">
          <span>Wishlist</span>
          <FaHeart />
        </ul>
        <ul className="text-sm">
          <FaShoppingCart />
        </ul>
      </div>
    </div>
  );
};

export default Header;
