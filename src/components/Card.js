const Card = (props) => {
  const { product } = props;
  const { image } = product;

  // function that handles click by calling addToCart()
  const handleClick = () => {
    
  }

  return (
    <div className="grid grid-rows-[4fr,_2fr] p-2 min-h-[100%] shadow-lg bg-white rounded-md">
      <div className="flex justify-center">
        <img className="w-[15vmin] object-contain" src={image} alt="lmao"></img>
      </div>
      <div className="grid grid-rows-3 items-center">
        <h1 className="font-bold">{product.title}</h1>
        <p className="text-2xl text-right">{`$${product.price}`}</p>
        <button className="bg-black text-pink-500 h-[100%] rounded-md">Add To Cart</button>
      </div>
    </div>
  )
}

export default Card;