import CartCheck from "../Componenets/CartCheck.jsx";
import ToggleButton from "../Componenets/ThemeToggleButton.jsx";
import { Link } from "react-router-dom";
function header() {
  return (
    <>
      <nav className="flex fixed top-0 right-0 w-full z-100 flex-row justify-between items-center px-2 bg-background shadow-(--shadow) text-Foreground">
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
        <div className="flex gap-2">
          <ToggleButton />
          <CartCheck />
        </div>
      </nav>
    </>
  );
}
export default header;