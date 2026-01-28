import Person from "./components/Person";
import Product from "./components/Product";

const App = () => {
  
  return <div className="">
      <div className="mt-4 mb-2 border p-1 w-50">
      <Person name="Priyabrata" age="24"/>
      </div>
      <div>
          <Product prodName="Headphones" prodPrice={99.99}/>
      </div>

  </div>


}

export default App;