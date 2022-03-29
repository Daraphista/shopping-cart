import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import uniqid from 'uniqid';
import CartItemCard from "../components/CartItemCard";

const Cart = (props) => {
  const [items, setItems] = useState(props.items);

  // function to lift change to Cart (current component) state
  const liftChange = (itemObject, value) => {
    const index = items.indexOf(itemObject); 

    const itemObjectCopy = { ...itemObject };
    itemObjectCopy.quantity = value;

    const itemsCopy = [ ...items ];
    itemsCopy[index] = itemObjectCopy;

    setItems(itemsCopy);
    props.liftChange(itemsCopy); // lifts change to App (parent component) state so that change is still reflected after rerender
  }

  // function to calculate totalPrice
  const calculateTotalPrice = () => {
    let sum = 0;
    
    items.forEach(item => {
      const { price, quantity } = item;
      // multiply item price by quantity
      const totalItemPrice = price * quantity;
      sum += totalItemPrice;
    })
    
    // limit decimal numbers to 2
    return sum.toFixed(2);
  }
  
  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  })

  return (
    <main 
      className="flex-1 flex flex-col items-center py-10 gap-6"
      data-testid="cart"
    >
      <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
      <div className="grid gap-6 w-[50%]">
        {items.map(item => {
          return (
            <CartItemCard 
              item={item} 
              liftChange={liftChange} 
            />
          )
        })}
      </div>
      <button className="bg-black text-pink-500 text-3xl rounded-lg
        p-6 w-[50%]"
      >
        {`Checkout $${totalPrice}`}
      </button>
    </main>
  )
}

export default Cart