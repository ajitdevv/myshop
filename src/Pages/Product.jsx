import { useDispatch, useSelector } from "react-redux";
import { additem, removeitem } from "../redux/slice";
import { useEffect, useState } from "react";
import { fetchProducts } from "../redux/dummyproducts";

export default function Product() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const cartproduct = useSelector((state) => state.cart.items);
  const [button, setbutton] = useState(true);
  const slector = useSelector((state) => state.products.items);
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-20 gap-6">
        {slector.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 w-fit rounded-lg shadow-md"
          >
            <img
              src={product.thumbnail}
              className="rounded-lg drop-shadow-lg"
              alt={product.name}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300";
              }}
            />
            <h1 className="font-bold text-black">reating : {product.rating}</h1>
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <h3 className="text-lg ">{product.description}</h3>
            <p className="text-gray-700">₹{product.price}</p>
            {cartproduct.find(
              (cartitem) => cartitem.id === product.id) ? (
                <button   onClick={() => dispatch(removeitem(product))}
                  className="mt-4 font-bold bg-red-600 text-white px-4 py-2 rounded  shadow-xs"
                   
                >
                 Remove from cart 
                </button>
              ) : (
                <button
                  onClick={() => dispatch(additem(product))}
                 
                  className="mt-4 font-bold bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 pointer-cursor shadow-xs"
                >
                  add to cart
                </button>
              )
            }
          </div>
        ))}
      </div>
    </div>
  );
}
