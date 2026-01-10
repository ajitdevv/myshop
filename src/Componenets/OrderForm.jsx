import { removeallitems } from "../redux/slice";
import { ButtonN } from "./Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const OrderForm = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const OrderSuccess =()=> {
        localStorage.clear();
        dispatch(removeallitems());
        Navigate("/products");
    }

  return (
    <div className="bg-card w-full lg:w-[40%] text-foreground px-4 pb-4 pt-6">
      <form action="" className="flex flex-col w-full gap-4 ">
        <div className="flex gap-5 ">
          <input
            className="bg-inner-card rounded-xl w-[50%] p-2"
            type="text"
            required
            placeholder="First Name"
          />
          <input
            className="bg-inner-card rounded-xl w-[45%] p-2"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="bg-inner-card rounded-xl p-2"
          type="text"
          required
          placeholder="Enter your address"
        />
        <div className="flex gap-5">
          <input
            className="bg-inner-card rounded-xl w-[50%] p-2"
            type="number"
            required
            placeholder="Enter your number"
          />
          <input
            className="bg-inner-card rounded-xl w-[45%] p-2"
            type="number"
            required
            placeholder="Pincode"
          />
        </div>
        <select required name="payment type" id="pay" className="bg-inner-card rounded-xl p-2">
          <option disabled>Select Payment Method</option>
          <option value="cash">Cash On Delivery</option>
          <option value="online">Online Payment</option>
          <option value="Credit card">Credit Card</option>
          <option value="Debit card">Debit Card</option>
        </select>
        <ButtonN onClick={OrderSuccess} text="Place Order" />
      </form>
    </div>
  );
};

export default OrderForm;
