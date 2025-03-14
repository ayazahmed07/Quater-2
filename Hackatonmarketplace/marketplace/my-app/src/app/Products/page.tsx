import { client } from "@/sanity/lib/client";

const getProducts = async () => {
  const products = await client.fetch(`
    *[_type == "product"][0..2] {
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

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="flex flex-col gap-[100px]">
      {products.map((product: any) => (
        <div key={product._id}>
          <h2>Product Name: {product.name}</h2>
          <p>Product Description: {product.description}</p>
          <div className="flex gap-10">
            <img
              src={product.image_url}
              alt={product.name}
              height={200}
              width={200}
            />
          </div>
          <p>Product Price: {product.price}</p>
          <p>Discount Percentage: {product.discountPercentage}</p>
          <p>StockLevel: {product.stockLevel}</p>
        </div>
      ))}
    </div>
  );
}
