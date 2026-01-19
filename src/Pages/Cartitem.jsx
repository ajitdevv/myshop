import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeitem, removeallitems } from "../redux/slice";
import { useNavigate } from "react-router-dom";
import { RemoveItemButton, ButtonN } from "../Components/Button";

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
  const Handelorderpage = () => {
    navigate("/cart/order");
  };

  return (
    <section
      id="cart"
      className="w-full flex relative flex-col gap-6 items-center h-full bg-background text-fourground "
    >
      <div className=" flex flex-row justify-center items-center w-full ">
        {cartitems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 my-20 p-6">
            {cartitems.map((item) => (
              <div
                key={item.id}
                className="bg-card flex-row lg:flex justify-around p-4 w-full items-center rounded-lg shadow-(--shadow) text-forground"
              >
                <div className="flex lg:flex-col items-start gap-4 p-3">
                  <img
                    className="size-30 "
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <div className="flex flex-col gap-2 items-start">
                    <h1 className="text-fourground lg:text-2xl ">
                      {item.title}
                    </h1>
                    <h1 className="text-fourground text-sm lg:text-2xl ">
                      Shipping Time : {item.shippingInformation}
                    </h1>
                    <h1>Rating : {item.rating}</h1>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="lg:flex flex justify-around items-center gap-5">
                    <h2 className="text-xl font-semibold">
                      ₹ {(item.price * (item.quantity || 1)).toLocaleString(2)}
                    </h2>
                    <input
                      onChange={(e) => productCount(item.id, e.target.value)}
                      type="number"
                      value={item.quantity || "1"}
                      className="bg-inner-card h-10 hover:border w-12 pl-4 hover:border-amber-500 rounded-2xl "
                    />
                  </div>

                  <RemoveItemButton
                    onClick={() => dispatch(removeitem(item))}
                    text="Remove item"
                    className="mt-4"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-3xl lg:text-5xl w-full h-full flex justify-center items-center text-foreground my-60 font-bold">
            No Items Are Avalible in Cart 😒😒
          </h1>
        )}
      </div>
      <div className="flex justify-between lg:justify-around bg-card  items-center w-full  fixed bottom-0 px-7 py-4 ">
        {cartitems.length >= 1 ? (
          <div>
            <h1 className=" bg-inner-card text-bold mt-4 px-3 py-2 rounded-4xl  ">
              Total : $
              {cartitems
                .reduce(
                  (sum, item) => sum + item.price * (item.quantity || 1),
                  0
                )
                .toLocaleString(2)}
            </h1>
          </div>
        ) : null}
        {cartitems.length >= 1 ? (
          <div>
            <ButtonN
              onClick={Handelorderpage}
              className="shadow-(--shadow) w-full "
              text="Order"
            />
          </div>
      ) : null}
      </div>
    </section>
  );
}
export default Cartitem;
