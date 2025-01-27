import { client } from "@/sanity/lib/client";

const getProducts = async () => {
    const products = await client.fetch(`
      *[_type == "product"]{
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
  
  export default getProducts