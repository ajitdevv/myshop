import OrderForm from "../Componenets/OrderForm";
import OrderProduct from "../Componenets/OrderProduct.jsx";
function OrderPage() {
  return (
    <section className="mt-17">
      <div></div>

      <div>
        <OrderProduct />
        <OrderForm />
      </div>
    </section>
  );
}
export default OrderPage;
