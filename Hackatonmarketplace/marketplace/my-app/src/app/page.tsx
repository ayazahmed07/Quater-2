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
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <img src={product.image_url} alt={product.name} height={100} width={100} />
        </div>
      ))}
    </div>
  );
}