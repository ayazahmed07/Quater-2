import getProducts from './component/Datafetch'
import Productgrid from './component/Productgrid';


export default async function Home() {
  const products = await getProducts();
  return (
    <div> 
<Productgrid/>
    </div>
  );
}
