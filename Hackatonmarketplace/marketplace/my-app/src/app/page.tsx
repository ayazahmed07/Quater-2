import getProducts from './component/Datafetch'
import Productgrid from './component/Productgrid';
import Promotional from './component/Promotional'; 


export default async function Home() {
  const products = await getProducts();
  return (
    <div> 
      <Promotional/>
<Productgrid/>
    </div>
  );
}
