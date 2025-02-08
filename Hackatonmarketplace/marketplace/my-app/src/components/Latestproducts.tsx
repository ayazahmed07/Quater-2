import { client } from "@/sanity/lib/client";
import Image from "next/image";

const getProducts = async () => {
  const products = await client.fetch(`
    *[_type == "product"][7..12] {
      _id,
    name,
    price,
    discountPercentage,
    stockLevel,
    isFeaturedProduct,
    description,
    
    
    "image_url": image.asset->url,

    }
  `);

  return products;
};

export default async function Latest() {
  const products = await getProducts();
  return (
    <div className="flex flex-wrap justify-center gap-5 px-6 lg:px-24 py-6">
      {products.map((product: any) => (
        <div
          key={product._id}
          className="w-full sm:w-[48%] md:w-[31%] lg:w-[25%] bg-white"
        >
          <div className="p-4 bg-[#F7F7F7] hover:bg-white transition duration-300">
            <div className="flex justify-center items-center">
              <Image
                src={product.image_url}
                alt={product.name}
                height={175}
                width={175}
                className="w-[175px] h-[175px] object-contain"
              />
            </div>
          </div>
          <div className="flex justify-between text-[12px] text-blue-800 font-bold p-2">
            <span>{product.name.split(" ").slice(0, 3).join(" ")}</span>
            <span>Rs. {product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
