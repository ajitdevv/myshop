import { useDispatch, useSelector } from "react-redux";
import { additem, removeitem } from "../redux/slice";
import { useEffect, useState } from "react";
import { fetchProducts } from "../redux/dummyproducts";

export default function Product() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const [button, setbutton]=useState(true)
  const slector = useSelector((state)=>state.products.items)
  const item = useSelector((state)=>state.products.items.payload)
  // console.log(slector)
  return (
    <div className="min-h-screen bg-gray-800 p-6">
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-6 mt-8">
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
              <button
                onClick={() => dispatch(additem(item))}
                onClickCapture={()=>setbutton(!button)}
                className={`${button ? "mt-4 font-bold bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" : "mt-4 font-bold bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-400"}`}            >
                {button? "add to cart ":"added in cart"}
              </button>
              
            </div>
          ))}
      </div>
    </div>
  );
}
