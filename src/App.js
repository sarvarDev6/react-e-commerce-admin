import "./App.css";
import Admin from "./Components/React-JSX/admin";
import { Routes, Route } from "react-router-dom";
import Product from "./Components/React-JSX/product";
import MainSlider from "./Components/React-JSX/mainSlider";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/product" element={<Product />} />
        <Route path="/slider" element={<MainSlider />} />
      </Routes>
    </div>
  );
}

export default App;
