import Hero from "../components/Hero";
import About from "../components/About";
import VideoSection from "../components/VideoSection";
import Products from "../components/Products";
import PromoBanner from "../components/PromoBanner";
import Contact from "../components/Contact";

import useScrollReveal from "../hooks/useScrollReveal";

function Home({ onAddToCart }) {
  useScrollReveal();

  return (
    <main>

      <Hero />

      <About />

      <VideoSection />

      <Products
        onAddToCart={onAddToCart}
      />

    

      <PromoBanner />

      <Contact />

    </main>
  );
}

export default Home;