import { useState } from "react";
import { Buttonn } from "../Components/Button";
import { Link } from "react-router-dom";
const Footer = () => {
  const [email, setemail] = useState("")
  const handelSubmitMail =()=>{
   setemail("")
  }
  return (
    <footer className="bg-card w-fulltext-foreground border-t border-border">
      {/* Top Section */}
      <div className="w-full mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold ">
            🛍️<span className="text-accent">MyShop</span>
          </h2>
          <p className="mt-3 text-sm text-muted leading-relaxed">
            Your one-stop destination for quality products, best prices, and
            fast delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <div className="space-y-2 flex flex-col text-sm text-muted">
            <Link to="/" className="hover:text-primary cursor-pointer">
              Home
            </Link>
            <Link to="/oroducts" className="hover:text-primary cursor-pointer">
              Products
            </Link>
            <Link to="/cart" className="hover:text-primary cursor-pointer">
              Cart
            </Link>
            <Link to="/" className="hover:text-primary cursor-pointer">
              Checkout
            </Link>
          </div>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-semibold mb-4">
            Customer Support
          </h3>
          <div className="space-y-2 flex flex-col text-sm text-muted">
            <Link className="hover:text-primary cursor-pointer">
              Help Center
            </Link>
            <Link className="hover:text-primary cursor-pointer">Returns</Link>
            <Link className="hover:text-primary cursor-pointer">Shipping</Link>
            <Link
              to="/privacy-policy"
              className="hover:text-primary cursor-pointer"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm text-muted mb-3">
            Subscribe to get special offers & updates.
          </p>

          <div className="flex flex-col gap-2">
            <input
              type="text"
              value={email}
              onChange={(e)=>setemail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-lg bg-inner-card
                         border border-border outline-none
                         focus:ring-2 focus:ring-primary"
            />
            <Buttonn text="Subscribe" onClick={handelSubmitMail} className="px-4 bg-accent py-2" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-4 px-6">
        <div
          className="max-w-7xl mx-auto flex flex-col sm:flex-row
                        items-center justify-between gap-2 text-sm text-muted"
        >
          <p>© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
          <p className="flex gap-4">
            <span className="hover:text-primary cursor-pointer">Terms</span>
            <span className="hover:text-primary cursor-pointer">Privacy</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
