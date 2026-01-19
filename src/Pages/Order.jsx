import OrderForm from "../Components/OrderForm.jsx";
import OrderProduct from "../Components/OrderProduct.jsx";
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
