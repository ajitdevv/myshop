import AddToCart from "./AddToCart.jsx";
import { Link } from "react-router-dom";
import Product from "./Product.jsx";
function Header() {
  return (
    <>
      <header className="flex fixed top-0 right-0 w-full mb-20 z-100 flex-row justify-between items-center p-4 bg-blue-600 text-white">
        {/* <!-- Logo --> */}
        <div className="">
          <span className="">🛍️</span>
          MyShop
        </div>
        {/* <!-- Navigation --> */}
        <div>
          <nav className="flex gap-4 *:hover:underline">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
          </nav>
        </div>
        {/* <!-- Cart --> */}
        <div>
          <AddToCart />
        </div>
      </header>
     
    </>
  );
}
export default Header;
