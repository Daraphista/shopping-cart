const Home = () => {
  return (
    <main 
      data-testid="home" 
      className="flex-1 flex justify-center items-center bg-home-background"
    >
      <div className="p-6 bg-white rounded-xl">
        <h1 className="text-5xl font-bold">
          Welcome to the <span className="text-pink-500">Fashion Store</span>!
        </h1>
        <p className="text-2xl">The easiest and most effective place to max out your boyfriend's credit card!</p>
      </div>
    </main>
  )
}

export default Home;