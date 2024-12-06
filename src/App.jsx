import Navbar from "./Navbar";
import About from "./screens/About";
import People from "./screens/People";
import Footer from "./Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//test
function App() {
  return (
    <div class=" m-[20px]">
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/people" element={<People />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
