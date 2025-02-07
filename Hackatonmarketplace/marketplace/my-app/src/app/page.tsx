import getProducts from './component/Datafetch'
import Productgrid from './component/Featuredproducts';
import Latestproduct from './component/Latestproduct';
import Promotional from './component/Promotional'; 



export default async function Home() {
  const products = await getProducts();
  return (
    <div> 
      
      <Promotional/>
      <div className="mt-[75px] flex text-3xl text-[#1A0B5B] justify-center font-bold">
        Featured Products
      </div>
<Productgrid/>
<Latestproduct/>
    </div>
  );
}
