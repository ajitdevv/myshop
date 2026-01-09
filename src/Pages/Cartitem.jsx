import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeitem, removeallitems } from "../redux/slice";
import { useNavigate } from "react-router-dom";
import { RemoveItemButton, ButtonN } from "../Componenets/Button";

function Cartitem() {
  const cartSlector = useSelector((state) => state.cart.items);
  const [cartitems, setCartitems] = useState(cartSlector);
 
  useEffect(() => {
    setCartitems(cartSlector);
  }, [cartSlector]);
  const dispatch = useDispatch();
  const productCount = (id, q) => {
    let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
    const cartTampItems = cartSlector.map((item) => {
      return item.id === id ? { ...item, quantity } : item;
    });
    setCartitems(cartTampItems);
  };
  const navigate = useNavigate(); 
  const Handelorderpage=()=>{
    navigate("/cart/order");
  }
  return (
    <section
      id="cart"
      className="w-full flex flex-col items-center h-full bg-background text-fourground "
    >
      <div className="container flex flex-row justify-center items-center w-full ">
        {cartitems.length > 0 ? (
          <div className="grid grid-cols-1 w-full gap-6 mt-20 p-6">
            {cartitems.map((item) => (
              <div
                key={item.id}
                className="bg-card flex justify-between p-4 h-50 w-full items-center rounded-lg shadow-(--shadow) text-forground"
              >
                <div className="flex flex-col items-start gap-4 p-3">
                  <img
                    className="size-30 "
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <h1 className="text-fourground text-2xl ">{item.title}</h1>
                </div>
                <div className="flex items-center gap-5">
                  <input
                    onChange={(e) => productCount(item.id, e.target.value)}
                    type="number"
                    value={item.quantity || 1}
                    className="bg-inner-card h-10 hover:border w-20 p-2 hover:border-amber-500 rounded-2xl "
                  />
                  <div>
                    <h2 className="text-xl font-semibold">
                      ${(item.price * (item.quantity || 1)).toLocaleString(2)}
                    </h2>
                    <RemoveItemButton
                      onClick={() => dispatch(removeitem(item))}
                      text="Remove item"
                      className="mt-4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div>
        <h1 className=" bg-card text-bold p-3 rounded-4xl  flex flex-row items-start">
          Total : $
          {cartitems
            .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
            .toLocaleString(2)}
        </h1>
      </div>
      <div className="flex justify-around items-center mb-2 w-full">
        <ButtonN onClick={Handelorderpage} text="Order" />
      </div>
    </section>
  );
}
export default Cartitem;
