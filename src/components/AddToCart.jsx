
import { useSelector } from "react-redux";

function AddToCart() {
    const selector = useSelector((state)=>state.cart.value);
  return (
    <div className="cart">
      🛒
      <span className="cart-count">{selector}</span>
    </div>
  );
}
export default AddToCart;