import { useDispatch, useSelector } from "react-redux";
import { additem, removeitem } from "../redux/slice";
import { useEffect, useState } from "react";
import { fetchProducts } from "../redux/dummyproducts";
import {
  RemoveItemButton,
  AddItemButton,
  Buttonn,
} from "../Componenets/Button.jsx";
import { useNavigate } from "react-router-dom";
import SearchFunclity from "../Componenets/SearchFunclity.jsx";

export default function Product() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const cartproduct = useSelector((state) => state.cart.items);
  const slector = useSelector((state) => state.products.items);
  const handleItemDetails = (id) => {
    if (!id) {
      return;
    }

    navigation(`/products/${id}`);
  };
  return (
    <section className="min-h-screen flex flex-col mt-20 justify-center gap-3 bg-background p-6">
      <div className="w-full">
        <SearchFunclity />
      </div>
      <hr className="mt-5" />
      <hr />
      <div className="flex flex-col mt-10">
        <div>
          <h1 className="lg:text-2xl mb-5 font-bold">All items </h1>
        </div>
        <div className="grid grid-cols-3 max-sm:grid-cols-1  gap-6">
          {slector.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-card p-4 w-fit rounded-lg shadow-md"
            >
              <div>
                <Buttonn
                  onClick={() => handleItemDetails(product.id)}
                  className="cursor-pointer"
                >
                  <img
                    src={product.thumbnail}
                    className="rounded-lg drop-shadow-lg hover:scale-105 transition-all duration-300"
                    alt={product.name}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300";
                    }}
                  />
                </Buttonn>
              </div>
              <hr />
              <div className="flex flex-col items-start  my-2">
                <h2 className="text-xl text-foreground font-semibold">
                  {product.title}
                </h2>
                <h1 className="font-bold text-foreground">
                  Rating : {product.rating}
                </h1>
                <h3 className=" text-justify text-foreground">
                  Click on image to view more details
                </h3>
                <p className="text-nuted bg-inner-card py-1 mt-1 px-2 rounded-lg">
                  ₹ {product.price}
                </p>
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
      </div>
    </section>
  );
}
