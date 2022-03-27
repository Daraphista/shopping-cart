import { useState } from "react";
import uniqid from 'uniqid';
import CartItemCard from "../components/CartItemCard";

const Cart = (props) => {

  // state to store initial items props
  const [items, setItems] = useState(props.items);

  // function to handle change
  const handleChange = (itemObject) => {
    const index = items.indexOf(itemObject);

    // create shallow copy of items array
    const itemsCopy = items;
    // replace itemObject with the mutated one in itemsCopy
    itemsCopy[index] = itemObject;

    setItems(itemsCopy);
    setTotalPrice(calculateTotalPrice())
  }

  // function to calculate totalPrice
  const calculateTotalPrice = () => {
    // declare variable to store sum
    let sum = 0;

    // iterate through array with forEach
    items.forEach(item => {
      // destructure price and quantity properties
      const { price, quantity } = item;
      // multiply price by quantity and store in variable
      const totalItemPrice = price * quantity;
      // add totalItemPrice to sum
      sum += totalItemPrice;
    })

    // limit decimal places of sum and return it
    return sum.toFixed(2);
  }

  // state to store total price
  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());

  return (
    <main className="flex-1 flex flex-col items-center py-10 gap-6" data-testid="cart">
      <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
      <div className="grid gap-6 w-[50%]">
        {items.map(item => {
          const key = uniqid();
          return (
            <CartItemCard 
              product={item} 
              handleChange={handleChange}
              key={key}
            />
          )
        })}
      </div>
      <button className="bg-black text-pink-500 text-3xl rounded-lg
        p-6 w-[50%]">
        {`Checkout $${totalPrice}`}
      </button>
    </main>
  )
}

export default Cart