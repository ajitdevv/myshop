import Header from "./Pages/header.jsx";
import Product from "./Pages/Product.jsx";
import Cartitem from "./Pages/Cartitem.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/cart" element={<Cartitem />} />
        {/* <Route path="/products" element={<Product />} /> */}
      </Routes>
    </>
  );
}
export default App;
