import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Representation from "../pages/Representation/Representation";
import Manufacturers from "../pages/Manufacturers/Manufacturers";
import Products from "../pages/Products/Products";
import Downloads from "../pages/Downloads/Downloads";
import News from "../pages/News/News";
import Contact from "../pages/Contact/Contact";
import Compliance from "../pages/Compliance/Compliance";
import NotFound from "../pages/NotFound/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/representation" element={<Representation />} />
        <Route path="/manufacturers" element={<Manufacturers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;