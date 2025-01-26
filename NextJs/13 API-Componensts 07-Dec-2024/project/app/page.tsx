import InfoCards from "@/components/InfoCards";

const Dummydata = [
  {
    name: "Product 1",
    id: 1,
    description: "this is a good product"
  },

  {
    name: "Product 2",
    id: 2,
    description: "this is a good product"
  },
  {
    name: "Product 3",
    id: 3,
    description: "this is a good product"
  },
  {
    name: "Product 4",
    id: 4,
    description: "this is a good product"
  },
  {
    name: "Product 5",
    id: 5,
    description: "this is a good product"
  },
  {
    name: "Product 6",
    id: 6,
    description: "this is a good product"
  }

]


export default async function Home() {


  return (
    <div className="">
      
{Dummydata.map((product, itemindex) => {
  return (
    <div key={product.id}>
      <h1>Item Index: {itemindex}</h1>
      
      <h2>Product Name: {product.name}</h2>
    </div>
  )
})}



    </div>
  );
}
