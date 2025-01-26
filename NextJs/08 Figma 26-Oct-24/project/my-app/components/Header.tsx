import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between px-8 shadow-2xl bg-black p-6 text-white">
      <div className="cursor-pointer ">LOGO</div>
      <div className="flex gap-24">
        <div className="cursor-pointer ">HOME</div>
        <div className="cursor-pointer">ABOUT</div>
        <div className="cursor-pointer">SERVICES</div>
        <div className="cursor-pointer">CONTACT US</div>
      </div>
    </div>
  );
}
