import { useState } from "react";

import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import useScrollReveal from "../hooks/useScrollReveal";

function ProductsPage() {
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

      <main style={{ paddingTop: "90px" }}>
        <Products onAddToCart={handleAddToCart} />
      </main>

      <Footer />
    </>
  );
}

export default ProductsPage;