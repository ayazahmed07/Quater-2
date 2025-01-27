"use client";
import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Input } from "./ui/input";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state for mobile
  const [activeLink, setActiveLink] = useState(""); // Track the currently active link

  // Function to handle link click
  const handleLinkClick = (link: string) => {
    setActiveLink(link); // Update the active link
  };

  return (
    <div className="bg-white">
      {/* Top Navbar */}
      <div className="mt-2 font-thin flex items-center justify-between text-black px-4 py-2 lg:h-[60px] lg:px-16">
        {/* Logo */}
        <div className="font-extrabold text-3xl">Hekto</div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 items-center">
          <ul
            className={`cursor-pointer ${
              activeLink === "Home" ? "text-red-500" : "text-black"
            } hover:text-red-300`}
            onClick={() => handleLinkClick("Home")}
          >
            Home
          </ul>
          <ul
            className={`cursor-pointer ${
              activeLink === "Pages" ? "text-red-500" : "text-black"
            } hover:text-red-300`}
            onClick={() => handleLinkClick("Pages")}
          >
            Pages
          </ul>
          <ul
            className={`cursor-pointer ${
              activeLink === "Products" ? "text-red-500" : "text-black"
            } hover:text-red-300`}
            onClick={() => handleLinkClick("Products")}
          >
            Products
          </ul>
          <ul
            className={`cursor-pointer ${
              activeLink === "Blog" ? "text-red-500" : "text-black"
            } hover:text-red-300`}
            onClick={() => handleLinkClick("Blog")}
          >
            Blog
          </ul>
          <ul
            className={`cursor-pointer ${
              activeLink === "Shop" ? "text-red-500" : "text-black"
            } hover:text-red-300`}
            onClick={() => handleLinkClick("Shop")}
          >
            Shop
          </ul>
          <ul
            className={`cursor-pointer ${
              activeLink === "Contact" ? "text-red-500" : "text-black"
            } hover:text-red-300`}
            onClick={() => handleLinkClick("Contact")}
          >
            Contact
          </ul>
        </div>

        {/* Search Input */}
        <div className="hidden lg:flex items-center gap-2">
          <Input className="w-[300px]" placeholder="Search..." />
          <div className="h-[24px] w-[24px] justify-center items-center flex bg-pink-500 text-white">
            <FaSearch />
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Input className="w-[150px]" placeholder="Search..." />
            <div className="h-[24px] w-[24px] justify-center items-center flex bg-pink-500 text-white">
              <FaSearch />
            </div>
          </div>
          <button
            className="text-2xl"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 mt-4 pb-4 bg-gray-100">
          <ul
            className={`cursor-pointer ${
              activeLink === "Home" ? "text-red-500" : "text-black"
            } hover:text-red-300`}
            onClick={() => handleLinkClick("Home")}
          >
            Home
          </ul>
          <ul
            className={`cursor-pointer ${
              activeLink === "Pages" ? "text-red-500" : "text-black"
            } hover:text-red-300`}
            onClick={() => handleLinkClick("Pages")}
          >
            Pages
          </ul>
          <ul
            className={`cursor-pointer ${
              activeLink === "Products" ? "text-red-500" : "text-black"
            } hover:text-red-300`}
            onClick={() => handleLinkClick("Products")}
          >
            Products
          </ul>
          <ul
            className={`cursor-pointer ${
              activeLink === "Blog" ? "text-red-500" : "text-black"
            } hover:text-red-300`}
            onClick={() => handleLinkClick("Blog")}
          >
            Blog
          </ul>
          <ul
            className={`cursor-pointer ${
              activeLink === "Shop" ? "text-red-500" : "text-black"
            } hover:text-red-300`}
            onClick={() => handleLinkClick("Shop")}
          >
            Shop
          </ul>
          <ul
            className={`cursor-pointer ${
              activeLink === "Contact" ? "text-red-500" : "text-black"
            } hover:text-red-300`}
            onClick={() => handleLinkClick("Contact")}
          >
            Contact
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
