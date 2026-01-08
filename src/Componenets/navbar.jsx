import AddToCart from "./AddToCart.jsx";
import ToggleButton from "./ThemeToggleButton.jsx";
import { Link } from "react-router-dom";
import Product from "../Pages/Product.jsx";
function nav() {
  return (
    <>
      <nav className="flex fixed top-0 right-0 w-full z-100 flex-row justify-between items-center px-2 bg-background shadow-md text-Foreground">
        {/* <!-- Logo --> */}
        <div className="flex items-center font-bold text-2xl">
          <span className="">🛍️</span>
          <span className="ml-2 text-accent">MyShop</span>
        </div>
        {/* <!-- Navigation --> */}
        <div>
          <nav className="flex gap-4 *:font-bold *:hover:underline">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
          </nav>
        </div>
        {/* <!-- Cart --> */}
        <div>
          <ToggleButton />
          <AddToCart />
        </div>
      </nav>
    </>
  );
}
export default nav;