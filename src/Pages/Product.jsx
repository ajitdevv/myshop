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
            className="flex flex-col bg-card p-4 w-fit rounded-lg shadow-md"
          >
            <div>
              <img
                src={product.thumbnail}
                className="rounded-lg drop-shadow-lg"
                alt={product.name}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300";
                }}
              />
            </div>
            <hr />
            <div className="flex flex-col items-start  my-2">
              <h2 className="text-xl text-foreground font-semibold">
                {product.title}
              </h2>
              <h1 className="font-bold text-foreground">
                reating : {product.rating}
              </h1>
              <h3 className=" text-justify text-foreground">{product.description}</h3>
              <p className="text-nuted bg-inner-card py-1 mt-1 px-2 rounded-lg">₹ {product.price}</p>
            </div>
            <hr />
            <div>
              {cartproduct.find((cartitem) => cartitem.id === product.id) ? (
                <RemoveItemButton
                  onClick={() => dispatch(removeitem(product))}
                  className="w-[95%]"
                  text="Remove item"
                />
              ) : (
                <AddItemButton
                  onClick={() => dispatch(additem(product))}
                  className="w-[95%]"
                  text="Add to cart"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
