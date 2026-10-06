import Hero from "../components/Hero";
import About from "../components/About";
import VideoSection from "../components/VideoSection";
import Products from "../components/Products";
import Testimonials from "../pages/Testimonials";
import FAQ from "./FAQ";

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

     

      <Testimonials />

      <FAQ />

    </main>
  );
}

export default Home;