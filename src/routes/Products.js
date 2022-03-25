import Card from '../components/Card';

const Products = (props) => {
  const { products, isLoaded, error } = props;

  // render Loading screen if data hasn't loaded yet
  if (!isLoaded) {
    return (
      <main className='flex-1 flex justify-center items-center 
      text-3xl text-gray-500'>
        Loading...
      </main>
    )
  // render error if there was an error in fetching data
  } else if (error) {
    return (
      <main className='flex-1 flex justify-center items-center
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
        <div className='
          grid 
          gap-[2vmax] 
          grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] 
          auto-rows-[450px]
          w-[80%]'
        >
          {products.map((product) => {
            return <Card product={product}/>;
          })}
        </div>
      </main>
    )
  }
}

export default Products;