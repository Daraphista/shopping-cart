import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Products from './routes/Products';
import Cart from './routes/Cart';
import { useEffect, useState } from "react";

const App = () => {

  const [products, setProducts] = useState([]);

  // useEffect initial render...
  useEffect(() => {
    // async IIFE...
    (async() => {
      // fetch raw data with API call...
      const data = await fetch('https://fakestoreapi.com/products?limit=5')
      // translate data into an array of products...
      const fetchedProducts = data.json();
      // set products with array of products
      setProducts(fetchedProducts);
    })();
  }, [])

  return (
    <div className="flex flex-col h-[100vh] justify-stretch">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Create url paths with their corresponding components */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
