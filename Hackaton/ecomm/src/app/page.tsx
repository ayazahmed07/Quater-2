import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CircleArrowLeftIcon, Fullscreen } from "lucide-react";
import Image from "next/image";
import { AiOutlineMinus } from "react-icons/ai";
import { CgSupport } from "react-icons/cg";
import { FaTruck } from "react-icons/fa";
import { FaCircleArrowRight, FaSuperpowers } from "react-icons/fa6";
import { MdArrowCircleUp, MdRoundedCorner, MdSupport } from "react-icons/md";

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

      <div className="mt-[75px] flex text-3xl text-[#1A0B5B] justify-center font-bold">
        Featured Products
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/images/Chair1.jpg"
          height={361}
          width={270}
          alt="Main Image"
        />

        <Image
          src="/images/Chair2.jpg"
          height={361}
          width={270}
          alt="Main Image"
        />

        <Image
          src="/images/Chair3.jpg"
          height={361}
          width={270}
          alt="Main Image"
        />

        <Image
          src="/images/Chair4.png"
          height={361}
          width={270}
          alt="Main Image"
        />
      </div>
      <div className="flex items-center space-x-1 justify-center">
        {/* Four Line Icons */}
        <AiOutlineMinus size={24} color="red" />
        <AiOutlineMinus color="red" />
        <AiOutlineMinus color="red" />
        <AiOutlineMinus color="red" />
      </div>

      <div className="mt-[75px] flex text-3xl text-[#1A0B5B] justify-center font-bold">
        Latest Products
      </div>
      <div className="flex mt-3 mb-7 text-[#1A0B5B] items-center justify-center gap-8">
        <ul className="text-red-600 underline">New Arrival</ul>
        <ul>Best Seller</ul>
        <ul>Featured</ul>
        <ul>Special Offer</ul>
      </div>

      <div className="flex justify-center gap-6">
        <Image
          src="/images/Chair5.jpg"
          height={361}
          width={270}
          alt="Main Image"
        />

        <Image
          src="/images/Chair6.jpg"
          height={361}
          width={270}
          alt="Main Image"
        />

        <Image
          src="/images/Chair7.jpg"
          height={361}
          width={270}
          alt="Main Image"
        />
      </div>

      <div className="mt-[50px] flex justify-center gap-6">
        <Image
          src="/images/Chair8.jpg"
          height={361}
          width={270}
          alt="Main Image"
        />

        <Image
          src="/images/Chair9.jpg"
          height={361}
          width={270}
          alt="Main Image"
        />

        <Image
          src="/images/Chair10.jpg"
          height={361}
          width={270}
          alt="Main Image"
        />
      </div>
      <div className="text-[#151875] font-bold text-center justify-center text-3xl mt-6">
        What Shopex Offer!
      </div>

      <div className="flex justify-center gap-7">
        <div className="flex gap-7 justify-center mt-10 text-[#151875]">
          <div className="border border-gray rounded-md w-[270px] h-[320px] text-center ">
            <div className="flex justify-center m-7">
              <FaTruck size={64} color="red" />
            </div>
            <div className="font-bold m-7">24/7 Support</div>
            <div className="m-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque cum
            </div>
          </div>
        </div>

        <div className="flex gap-7 justify-center mt-10 text-[#151875]">
          <div className="border border-gray rounded-md w-[270px] h-[320px] text-center ">
            <div className="flex justify-center m-7">
              <FaTruck size={64} color="red" />
            </div>
            <div className="font-bold m-7">24/7 Support</div>
            <div className="m-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque cum
            </div>
          </div>
        </div>

        <div className="flex gap-7 justify-center mt-10 text-[#151875]">
          <div className="border border-gray rounded-md w-[270px] h-[320px] text-center ">
            <div className="flex justify-center m-7">
              <FaTruck size={64} color="red" />
            </div>
            <div className="font-bold m-7">24/7 Support</div>
            <div className="m-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque cum
            </div>
          </div>
        </div>

        <div className="flex gap-7 justify-center mt-10 text-[#151875]">
          <div className="border border-gray rounded-md w-[270px] h-[320px] text-center ">
            <div className="flex justify-center m-7">
              <FaTruck size={64} color="red" />
            </div>
            <div className="font-bold m-7">24/7 Support</div>
            <div className="m-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque cum
            </div>
          </div>
        </div>
      </div>

      <div></div>

      <div className="bg-[#F1F0FF] h-[579] w-[1920] mt-11">
        <Image
          src="/images/uniquesofa.png"
          height={550}
          width={1050}
          alt="Main Image"
        />
      </div>

      <div className="mt-[75px] flex text-3xl text-[#1A0B5B] justify-center font-bold">
        Trending Products
      </div>
      <div className="flex justify-center items-center">
        <Image src="/images/t1.jpg" height={361} width={270} alt="Main Image" />

        <Image src="/images/t2.jpg" height={361} width={270} alt="Main Image" />

        <Image src="/images/t3.jpg" height={361} width={270} alt="Main Image" />

        <Image src="/images/t4.jpg" height={361} width={270} alt="Main Image" />
      </div>

      <div className="flex justify-center items-center">
        <Image src="/images/t5.jpg" height={270} width={420} alt="Main Image" />

        <Image src="/images/t6.jpg" height={270} width={420} alt="Main Image" />
      </div>
      <div className="mt-[50px] flex text-3xl text-[#1A0B5B] justify-center font-bold">
        Discount Item
      </div>
      <div className="flex mt-5 text-[#1A0B5B] items-center justify-center gap-8">
        <ul className="text-red-600 underline">Wood Chair</ul>
        <ul>Plastic Chair</ul>
        <ul>Sofa Collection</ul>
      </div>

      <div className="flex justify-center">
        <Image
          src="/images/discountsofa.jpg"
          height={597}
          width={1214}
          alt="Main Image"
        />
      </div>

      <div className="mt-[50px] flex text-3xl text-[#1A0B5B] justify-center font-bold">
        Top Categories
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/images/tc1.jpg"
          height={345}
          width={269}
          alt="Main Image"
        />

        <Image
          src="/images/tc2.jpg"
          height={345}
          width={269}
          alt="Main Image"
        />

        <Image
          src="/images/tc3.jpg"
          height={345}
          width={269}
          alt="Main Image"
        />

        <Image
          src="/images/tc4.jpg"
          height={345}
          width={269}
          alt="Main Image"
        />
      </div>

      <div className="flex items-center space-x-1 justify-center">
        {/* Four Line Icons */}
        <FaCircleArrowRight size={24} color="red" />
        <FaCircleArrowRight color="red" />
        <FaCircleArrowRight color="red" />
      </div>

      <div className="flex justify-center items-center mt-32">
        <Image
          src="/images/update.jpg"
          height={462}
          width={1920}
          alt="Main Image"
        /> </div>

<div className="flex justify-center items-center mt-16">
        <Image
          src="/images/logos.jpg"
          height={93}
          width={904}
          alt="Main Image"
        /> </div>

<div className="mt-[50px] flex text-3xl text-[#1A0B5B] justify-center font-bold">
        Latest Blog
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/images/b1.jpg"
          height={493}
          width={370}
          alt="Main Image"
        />

        <Image
          src="/images/b2.jpg"
          height={493}
          width={370}
          alt="Main Image"
        />

        <Image
          src="/images/b3.jpg"
          height={493}
          width={370}
          alt="Main Image"
        />

</div>
    </div>
    
  );
}
