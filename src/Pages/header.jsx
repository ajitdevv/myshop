import AddToCart from "../Components/AddToCart.jsx";
import ToggleButton from "../Components/ToggleButton.jsx";
import { Link } from "react-router-dom";
import Product from "./Product.jsx";
function Header() {
  return (
    <>
      <header className="flex fixed top-0 right-0 w-full z-100 flex-row justify-between items-center px-2 bg-background shadow-md text-Foreground">
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
      </header>
    </>
  );
}
export default Header;
