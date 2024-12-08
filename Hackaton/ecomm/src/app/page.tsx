import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Fullscreen } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
 <div className="flex flex-col h-[8032px] w-full bg-white">

 <div className="mt-2"> 
  <Image
          src="/images/promotional.jpg"
          height={764}
          width={1530}
          alt="Main Image"
                />
</div>

<div className="mt-3 flex text-3xl text-[#1A0B5B] justify-center font-bold">
  Featured Products
</div>

  </div>




  );
}
