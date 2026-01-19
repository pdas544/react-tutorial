import Greet from "./components/Greet";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductInfo from "./components/ProductInfo";
import Lists from "./components/Lists";

const App = () => {
  
  return (
  <section className="container mx-auto p-4 mt-4">
    <Header/>
 
    <Greet />
    <ProductInfo />
      <Lists />

    <Footer/>
  </section>
    );
}

export default App;