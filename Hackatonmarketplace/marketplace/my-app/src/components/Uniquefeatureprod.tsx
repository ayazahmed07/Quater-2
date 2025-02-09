import Image from "next/image";

const Uniquefeatureproduct = () => {
  return (
    <div className="bg-[#F2F0FF] py-10 px-5 mb-10 just">
      {/* Outer Container */}
      <div className="flex flex-col md:flex-row items-center justify-start max-w-6xl mx-auto gap-5">
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/Images/Group153.jpg"
            height={299}
            width={400}
            alt="sofa"
          />
        </div>
        <div className="flex">
            <h1>Unique Features Of leatest &
            Trending Poducts</h1>
        </div>

        <button className="bg-pink-500 px-4 py-2 text-white text-sm">
         
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Uniquefeatureproduct;
