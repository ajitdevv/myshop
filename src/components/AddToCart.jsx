
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AddToCart() {
    const cartselector = useSelector((state)=>state.cart.items);
    const selector = cartselector.length;
  return (
   <Link to="/cart" > <div className="cart">
      🛒
      <span className="">{selector ? selector : 0}</span>
    </div></Link>
  );
}
export default AddToCart;