import { useSelector } from "react-redux";

const OrderProduct = () => {
  const orderProductList = useSelector((state) => state.cart.items);

  return (
    <div>
      <div className="w-full bg-card rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-3 text-foreground">
          Order Summary
        </h2>

        <table className="w-full border-collapse text-sm">
          {/* Table Head */}
          <thead>
            <tr className="bg-inner-card text-left text-foreground">
              <th className="p-3 border-b">Product Name</th>
              <th className="p-3 border-b">Price</th>
              <th className="p-3 border-b text-center">Quantity</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {orderProductList.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-inner-card text-left transition"
              >
                <td className="p-3 border-b">{item.title}</td>
                <td className="p-3 border-b">₹{item.price}</td>
                <td className="p-3 border-b text-center">
                  {item.quantity || 1}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full bg-card rounded-xl p-4 my-4 flex justify-around items-center">
        <h1 className="">Totle Amount : </h1>
        <h2 className="bg-inner-card  px-2 py-1 rounded-xl">
          ₹
          {orderProductList
            .reduce(
              (total, item) => total + item.price * (item.quantity || 1),
              0
            )
            .toLocaleString(2)}
        </h2>
      </div>
    </div>
  );
};

export default OrderProduct;
