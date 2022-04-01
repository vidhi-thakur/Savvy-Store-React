import "./App.css";

// local components
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer'
import CartManagement from "./pages/cart-management/CartManagement";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CartManagement />
      <Footer />
    </div>
  );
}

export default App;
