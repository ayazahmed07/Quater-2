import getProducts from "./Datafetch";

export default async function Latestproducts() {
  const products = await getProducts();

  const filteredProducts = products.filter(
    (product: any) => product.isFeaturedProduct
  );

  return (
    <div className="flex flex-wrap justify-center m-2 mb-6 mr-[150px] ml-[150px] gap-5 ">
      {filteredProducts.map((product: any) => (
        <div
          key={product._id}
          className="h-[225px] w-[230px]"
        >
          <div className="p-4 bg-[#F7F7F7] hover:bg-white transition duration-300">
            <div className="flex justify-center items-center">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-[175px] h-[175px]"
              />
            </div>
          </div>
          <div className="flex gap-9 text-[10px] text-blue-600 font-bold justify-left ml-2 mt-1">
          
            {product.name.split(' ').slice(0, 3).join(' ')}
           <div> Rs. {product.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
