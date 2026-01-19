import { ArrowDown } from "lucide-react";
import { ButtonN } from "../Components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
const SideManuContent = ({ setisopen, open }) => {
  const [Category, setCategory] = useState(false);
  return (
    <aside
      className={`
          fixed right-0 top-0 h-full w-full md:w-80 bg-red-300
          transition-transform duration-500 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
    >
      <div className="flex flex-col justify-center items-center">
        <nav className="flex flex-col gap-4 p-6 font-bold">
          <Link to="/" onClick={() => setisopen(false)}>
            Home
          </Link>

          <Link to="/products" onClick={() => setisopen(false)}>
            Products
          </Link>
          <Link>
            <div onClick={()=>setCategory((prev) => !prev)} className="flex gap-1">
              Category Products <ArrowDown />
            </div>
          </Link>
          {Category ? (
            <div className="flex flex-col gap-3">
              <Link to="/products/Category/beauty" onClick={() => setisopen(false)}>
                Beauty
              </Link>

              <Link to="/products/Category/fragrances" onClick={() => setisopen(false)}>
                Fragrances
              </Link>
              <Link to="products/Category/groceries" onClick={() => setisopen(false)}>
                Groceries
              </Link>

              <Link to="/products/Category/furniture" onClick={() => setisopen(false)}>
                Furniture
              </Link>
            </div>
          ) : ''}
        </nav>
        <div className="p-6">
          <ButtonN text="Login" />
        </div>
      </div>
    </aside>
  );
};
export default SideManuContent;
