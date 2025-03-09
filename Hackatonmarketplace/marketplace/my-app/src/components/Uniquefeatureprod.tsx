import Image from "next/image";

const Uniquefeatureproduct = () => {
  return (
    <div className="bg-[#F2F0FF] py-10 px-5 mb-10">
      {/* Outer Container */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/Images/Group153.png"
            height={299}
            width={400}
            alt="sofa"
            className="bg-[#F5E1FC] rounded-full"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col w-full md:w-1/2 text-start">
          <h1 className="text-[#151875] text-2xl md:text-4xl font-bold mb-4 font-josefin-Sans">
            Unique Features Of Latest & Trending Products
          </h1>

          <div className="text-[#ACABC3] space-y-3 text-sm md:text-base">
            <p className="flex items-center gap-2">
              <span className="w-3 h-3 bg-pink-500 rounded-full inline-block"></span>
              All frames constructed with hardwood solids and laminates.
            </p>
            <p className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
              Reinforced with double wood dowels, glue, screw-nails, corner blocks, and machine nails.
            </p>
            <p className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
              Arms, backs, and seats are structurally reinforced.
            </p>
          </div>

          {/* Button & Price Section */}
          <div className="mt-6 flex items-center gap-4">
            <button className="bg-pink-500 px-4 py-2 text-white text-sm md:text-base transition duration-300 hover:bg-pink-600">
              Add to Cart
            </button>

            {/* Product Name & Price */}
            <div className="flex flex-col text-start">
              <span className="text-[#151875] font-semibold text-sm">
                B&B Italian Sofa
              </span>
              <span className="text-[#151875] text-sm font-bold">$32.00 Price</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uniquefeatureproduct;
