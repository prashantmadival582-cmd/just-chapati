import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import VideoSection from "../components/VideoSection";
import Products from "../components/Products";
import WhyChooseUs from "../components/WhyChooseUs";
import PromoBanner from "../components/PromoBanner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import useScrollReveal from "../hooks/useScrollReveal";

function Home() {
  useScrollReveal();

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
      <Navbar cartCount={cartItems.length} />

      <main>
        <Hero />

        <About />

        <VideoSection />

        <Products onAddToCart={handleAddToCart} />

        <WhyChooseUs />

        <PromoBanner />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Home;