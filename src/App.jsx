import Header from "./Pages/header.jsx";
import Product from "./Pages/Product.jsx";
import Cartitem from "./Pages/Cartitem.jsx";
import Cartlayouts from "./layouts/cartlayouts.jsx";
import OrderPage from "./Pages/Order.jsx";
import ProductDetail from "./Componenets/ProductDetail.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ProductDetailLayout from "./layouts/ProductDetailLayout.jsx";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cartlayouts />}>
          <Route index element={<Cartitem />} />
          <Route path="order" element={<OrderPage />} />
        </Route>
        <Route path="/products" element={<ProductDetailLayout />}>
          <Route index element={<Product />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
