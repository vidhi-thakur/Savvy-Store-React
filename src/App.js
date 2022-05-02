import "App.css";
// router
import { Routes, Route } from "react-router-dom";
// local components
import { Footer, Navbar, RequiresAuth } from "components/exportComponents";
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
        <Route path="/wishlist" element={
          <RequiresAuth>
            <Wishlist />
          </RequiresAuth>
        } />
        <Route path='/product' element={<Product />} />
        <Route path="/cart-management" element={
          <RequiresAuth>
            <CartManagement />
          </RequiresAuth>
        } />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
