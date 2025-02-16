import { client } from "@/sanity/lib/client";
import Image from "next/image";

const getProducts = async () => {
  const products = await client.fetch(`
    *[_type == "product"][15..18] {
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

export default async function Trendingproducts() {
  const products = await getProducts();
  return (
    <div className="flex flex-wrap justify-center gap-6 px-6 lg:px-20 py-10">
      {products.map((product: any) => (
        <div
          key={product._id}
          className="w-full sm:w-[48%] md:w-[31%] lg:w-[22%] bg-white p-2 lg shadow-md"
        >
          {/* Product Image */}
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

 {/* White Space Below Image */}
<div className="m-7 text-center text-[#151875]">
  <h1 className="text-xl font-bold">Cantiliver Chair</h1>

  {/* Discounted Price (Actual Price - 200) */}
  <span className="text-lg font-semibold text-[#151875]">Rs. {product.price - 200}</span>

  {/* Original Price (With Strikethrough) */}
  <span className="text-lg text-gray-400 line-through ml-3">Rs. {product.price}</span>
</div>


        </div>
      ))}
    </div>
  );
}
