import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

import React from "react";

function Header() {
  return (
    <div className="flex justify-between bg-black text-white">
      <div className="ml-2 font-bold text-xl">LOGO</div>
      <ul className="hidden md:flex gap-1 list-none items-center gap-4">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Services</li>
      </ul>
<Sheet>
    <SheetTrigger className="md:hidden">
        <Menu/>
    </SheetTrigger>
    <SheetContent>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Services</li>
        </ul>
    </SheetContent>
</Sheet>

    </div>
  );
}

export default Header;
