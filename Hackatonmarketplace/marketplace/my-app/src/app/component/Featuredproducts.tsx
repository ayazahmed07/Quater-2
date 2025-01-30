import getProducts from "./Datafetch";

export default async function Featuredproducts() {
  const products = await getProducts();

  return (
    <div className="flex flex-wrap justify-center m-10 gap-5">
      {products.map((product: any) => (
        <div
          key={product._id}
          className="h-[330px] w-[230px] bg-white shadow-md rounded-lg overflow-hidden transition duration-300"
        >
          {/* Image Background with Hover Effect */}
          <div className="p-4 bg-[#F7F7F7] hover:bg-[#F6F7FB] transition duration-300">
            <div className="flex justify-center items-center">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-[175px] h-[175px] transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>

          <div className="p-9 w-full group bg-white transition duration-300 hover:bg-blue-900 text-center">
            <p className="text-center font-bold text-pink-600 group-hover:text-white transition duration-300">
              Cantilever Chair
            </p>

            <p className="font-semibold group-hover:text-white transition duration-300">
              Rs. {product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
