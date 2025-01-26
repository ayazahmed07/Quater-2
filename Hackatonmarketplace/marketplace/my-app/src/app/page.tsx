import { client } from "@/sanity/lib/client"


const getProducts = async ()=>{
  const products = await client.fetch(`
    *[_type == "product"][0..20] {
      _id,
    name,
    description,
    price,
    "image_url": image.asset->url,

    }
  `);


  return products
}

export default async function Home (){
  const products = await getProducts()
  return (
    <div>
      {products.map((product: any) => (
        <div key={product._id}>
          <h2>Product Name: {product.name}</h2>
          <p>Product Price: {product.price}</p>
          <h2>Discount Percentage: {product.discountPercentage}</h2>
          <p>Product Description: {product.description}</p>
          
          <img src={product.image_url} alt={product.name} height={400} width={400} />
        </div>
      ))}
    </div>
  );
}