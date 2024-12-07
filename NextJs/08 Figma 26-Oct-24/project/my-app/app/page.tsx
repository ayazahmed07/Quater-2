"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex h-[500px] w-11/12">
        <div className="flex flex-col flex-1 gap-4 justify-center">
          <h1 className="font-bold text-[44px]">Welcome To Our Website</h1>
          <p className="font-normal text-[32px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            eos officia, minima voluptatem vitae numquam veniam consequuntur
            modi aliquam ipsam harum, obcaecati delectus nesciunt. A nostrum
            excepturi commodi dolorum recusandae.
          </p>
          <button className="w-[237px] h-[66px] bg-black text-white p-4">
            Contact Us
          </button>
        </div>

        <div className="flex-1">
          <Image 
          src="/images/banner-image.jpg"
          alt="banner-image"
          width={550}
          height={465}
/>
        </div>
      </div>


    </div>
  );
}
