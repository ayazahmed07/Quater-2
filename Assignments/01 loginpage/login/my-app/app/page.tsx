import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex h-[465px] w-11/12">
      <div className="flex flex-col flex-1 gap-4 justify-center px-4">
        <h1 className="font-bold text-[44px]">Welcome To Our Website</h1>
        <p className="font-normal text-[32px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard
        </p>
        <button className="text-white w-[237px] h-[66px] p-4 bg-black">
          Contact US
        </button>
      </div>

      <div className="flex-1">
        <div>
        <Image
          src="/images/main.png"
          height={465}
          width={502}
          alt="Main Image"
        />
        </div>
      </div>
      </div>
    </div>
  );
}
