import getProducts from './component/Datafetch'
import Featuredproducts from './component/Featuredproducts';
import Latestproducts from './component/Latestproducts';
import Lpsection from './component/Lpsection';
import Promotional from './component/Promotional'; 



export default async function Home() {
  const products = await getProducts();
  return (
    <div> 
      
      <Promotional/>
      <div id="featured-products" className="mt-[75px] flex text-3xl text-[#1A0B5B] justify-center font-bold">
        Featured Products
      </div>
      
<Featuredproducts/>
<Lpsection/>
<Latestproducts/>


    </div>
  );
}
