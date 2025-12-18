import { useDispatch } from "react-redux";
import Header from "./components/header.jsx";
import Product from "./components/Product.jsx";
import { removeallitems } from "./redux/slice.js";
 function App() {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div className="w-full h-full flex justify-center items-start bg-gray-800">
        <button onClick={()=>dispatch(removeallitems(0))} className="bg-gray-900  hover:bg-gray-950 mt-15  text-white px-4 py-2 rounded">
          clear cart
        </button>
      </div>
      <Product />
    </>
  );
}
export default App;
