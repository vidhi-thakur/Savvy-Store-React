import "./App.css";

// local components
import Navbar from "./components/navbar/Navbar";
import Wishlist from "./pages/wishlist/Wishlist";
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Wishlist />
      <Footer />
    </div>
  );
}

export default App;
