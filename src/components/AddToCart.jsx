import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AddToCart() {
  const cartselector = useSelector((state) => state.cart.items);
  const selector = cartselector.length;
  return (
    <Link to="/cart">
      <div className="relative szie-7 mt-5">
        <div className="size-7 pt-3 mr-1.5">🛒</div>
        <div className="pt-5">
          <div className="absolute top-0 right-0 bg-accent font-bold text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {selector ? selector : 0}
          </div>{" "}
        </div>
      </div>
    </Link>
  );
}
export default AddToCart;
