
import { Link } from "react-router-dom";
import footerLogo from "../assets/footer-logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="Just Chapati home">
              <img src={footerLogo} alt="Just Chapati" />
            </Link>

            <h3>Just Chapati</h3>

            <p>
              Experience the warmth of homemade goodness.
              We craft fresh, wholesome chapatis with love,
              bringing the authentic taste of tradition
              straight to your doorstep.
            </p>

            <div className="social-links">
              <a
                href="#facebook"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span aria-hidden="true">f</span>
              </a>

              <a
                href="#instagram"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span aria-hidden="true">◎</span>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-column">
            <h4>Quick Links</h4>

            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Our Products</Link>
            <Link to="/why-us">Why Choose Us</Link>
            <Link to="/blog">Our Blog</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          {/* CONTACT INFO */}
          <div className="footer-column footer-contact">
            <h4>Get in Touch</h4>

            <a href="tel:+918904070407" className="contact-item">
              <span className="contact-icon" aria-hidden="true">☎</span>
              <span>+91 89040 70407</span>
            </a>

            <a href="tel:+919035042208" className="contact-item">
              <span className="contact-icon" aria-hidden="true">☎</span>
              <span>+91 90350 42208</span>
            </a>

            <a
              href="mailto:betterhalf@justchapati.com"
              className="contact-item"
            >
              <span className="contact-icon" aria-hidden="true">✉</span>
              <span>betterhalf@justchapati.com</span>
            </a>

            <Link to="/products" className="footer-cta">
              Explore Our Menu
              <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="footer-bottom">
          <p>
            © {currentYear} Just Chapati. All rights reserved.
          </p>

          <p className="footer-made">
            Developed &amp; Designed by{" "}
            <span className="developer-name">Austratech</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;