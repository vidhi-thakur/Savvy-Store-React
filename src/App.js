import "./App.css";

// local components
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer'
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
