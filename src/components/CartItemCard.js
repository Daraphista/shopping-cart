import { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const CartItemCard = (props) => {
  // destructure props
  const { product, handleChange } = props;

  // state to store initial quantity from quantity property from product prop
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    // add quantity property to object
    product.quantity = quantity;
    handleChange(product);
  })

  // function to increment quantity
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  }
  // function to decrement quantity
  const decrementQuantity = () => {
    setQuantity(quantity - 1);
  }

  return (
    <div className="grid grid-rows-[4fr,_2fr] p-2 min-h-[100%] shadow-lg bg-white rounded-md">
      <div className="flex justify-center">
        <img className="w-[15vmin] object-contain" src={product.image} alt="lmao"></img>
      </div>
      <div className="grid grid-rows-3 items-center">
        <h1 className="font-bold text-center">{product.title}</h1>
        <p className="text-2xl text-right">{`$${product.price}`}</p>
        <form className="flex justify-center gap-2 h-[4vmin]">
          <button 
            className="
            bg-black text-pink-500 w-[4vmin] rounded-sm flex justify-center 
            items-center"
            type="button"
            onClick={decrementQuantity}
            disabled={quantity<1}
          >
            <AiOutlineMinus />
          </button>
          <input 
            className="w-[20%] text-center text-2xl border-gray-500 
            border-[1px] rounded-sm" 
            value={quantity}
            onChange={handleChange}
          />
          <button 
            className="
            bg-black text-pink-500 w-[4vmin] rounded-sm flex justify-center 
            items-center"
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