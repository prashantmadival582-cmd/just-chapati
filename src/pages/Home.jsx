import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import WhyChooseUs from "../components/WhyChooseUs";
import PromoBanner from "../components/PromoBanner";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((previousItems) => [
      ...previousItems,
      product,
    ]);

    alert(`${product.name} added to cart!`);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar cartCount={cartItems.length} />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Products Section */}
        <Products onAddToCart={handleAddToCart} />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Promotional Banner */}
        <PromoBanner />

        {/* Blog Section */}
        <Blog />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;