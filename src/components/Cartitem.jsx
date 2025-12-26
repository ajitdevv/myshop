import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeitem, removeallitems } from "../redux/slice";
import { useNavigate } from "react-router-dom";

function Cartitem() {
  const cartSlector = useSelector((state) => state.cart.items);
  const [cartitems, setCartitems] = useState(cartSlector);
  const nagitive = useNavigate();
  useEffect(() => {
    setCartitems(cartSlector);
  });
  const removeAllitems = () => {
    localStorage.clear();
    dispatch(removeallitems());
    // nagitive("/products");
  };
  const dispatch = useDispatch();
  const productCount = (id, q) => {
    let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
    const cartTampItems = cartSlector.map((item) => {
      return item.id === id ? { ...item, quantity } : item;
    });
    setCartitems(cartTampItems);
    console.log(cartTampItems);
  };
  return (
    <section
      id="cart"
      className="w-full flex flex-col items-center h-full bg-gray-800 text-white "
    >
      <div className="container flex flex-row justify-center items-center w-full ">
        {cartitems.length > 0 ? (
          <div className="grid grid-cols-1 w-full gap-6 mt-20 p-6">
            {cartitems.map((item) => (
              <div
                key={item.id}
                className="bg-white flex justify-between p-4 h-50 w-full items-center rounded-lg shadow-md text-black"
              >
                <div className="">
                  <img
                    className="size-40"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <h1 className="text-black text-2xl">{item.title}</h1>
                </div>
                <div className="flex items-center gap-5">
                  <input
                    onChange={(e) => productCount(item.id, e.target.value)}
                    type="number"
                    value={item.quantity || 1}
                    className="bg-blue-200 h-10 hover:border w-20 p-2 hover:border-amber-500 rounded-2xl "
                  />{" "}
                  <div>
                    <h2 className="text-xl font-semibold">
                      ${(item.price * (item.quantity || 1)).toLocaleString(2)}
                    </h2>
                    <button
                      onClick={() => dispatch(removeitem(item))}
                      className="mt-4 font-bold bg-red-600 text-white px-4 py-2 rounded  shadow-xs"
                    >
                      Remove item
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div className="flex justify-around items-center mb-2 w-full">
        <button
          onClick={removeAllitems}
          className="mt-4 font-bold bg-red-600 text-white px-4 py-2 rounded  shadow-xs"
        >
          Remove item
        </button>
        <h1 className=" bg-green-300 text-bold p-3 rounded-4xl  flex flex-row items-start">
          {" "}
          Total : $
          {cartitems
            .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
            .toLocaleString(2)}
        </h1>
      </div>
    </section>
  );
}
export default Cartitem;
