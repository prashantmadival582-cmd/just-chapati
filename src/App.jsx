import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import WhyUsPage from "./pages/WhyUsPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<ProductsPage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/why-us"
          element={<WhyUsPage />}
        />

        <Route
          path="/blog"
          element={<BlogPage />}
        />

        <Route
          path="/blog/:id"
          element={<BlogDetailPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;