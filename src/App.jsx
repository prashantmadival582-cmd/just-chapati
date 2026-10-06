import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ContactPage from "./pages/ContactPage";

function App() {
  /* =====================================================
     CART STATE
     ===================================================== */

  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("just-chapati-cart");

      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error loading cart:", error);
      return [];
    }
  });

  /* =====================================================
     SAVE CART TO LOCAL STORAGE
     ===================================================== */

  useEffect(() => {
    try {
      localStorage.setItem(
        "just-chapati-cart",
        JSON.stringify(cartItems)
      );
    } catch (error) {
      console.error("Error saving cart:", error);
    }
  }, [cartItems]);

  /* =====================================================
     ADD TO CART
     ===================================================== */

  const handleAddToCart = (product) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return previousItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...previousItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  /* =====================================================
     INCREASE QUANTITY
     ===================================================== */

  const handleIncrease = (productId) => {
    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  /* =====================================================
     DECREASE QUANTITY
     ===================================================== */

  const handleDecrease = (productId) => {
    setCartItems((previousItems) =>
      previousItems
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  /* =====================================================
     REMOVE FROM CART
     ===================================================== */

  const handleRemove = (productId) => {
    setCartItems((previousItems) =>
      previousItems.filter(
        (item) => item.id !== productId
      )
    );
  };

  /* =====================================================
     CLEAR CART
     ===================================================== */

  const handleClearCart = () => {
    setCartItems([]);
  };

  /* =====================================================
     TOTAL CART QUANTITY
     ===================================================== */

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  /* =====================================================
     APP
     ===================================================== */

  return (
    <>
      {/* GLOBAL NAVBAR */}
      <Navbar cartCount={cartCount} />

      {/* ROUTES */}
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <Home
              onAddToCart={handleAddToCart}
            />
          }
        />

        {/* PRODUCTS */}
        <Route
          path="/products"
          element={
            <ProductsPage
              onAddToCart={handleAddToCart}
            />
          }
        />

        {/* CART */}
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onRemove={handleRemove}
              onClearCart={handleClearCart}
            />
          }
        />

        {/* CHECKOUT */}
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              cartItems={cartItems}
              onClearCart={handleClearCart}
            />
          }
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<AboutPage />}
        />

        {/* BLOG */}
        <Route
          path="/blog"
          element={<BlogPage />}
        />

        {/* BLOG DETAIL */}
        <Route
          path="/blog/:id"
          element={<BlogDetailPage />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<ContactPage />}
        />

      </Routes>

      {/* GLOBAL FOOTER */}
      <Footer />
    </>
  );
}

export default App;