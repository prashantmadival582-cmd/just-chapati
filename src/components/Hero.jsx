import { Link } from "react-router-dom";
import chapatiImage from "../assets/chapati.webp";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Decorative Shapes */}
      <div className="hero-shape shape-one"></div>
      <div className="hero-shape shape-two"></div>

      <div className="container hero-container">

        {/* Hero Content */}
        <div className="hero-content reveal-left">

          <div className="hero-label">
            <span></span>
            FRESH • HOMEMADE • DELICIOUS
          </div>

          <h1>
            Freshly Made
            <br />
            <span>With Love.</span>
          </h1>

          <p>
            Enjoy the taste of homemade goodness without the work.
            Fresh, soft and delicious food delivered right to your doorstep.
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="primary-btn">
              Order Now
              <span>→</span>
            </Link>

            <Link to="/about" className="secondary-btn">
              Explore More
            </Link>
          </div>

          {/* Trust Information */}
          <div className="hero-trust">
            <div className="trust-item">
              <strong>100%</strong>
              <span>Fresh</span>
            </div>

            <div className="trust-line"></div>

            <div className="trust-item">
              <strong>Daily</strong>
              <span>Prepared</span>
            </div>

            <div className="trust-line"></div>

            <div className="trust-item">
              <strong>Home</strong>
              <span>Style</span>
            </div>
          </div>

        </div>

        {/* Hero Image */}
        <div className="hero-image-wrapper reveal-right">

          <div className="hero-image-backdrop"></div>

          <div className="hero-image-frame">
            <img
              src={chapatiImage}
              alt="Fresh homemade chapati"
              className="hero-food-image"
            />
          </div>

          {/* Floating Card 1 */}
          <div className="floating-card card-one">
            <span>✦</span>

            <div>
              <strong>Fresh</strong>
              <small>Every Day</small>
            </div>
          </div>

          {/* Floating Card 2 */}
          <div className="floating-card card-two">
            <span>♥</span>

            <div>
              <strong>Homemade</strong>
              <small>With Love</small>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;