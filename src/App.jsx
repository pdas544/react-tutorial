import Greet from "./components/Greet";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  
  return (
  <section class="container mx-auto p-4">
    <Header/>
 
    <Greet />

    <Footer/>
  </section>
    );
}

export default App;