import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Products from "./pages/products/Products";
import Footer from "./components/footer/Footer";
import Sustainability from "./pages/sustainability/Sustainability";
import Contact from "./pages/contact/Contact";
import Top from "./components/Top";
import Error from "./pages/Error/Error";
import { useEffect } from "react";
import WOW from "wowjs";

function App() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Top />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainproduct" element={<Products />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
