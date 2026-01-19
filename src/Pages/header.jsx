import Sidemanu from "../Components/Sidebar.jsx"
import CartCheck from "../Components/CartCheck.jsx";
import ToggleButton from "../Components/ThemeToggleButton.jsx";
import { Link } from "react-router-dom";
import { ButtonN } from "../Components/Button.jsx";
function Header() {
  return (
    <>
      <nav className="flex fixed top-0 right-0 w-full z-25 flex-row justify-between items-center px-2 bg-background shadow-(--shadow) text-Foreground">
        <div className="flex justify-between items-center lg:w-full w-[89%]">
          <div className="flex items-center font-bold lg:text-2xl">
            <span className="">🛍️</span>
            <span className="ml-2 text-accent">MyShop</span>
          </div>
          <div>
            <nav className="flex gap-4 *:font-bold max-sm:hidden *:hover:underline">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
            </nav>
          </div>
          <div className="mb-4 max-sm:hidden ">
            <ButtonN text="Login" />
          </div>
          <div className="flex gap-2">
            <ToggleButton />
            <CartCheck />
          </div>{" "}
        </div>
        <div className="lg:hidden">
          <Sidemanu />
        </div>
      </nav>
    </>
  );
}
export default Header;
