import { ButtonN } from "../Components/Button";
import { Link } from "react-router-dom";
const SideManuContent = ({ open }) => {
  return (
    <div className="w-full flex justify-center mt-18 items-center">
      {open ? (
        <section className="h-full w-full bg-red-300">
          <div className="w-full">
            <nav className="flex flex-col w-full gap-4 *:font-bold*:hover:underline">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
            </nav>
          </div>
          <div className="mb-4 w-full">
            <ButtonN text="Login" />
          </div>
        </section>
      ) : null}
    </div>
  );
};
export default SideManuContent;
