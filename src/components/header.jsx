import AddToCart from "./AddToCart.jsx";
function Header() {
  return (
    <header className="flex fixed w-full flex-row justify-between items-center p-4 bg-blue-600 text-white">
      {/* <!-- Logo --> */}
      <div className="logo">
        <span className="logo-icon">🛍️</span>
        MyShop
      </div>
      {/* <!-- Navigation --> */}
      <div>
        <nav className="flex gap-4 *:hover:underline">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
      {/* <!-- Cart --> */}
      <div>
        <AddToCart />
      </div>
    </header>
  );
}
export default Header;
