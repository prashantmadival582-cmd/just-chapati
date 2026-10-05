import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import navbarLogo from "../assets/navbar-logo.png";
import ThemeToggle from "./ThemeToggle";

function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  // =========================================
  // CLOSE NAVIGATION
  // =========================================

  const closeNavigation = () => {
    setMenuOpen(false);
    setSearchText("");
  };

  // =========================================
  // TOGGLE MOBILE MENU
  // =========================================

  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);
  };

  // =========================================
  // SEARCH
  // =========================================

  const handleSearch = (event) => {
    event.preventDefault();

    const searchValue = searchText.trim();

    if (!searchValue) {
      return;
    }

    setMenuOpen(false);
    navigate(`/products?search=${encodeURIComponent(searchValue)}`);
    setSearchText("");
  };

  // =========================================
  // NAV LINK CLASS
  // =========================================

  const navLinkClass = ({ isActive }) =>
    isActive ? "active" : "";

  return (
    <header className="navbar">

      {/* =========================================
          NAVBAR MAIN
          ========================================= */}

      <div className="container nav-container">

        {/* =========================================
            LOGO
            ========================================= */}

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

        {/* =========================================
            NAVIGATION
            ========================================= */}

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

        {/* =========================================
            RIGHT SIDE ACTIONS
            ========================================= */}

        <div className="nav-actions">

          {/* =========================================
              SEARCH
              ========================================= */}

          <form
            className="navbar-search"
            onSubmit={handleSearch}
            role="search"
          >
            <span
              className="navbar-search-icon"
              aria-hidden="true"
            >
              ⌕
            </span>

            <input
              type="search"
              value={searchText}
              onChange={(event) =>
                setSearchText(event.target.value)
              }
              placeholder="Search your favourite taste..."
              aria-label="Search menu"
            />

            {searchText && (
              <button
                type="button"
                className="navbar-search-clear"
                onClick={() => setSearchText("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </form>

          {/* =========================================
              CART
              ========================================= */}

          <Link
            to="/cart"
            className="cart-btn"
            onClick={closeNavigation}
            aria-label={
              cartCount > 0
                ? `View cart with ${cartCount} items`
                : "View shopping cart"
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

          {/* =========================================
              LIGHT / DARK MODE
              ========================================= */}

          <ThemeToggle />

          {/* =========================================
              MOBILE MENU
              ========================================= */}

          <button
            type="button"
            className={`menu-btn ${
              menuOpen ? "active" : ""
            }`}
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
    </header>
  );
}

export default Navbar;