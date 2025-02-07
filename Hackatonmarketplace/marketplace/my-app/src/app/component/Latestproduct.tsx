import Link from "next/link";

const Latestproduct = () => {
  return (
    <div>
      <div className="mt-[75px] flex text-3xl text-[#1A0B5B] justify-center font-bold">
        Latest Products
      </div>
      <div className="flex mt-3 mb-7 text-[#1A0B5B] items-center justify-center gap-8">
        <ul className="text-red-600 underline">New Arrival</ul>
        <ul>Best Seller</ul>
        <ul>
          {" "}
          <Link href="/#featured-products">Featured </Link>{" "}
        </ul>
        <ul>Special Offer</ul>
      </div>




      
    </div>
  );
};

export default Latestproduct;
