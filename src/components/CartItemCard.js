import { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const CartItemCard = (props) => {
  const { item, liftChange } = props;
  const { quantity } = item;

  // function to handle input change
  const handleChange = (e) => {
    // function to turn input value into a number
    const inputValue = Number(e.target.value);
    // lift change to cart (parent component) state
    liftChange(item, inputValue);
  }

  // function to decrement the quantity of the item object
  const decrementQuantity = () => {
    // decrement quantity variable
    const decrementedQuantity = quantity - 1;
    // lift change to cart (parent component) state
    liftChange(item, decrementedQuantity);
  }

  // function to increment the quantity of the item object
  const incrementQuantity = () => {
    // increment quantity variable
    const incrementedQuantity = quantity + 1;
    // lift change to cart (parent component) state
    liftChange(item, incrementedQuantity);
  }

  return (
    <div className="grid grid-rows-[4fr,_2fr] p-2 min-h-[100%] 
      shadow-lg bg-white rounded-md"
    >
      <div className="flex justify-center">
        <img 
          className="w-[15vmin] object-contain"
          src={item.image}
          alt="lmao"
        />
      </div>
      <div className="grid grid-rows-3 items-center">
        <h1 className="font-bold text-center">{item.title}</h1>
        <p className="text-2xl text-right">{`$${item.price}`}</p>
        <form 
          className="flex justify-center gap-2 h-[4vmin]"
          onSubmit={e => {e.preventDefault()}} // prevent form submitting, causing a refresh.
        >
          <button 
            className="bg-black text-pink-500 w-[4vmin] rounded-sm
            flex justify-center items-center disabled:bg-neutral-800"
            type="button" 
            onClick={decrementQuantity}
            disabled={quantity < 1}
          >
            <AiOutlineMinus />
          </button>
          <input 
            className="w-[20%] text-center text-2xl borger-gray-500
            border-[1px] rounded-sm"
            value={quantity} 
            onChange={handleChange} 
          />      
          <button 
            className="bg-black text-pink-500 w-[4vmin] rounded-sm
            flex justify-center items-center"
            type="button" 
            onClick={incrementQuantity}
          >
            <AiOutlinePlus />
          </button>
        </form>
      </div>
    </div>
  )
}

export default CartItemCard;