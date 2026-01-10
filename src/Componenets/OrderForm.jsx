import { useState } from "react";
import { removeallitems } from "../redux/slice";
import { ButtonN } from "./Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SuccessPopup from "./SuccessPopup";
import OrderProduct from "./OrderProduct";
const OrderForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    mobile: "",
    pincode: "",
    payment: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Regex rules
  const regex = {
    firstName: /^[A-Za-z]{2,}$/,
    lastName: /^[A-Za-z\s]{2,}$/,
    address: /^[A-Za-z0-9\s,.-/]{5,}$/,
    mobile: /^[6-9]\d{9}$/,
    pincode: /^[1-9][0-9]{5}$/,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const [showSuccess, setShowSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!regex.firstName.test(form.firstName))
      newErrors.firstName = "Invalid first name";

    if (!regex.lastName.test(form.lastName))
      newErrors.lastName = "Invalid last name";

    if (!regex.address.test(form.address))
      newErrors.address = "Invalid address";

    if (!regex.mobile.test(form.mobile))
      newErrors.mobile = "Invalid mobile number";

    if (!regex.pincode.test(form.pincode))
      newErrors.pincode = "Invalid pincode";

    if (!form.payment) newErrors.payment = "Select payment method";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowSuccess(true);

      setTimeout(() => {
        localStorage.clear();
        dispatch(removeallitems());
        navigate("/products");
      }, 5000);
    }
  };

  return (
   
      <div className=" w-full lg:w-[50%] text-foreground mr-2">
        {showSuccess && <SuccessPopup />}
        <form onSubmit={handleSubmit} className="flex bg-card mt-10 px-4 rounded-xl py-4 flex-col w-full gap-4">
          {/* First & Last Name */}
          <div className="flex gap-5">
            <div className="w-[50%]">
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="bg-inner-card rounded-xl w-full p-2"
                type="text"
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="text-danger text-sm">{errors.firstName}</p>
              )}
            </div>

            <div className="w-[45%]">
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="bg-inner-card rounded-xl w-full p-2"
                type="text"
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="text-danger text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Address */}
          <div>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              className="bg-inner-card rounded-xl p-2 w-full"
              type="text"
              placeholder="Enter your address"
            />
            {errors.address && (
              <p className="text-danger text-sm">{errors.address}</p>
            )}
          </div>

          {/* Mobile & Pincode */}
          <div className="flex gap-5">
            <div className="w-[50%]">
              <input
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                className="bg-inner-card rounded-xl w-full p-2"
                type="text"
                placeholder="Enter your number"
              />
              {errors.mobile && (
                <p className="text-danger text-sm">{errors.mobile}</p>
              )}
            </div>

            <div className="w-[45%]">
              <input
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                className="bg-inner-card rounded-xl w-full p-2"
                type="text"
                placeholder="Pincode"
              />
              {errors.pincode && (
                <p className="text-danger text-sm">{errors.pincode}</p>
              )}
            </div>
          </div>

          {/* Payment */}
          <div>
            <select
              name="payment"
              value={form.payment}
              onChange={handleChange}
              className="bg-inner-card rounded-xl p-2 w-full"
            >
              <option disabled value="">
                Select Payment Method
              </option>
              <option value="cash">Cash On Delivery</option>
              <option value="online">Online Payment</option>
              <option value="credit">Credit Card</option>
              <option value="debit">Debit Card</option>
            </select>
            {errors.payment && (
              <p className="text-danger text-sm">{errors.payment}</p>
            )}
          </div>

          {/* Submit */}
          <ButtonN type="submit" text="Place Order" />
        </form>
      </div>
    
  );
};

export default OrderForm;
