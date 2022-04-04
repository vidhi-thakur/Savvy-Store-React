import "App.css";
// router
import { Link, Routes, Route, } from "react-router-dom";
// local components
import Navbar from "components/navbar/Navbar";
import Footer from 'components/footer/Footer'

// pages
import {
  CartManagement,
  Signup,
  Home,
  Login,
  Wishlist,
  Product,
  PageNotFound
} from 'pages/exportPages';

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
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
