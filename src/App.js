import "./App.css";

// local components
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer'
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
