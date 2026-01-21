import { ArrowDown } from "lucide-react";
import { ButtonN } from "../Components/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const SideManuContent = ({ setisopen, open }) => {
  const [Category, setCategory] = useState(false);
  useEffect(() => {
    if (!open) {
      setCategory(false);
    }
  }, [open]);
  return (
    <aside
      className={`
          fixed right-0 top-0 h-full w-full md:w-80 bg-card text-foreground
          transition-transform duration-500 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
    >
      <div className="flex flex-col justify-center items-center mt-20">
        <nav className="flex flex-col justify-center items-center gap-4 p-6 font-bold">
          <div className="flex items-center font-bold lg:text-2xl">
            <span className="">🛍️</span>
            <span className="ml-2 text-accent">MyShop</span>
          </div>
          <Link to="/" onClick={() => setisopen(false)}>
            Home
          </Link>

          <Link to="/products" onClick={() => setisopen(false)}>
            Products
          </Link>
          <Link>
            <div
              onClick={() => setCategory((prev) => !prev)}
              className="flex gap-1"
            >
              Category Products <ArrowDown />
            </div>
          </Link>

          {Category ? (
            <div className="flex flex-col bg-inner-card p-4 rounded-2xl gap-3 transition-transform duration-500 ease-in-out">
              <Link
                to="/products/Category/beauty"
                onClick={() => setisopen(false)}
              >
                Beauty
              </Link>

              <Link
                to="/products/Category/fragrances"
                onClick={() => setisopen(false)}
              >
                Fragrances
              </Link>
              <Link
                to="products/Category/groceries"
                onClick={() => setisopen(false)}
              >
                Groceries
              </Link>

              <Link
                to="/products/Category/furniture"
                onClick={() => setisopen(false)}
              >
                Furniture
              </Link>
            </div>
          ) : (
            ""
          )}

          <Link to="/cart" onClick={() => setisopen(false)}>
            Cart
          </Link>
          <Link to="/aboutus" onClick={() => setisopen(false)}>
            About
          </Link>
          <Link to="/terms&conditions" onClick={() => setisopen(false)}>
            Trem&conditions
          </Link>
          <div className="p-6">
            <ButtonN text="Login" />
          </div>
        </nav>
      </div>
    </aside>
  );
};
export default SideManuContent;
