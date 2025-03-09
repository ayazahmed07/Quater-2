import Image from "next/image";

export default function Trend() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-7 mb-6">
      <div className="bg-[#FFF6FB] h-[180px] w-[320px]">
        <p className=" text-blue-800 font-bold">23% off in all products</p>
        <p className="text-pink-400 text-sm">Shop Now</p>
        
        <Image
          src="/images/imageblack.png"
          alt="trend"
          width={120}
          height={120}
        />
      </div>
      <div className="bg-[#EEEFFB] h-[180px] w-[320px]">
        <p className="text-blue-800 font-bold">23% off in all products</p>
        <p className=" text-pink-400 text-sm">View Collection</p>
        <Image
          src="/images/imagebar.png"
          alt="trend"
          width={150}
          height={150}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div>
          <Image
            src="/images/image1.png"
            alt="trend"
            width={55}
            height={35}
            className="bg-[#F5F6F8]"
          />
        </div>
        <div>
          <Image
            src="/images/image2.png"
            alt="trend"
            width={55}
            height={35}
            className="bg-[#F5F6F8]"
          />
        </div>
        <div>
          <Image
            src="/images/image3.png"
            alt="trend"
            width={55}
            height={35}
            className="bg-[#F5F6F8]"
          />
        </div>
      </div>
    </div>
  );
}
