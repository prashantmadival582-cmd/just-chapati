
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import navbarLogo from "../assets/navbar-logo.png";

function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  // Close mobile menu and search
  const closeNavigation = () => {
    setMenuOpen(false);
    setSearchOpen(false);
    setSearchText("");
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);

    // Close search when menu opens
    setSearchOpen(false);
    setSearchText("");
  };

  // Toggle search
  const toggleSearch = () => {
    setSearchOpen((previous) => !previous);

    // Close mobile menu
    setMenuOpen(false);
    setSearchText("");
  };

  // Handle search
  const handleSearch = (event) => {
    event.preventDefault();

    const searchValue = searchText.trim();

    if (!searchValue) {
      return;
    }

    alert(`Searching for "${searchValue}"`);
  };

  // Clear search
  const clearSearch = () => {
    setSearchText("");
  };

  // Navigation link class
  const navLinkClass = ({ isActive }) =>
    isActive ? "active" : "";

  return (
    <header className="navbar">

      {/* ================= NAVBAR MAIN ================= */}

      <div className="container nav-container">

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          className="logo"
          onClick={closeNavigation}
          aria-label="Just Chapati Home"
        >
          <img
            src={navbarLogo}
            alt="Just Chapati"
            className="navbar-logo"
          />
        </Link>

        {/* ================= NAVIGATION ================= */}

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink
            to="/"
            end
            className={navLinkClass}
            onClick={closeNavigation}
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={navLinkClass}
            onClick={closeNavigation}
          >
            Products
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={closeNavigation}
          >
            About
          </NavLink>

          <NavLink
            to="/why-us"
            className={navLinkClass}
            onClick={closeNavigation}
          >
            Why Us
          </NavLink>

          {/* BLOG → /blog */}

          <NavLink
            to="/blog"
            className={navLinkClass}
            onClick={closeNavigation}
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className={navLinkClass}
            onClick={closeNavigation}
          >
            Contact
          </NavLink>
        </nav>

        {/* ================= RIGHT SIDE ACTIONS ================= */}

        <div className="nav-actions">

          {/* ================= SEARCH BUTTON ================= */}

          <button
            type="button"
            className={`search-btn ${searchOpen ? "active" : ""}`}
            onClick={toggleSearch}
            aria-label={
              searchOpen
                ? "Close search"
                : "Open search"
            }
            aria-expanded={searchOpen}
            aria-controls="search-area"
          >
            <span aria-hidden="true">
              {searchOpen ? "✕" : "⌕"}
            </span>
          </button>

          {/* ================= CART ================= */}

          <Link
            to="/products"
            className="cart-btn"
            onClick={closeNavigation}
            aria-label={
              cartCount > 0
                ? `View products, ${cartCount} items`
                : "View products"
            }
          >
            <span aria-hidden="true">
              🛒
            </span>

            {cartCount > 0 && (
              <span
                className="cart-count"
                aria-label={`${cartCount} items in cart`}
              >
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

          {/* ================= ORDER NOW ================= */}

          <Link
            to="/products"
            className="nav-order-btn"
            onClick={closeNavigation}
          >
            Order Now
          </Link>

          {/* ================= MOBILE MENU ================= */}

          <button
            type="button"
            className={`menu-btn ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            <span aria-hidden="true">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>

        </div>
      </div>

      {/* ================= SEARCH AREA ================= */}

      <div
        id="search-area"
        className={`search-area ${searchOpen ? "open" : ""}`}
        aria-hidden={!searchOpen}
      >
        <form
          className="search-form"
          onSubmit={handleSearch}
          role="search"
        >
          {/* Search icon */}

          <span
            className="search-icon"
            aria-hidden="true"
          >
            ⌕
          </span>

          {/* Search input */}

          <input
            type="search"
            value={searchText}
            onChange={(event) =>
              setSearchText(event.target.value)
            }
            placeholder="Search your favourite taste..."
            aria-label="Search menu"
            autoFocus={searchOpen}
          />

          {/* Clear search */}

          {searchText && (
            <button
              type="button"
              className="clear-search"
              onClick={clearSearch}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}

          {/* Search submit */}

          <button
            type="submit"
            className="search-submit"
          >
            Search
          </button>
        </form>

        {/* Search hint */}

        <p className="search-hint">
          Try searching for{" "}
          <span>Chapati</span>,{" "}
          <span>Parotta</span>,{" "}
          <span>Idiyappam</span>{" "}
          or <span>Poori</span>
        </p>
      </div>

    </header>
  );
}

export default Navbar;
