import Person from "./components/Person";
import Product from "./components/Product";
import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";

const App = () => {
  
  return <div className="">
      <div className="mt-4 mb-2 border p-1 w-50">
      <Person name="Priyabrata" age="24"/>
      </div>
      <div>
          <Product prodName="Headphones" prodPrice={99.99}/>
      </div>

      <div>
          <h4>Conditional Rendering with one prop</h4>
          <Weather temp={26}/>
      </div>

      <div>
          <h4>Conditional Rendering with multiple props</h4>
          <UserStatus isLoggedIn={true} isAdmin={false}/>
      </div>

  </div>


}

export default App;