import getProducts from '@/components/Datafetch';
import Featuredproducts from '@/components/Featuredproducts';
import Latest from '@/components/Latestproducts';
import Lpsection from '@/components/Lpsection';
import Promotional from '@/components/Promotional'; 
import Shopexsection from '@/components/Shopexsection';



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
<Latest/>
<Shopexsection/>


    </div>
  );
}
