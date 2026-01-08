import { useDispatch, useSelector } from "react-redux";
import { additem, removeitem } from "../redux/slice";
import { useEffect, useState } from "react";
import { fetchProducts } from "../redux/dummyproducts";
import { RemoveItemButton, AddItemButton } from "../Componenets/Button.jsx";

export default function Product() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const cartproduct = useSelector((state) => state.cart.items);
  // const [button, setbutton] = useState(true);
  const slector = useSelector((state) => state.products.items);
  return (
    <section className="min-h-screen bg-background p-6">
      <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-20 gap-6">
        {slector.map((product) => (
          <div
            key={product.id}
            className="bg-card p-4 w-fit rounded-lg shadow-md"
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
            {cartproduct.find((cartitem) => cartitem.id === product.id) ? (
              <RemoveItemButton
                onClick={() => dispatch(removeitem(product))}
                text="Remove item"
              />
            ) : (
              <AddItemButton
                onClick={() => dispatch(additem(product))}
                text="Add to cart"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
