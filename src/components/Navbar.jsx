import { useState } from "react";
import navbarLogo from "../assets/navbar-logo.png";

function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-container">

        {/* Logo */}
        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          <img
            src={navbarLogo}
            alt="Just Chapati"
            className="navbar-logo"
          />
        </a>

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#products" onClick={closeMenu}>
            Products
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#why-us" onClick={closeMenu}>
            Why Us
          </a>

          <a href="#blog" onClick={closeMenu}>
            Blog
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* Navbar Actions */}
        <div className="nav-actions">

          {/* Search */}
          <button
            type="button"
            className="search-btn"
            aria-label="Search"
          >
            ⌕
          </button>

          {/* Cart */}
          <button
            type="button"
            className="cart-btn"
            aria-label="Shopping cart"
          >
            🛒

            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}
          </button>

          {/* Order Button */}
          <a
            href="#products"
            className="nav-order-btn"
            onClick={closeMenu}
          >
            Order Now
          </a>

          {/* Mobile Menu */}
          <button
            type="button"
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;