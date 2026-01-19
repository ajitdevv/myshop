import Header from "./Pages/header.jsx";
import Product from "./Pages/Product.jsx";
import Cartitem from "./Pages/Cartitem.jsx";
import Cartlayouts from "./layouts/cartlayouts.jsx";
import OrderPage from "./Pages/Order.jsx";
import ProductDetail from "./Components/ProductDetail.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import FilterItems from "./Components/FilterItems.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ProductDetailLayout from "./layouts/ProductDetailLayout.jsx";
import Footer from "./Pages/Footer.jsx";
import SideManuContent from "./SideManulayouts/manucontent.jsx";
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
          <Route path="Category/:name" element={<FilterItems />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
