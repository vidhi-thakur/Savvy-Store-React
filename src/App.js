import "./App.css";

// router
import { Link, Routes, Route, } from "react-router-dom";

// local components
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer'

// pages
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Wishlist from "./pages/wishlist/Wishlist";
import Product from "./pages/product/Product";
import CartManagement from "./pages/cart-management/CartManagement";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path='/product' element={<Product />} />
        <Route path="/cart-management" element={<CartManagement />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
