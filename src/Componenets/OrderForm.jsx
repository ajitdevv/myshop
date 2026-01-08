import { ButtonN } from "./Button";

const OrderForm = ()=>{
    return (
        <div>
            <form action="">
              <input type="text" placeholder="Enter your name" />
              <input type="number" placeholder="Enter your number" />
              <input type="text" placeholder="Enter your address" />
              <input type="number" placeholder="Pincode" />
              <ButtonN text="Place Order" />
            </form>
        </div>
    );
}

export default OrderForm;