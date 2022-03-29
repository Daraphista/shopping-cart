import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header role="navigation" className="flex justify-evenly items-center bg-black text-pink-500 p-9">
      <h1 className="text-5xl font-bold">Fashion Store</h1>
      <ul className="flex w-[50%] justify-around text-3xl cursor-pointer">
        {/* Create links pointing to corresponding pages/routes */}
        <li>
          <Link to="/shopping-cart/">Home</Link>
        </li>
        <li>
          <Link to="/shopping-cart/products">Products</Link>
        </li>
        <li>
          <Link to="/shopping-cart/cart">Cart</Link>
        </li>
      </ul>
    </header>
  )
}

export default Navbar;