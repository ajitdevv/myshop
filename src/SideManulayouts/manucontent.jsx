import { ButtonN } from "../Components/Button";
import { Link } from "react-router-dom";
const SideManuContent = ({ open }) => {
  return (
    <div className="w-full flex mt-18">
      {open ? (
        <section className="h-full fixed inset-0   bg-red-300">
          <div className="absolute right-0 top-19 w-full md:w-80 h-full">
          <div className="w-full">
            <nav className="flex flex-col w-full gap-4 *:font-bold*:hover:underline">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
            </nav>
          </div>
          <div className="mb-4 w-full">
            <ButtonN text="Login" />
          </div></div>
        </section>
      ) : null}
    </div>
  );
};
export default SideManuContent;
