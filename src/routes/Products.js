import uniqid from 'uniqid'
import ProductCard from '../components/ProductCard';

const Products = (props) => {
  const { products, isLoaded, error } = props;

  // render Loading screen if data hasn't loaded yet
  if (!isLoaded) {
    return (
      <main 
      data-testid='products'
      className='flex-1 flex justify-center items-center 
      text-3xl text-gray-500'>
        Loading...
      </main>
    )
  // render error if there was an error in fetching data
  } else if (error) {
    return (
      <main 
      data-testid='products'
      className='flex-1 flex justify-center items-center
      text-3xl text-gray-500'>
        Error: {error.message}
      </main>
    )
  // render products if everything is good
  } else {
    return (
      <main 
      className="flex-1 flex justify-center items-center py-6" 
      data-testid="products">
        <div className='grid gap-[2vmax] w-[80%] auto-rows-[450px]
        grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]'
        >
          {products.map((product) => {
            const key = uniqid();
            return <ProductCard 
              product={product} 
              addToCart={props.addToCart} 
              key={key}
            />;
          })}
        </div>
      </main>
    )
  }
}

export default Products;