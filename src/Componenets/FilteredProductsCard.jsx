import { useSelector } from "react-redux";
import FilterCard from "./Card";
import beauty from "../assets/Homepagee/beauty.webp";
import fragrances from "../assets/Homepagee/fragrances.webp";
import furniture from "../assets//Homepagee/furniture.jpg";
import groceries from "../assets/Homepagee/groceries.jpg";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.items);
  const filterdbeauty = products.filter((item) => item.category === "beauty");
  const filterdfragrances = products.filter(
    (item) => item.category === "fragrances"
  );
  const filterdfurniture = products.filter(
    (item) => item.category === "furniture"
  );
  const filterdgroceries = products.filter(
    (item) => item.category === "groceries"
  );

  const bgphoto = [
    { name: "beauty", photo: beauty },
    { name: "fragrances", photo: fragrances },
    { name: "furniture", photo: furniture },
    { name: "groceries", photo: groceries },
  ];
  return (
    <div className="w-full h-full flex flex-col mt-6 p-6 items-start">
      <div>
        <h1 className="lg:text-4xl text-foreground font-semibold">Category Products </h1>
      </div>
      <div>
        <FilterCard bgphoto={bgphoto ? bgphoto : null} />
        
      </div>
      
    </div>
  );
};
export default FilteredProducts;
