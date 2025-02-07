import { AiOutlineMinus } from "react-icons/ai";
import getProducts from "./Datafetch";

export default async function Featuredproducts() {
  const products = await getProducts();

  const filteredProducts = products.filter((product: any) => product.isFeaturedProduct);

  
  return (
    <div className="flex flex-wrap justify-center m-10 mr-[100px] ml-[100px] gap-5 ">
      {filteredProducts.map((product: any) => (
        <div
          key={product._id}
          className="h-[330px] w-[230px] bg-white shadow-md rounded-lg overflow-hidden"
        >
          <div className="p-4 bg-[#F7F7F7] hover:bg-[#F6F7FB] transition duration-300">
            <div className="flex justify-center items-center">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-[175px] h-[175px]"
              />
            </div>
            <div className="mt-3 flex justify-center">
              <button className="bg-green-500 text-white px-1 py-1 text-[10px] hover:bg-green-600 transition duration-300">
                View Details
              </button>
            </div>
          </div>

          <div className="p-3 w-full group bg-white transition duration-300 hover:bg-blue-900 text-center">
            <p className="text-center font-bold text-pink-600 group-hover:text-white transition duration-300">
              Cantilever Chair
            </p>
            <div className="flex items-center space-x-1 justify-center">
              {/* Four Line Icons */}
              <AiOutlineMinus size={18} color="green" />
              <AiOutlineMinus color="red" />
              <AiOutlineMinus color="blue" />
            </div>

            <p className="font-semibold group-hover:text-white transition duration-300">
              Rs. {product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
