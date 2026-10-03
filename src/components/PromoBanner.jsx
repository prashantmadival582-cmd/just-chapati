import { Link } from "react-router-dom";

function PromoBanner() {
  return (
    <section className="promo-section">
      <div className="container promo-container">

        <div className="promo-content">
          <span className="section-label">
            TASTE THE DIFFERENCE
          </span>

          <h2>
            Bring Home the
            <br />
            <span>Taste of Freshness.</span>
          </h2>

          <p>
            Your favorite homemade-style food is just a few clicks away.
          </p>

          <Link to="/products" className="primary-btn promo-btn">
            Order Now →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default PromoBanner;