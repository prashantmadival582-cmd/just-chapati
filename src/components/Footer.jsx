import { Link } from "react-router-dom";
import footerLogo from "../assets/footer-logo.png";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="container">

        {/* TOP FOOTER */}
        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">

            <Link
              to="/"
              className="footer-logo"
              aria-label="Just Chapati home"
            >
              <img
                src={footerLogo}
                alt="Just Chapati"
              />
            </Link>

            <p>
              Fresh, soft and homemade-style food,
              made with care and delivered to your table.
            </p>

            {/* SOCIAL ICONS */}
            <div className="social-links">

              <a
                href="#instagram"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="#facebook"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="#youtube"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>

              <a
                href="#linkedin"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>


          {/* QUICK LINKS */}
          <div className="footer-column">

            <h4>Explore</h4>

            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Our Products</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/testimonials">Reviews</Link>
            <Link to="/contact">Contact</Link>

          </div>


          {/* CONTACT */}
          <div className="footer-column footer-contact">

            <h4>Get in Touch</h4>

            <a
              href="tel:+918904070407"
              className="contact-item"
            >
              <span className="contact-icon">
                ☎
              </span>

              <span>
                +91 89040 70407
              </span>
            </a>

            <a
              href="tel:+919035042208"
              className="contact-item"
            >
              <span className="contact-icon">
                ☎
              </span>

              <span>
                +91 90350 42208
              </span>
            </a>

            <a
              href="mailto:betterhalf@justchapati.com"
              className="contact-item"
            >
              <span className="contact-icon">
                ✉
              </span>

              <span>
                betterhalf@justchapati.com
              </span>
            </a>

            <Link
              to="/products"
              className="footer-cta"
            >
              Explore Our Menu
              <span>→</span>
            </Link>

          </div>

        </div>


        {/* BOTTOM FOOTER */}
        <div className="footer-bottom">

          <p>
            © {currentYear} Just Chapati
          </p>

          <p className="footer-made">
            Designed &amp; Developed by{" "}
            <span className="developer-name">
              Austratech
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;