import { useSelector } from "react-redux";

function Cartitem() {
  const cartSlector = useSelector((state) => state.cart.items);
  console.log(cartSlector);
  return (
    <section id="cart" className="w-full h-full bg-gray-800 text-white ">
      <div className="container w-full mt-20">
        {cartSlector.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 mt-20 p-6">
            {cartSlector.map((item) => (
              <div
                key={item.id}
                className="bg-white flex p-4 h-50 w-full items-center rounded-lg shadow-md text-black"
              >
                <div className="">
                  <img className="size-40" src={item.thumbnail} alt={item.title} />
                  <h1 className="text-black text-2xl">{item.title}</h1>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">${item.price}</h2>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
export default Cartitem;
