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
    <div className="font-thin flex text-white h-[44px] bg-[#7E33E0] gap-[300px] ">
      <div className="ml-[180px] flex gap-6 items-center">
        <ul className="flex items-center gap-2">
          <FaEnvelopeOpen /> ayazahmed824@gmail.com
        </ul>

        <ul className="flex items-center gap-2">
          {" "}
          <FaPhoneAlt /> +(92341)2366922
        </ul>
      </div>

      <div className="flex gap-8 items-center">
        <ul className="flex items-center gap-1">
          {" "}
          English <FaChevronDown />
        </ul>
        <ul className="flex items-center gap-1">
          USD <FaChevronDown />
        </ul>
        <ul className="flex items-center gap-1">
          Login <FaUser />{" "}
        </ul>
        <ul className="flex items-center gap-1">
          Wishlist <FaHeart />{" "}
        </ul>
        <ul>
          {" "}
          <FaShoppingCart />{" "}
        </ul>
      </div>
    </div>
  );
};

export default Header;
