import Product from "./Product";
import FilteredProducts from "../Components/FilteredProductsCard.jsx";
import Poster from "../Components/poster.jsx";
import poster1 from "../assets/Homepagee/1.png";
import poster2 from "../assets/Homepagee/2.png";
import poster3 from "../assets/Homepagee/3.png";
import poster4 from "../assets/Homepagee/4.png";
function Home() {
  const slides = [poster1, poster2, poster3, poster4];
  return (
    <div className="flex flex-col justify-center">
      <div>
        <Poster slides={slides} />
      </div>
      <div>
        <FilteredProducts />
      </div>
      <div className="-mt-20">
        <Product />
      </div>
    </div>
  );
}
export default Home;
