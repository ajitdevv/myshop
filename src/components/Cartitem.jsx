import { useState } from "react";
import { useSelector } from "react-redux";

function Cartitem() {
  const cartSlector = useSelector((state) => state.cart.items);
  const [cartitems, setCartitems] = useState(cartSlector);

  const productCount = (id, q) => {
    let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
    const cartTampItems = cartSlector.map((item) => {
      return item.id === id ? { ...item, quantity } : item;
    });
    setCartitems(cartTampItems);
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
                      // onClick={() => dispatch(removeitem(product))}
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

      <div className="text-bold bg-green-300 p-5 rounded-4xl mb-2 flex flex-row items-start">
        Total : $
        {cartitems
          .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
          .toLocaleString(2)}
      </div>
    </section>
  );
}
export default Cartitem;
