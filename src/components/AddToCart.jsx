
import { useSelector } from "react-redux";

function AddToCart() {
    const cartselector = useSelector((state)=>state.cart.items);
    const selector = cartselector.length;
  return (
    <div className="cart">
      🛒
      <span className="cart-count">{selector ? selector : 0}</span>
    </div>
  );
}
export default AddToCart;