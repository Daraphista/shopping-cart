import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Products from './routes/Products';
import Cart from './routes/Cart';
import { useEffect, useState } from "react";

const App = () => {

  const [products, setProducts] = useState([]);

  // state to check if data is loaded
  const [isLoaded, setIsLoaded] = useState(false);

  // state to store errors
  const [error, setError] = useState(null);

  // useEffect hook makes API call for fake products only when App.js mounts
  useEffect(() => {
    (async () => {
      try {
        // fetch both women's and men's clothing responses
        const [clothingWomenResponse, clothingMenResponse] = await Promise.all([
          fetch("https://fakestoreapi.com/products/category/women's clothing"),
          fetch("https://fakestoreapi.com/products/category/men's clothing"),
        ])

        // filter out the promise
        const clothingWomenProducts = await clothingWomenResponse.json()
        const clothingMenProducts = await clothingMenResponse.json()

        // set products with the filtered promise
        setProducts([...clothingWomenProducts, ...clothingMenProducts]);
        setIsLoaded(true);
      } catch (error) {
        // set error if there is any
        setError(error);
        setIsLoaded(true);
      }
    })();
  }, [])

  // shopping cart state to store items added to cart
  const [shoppingCart, setShoppingCart] = useState([]);
  // function to add item to cart
  const addToCart = (item) => {
    setShoppingCart([...shoppingCart, item]);
  }

  // function to handle change
  const handleChange = (itemObject) => {
    const index = shoppingCart.indexOf(itemObject);

    // create shallow copy of shoppingCart array
    const shoppingCartCopy = shoppingCart;
    // replace itemObject with the mutated one in shoppingCartCopy
    shoppingCartCopy[index] = itemObject;

    setShoppingCart(shoppingCartCopy);
  }

  return (
    <div className="flex flex-col h-[100vh] justify-stretch">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Create url paths with their corresponding components */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={
            <Products 
              isLoaded={isLoaded} 
              products={products} 
              error={error}
              addToCart={addToCart}
            />
          } />
          <Route path="/cart" element={
            <Cart 
              items={shoppingCart}
              handleChange={handleChange}
            />
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
