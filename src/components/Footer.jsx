import footerLogo from "../assets/footer-logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <img
              src={footerLogo}
              alt="Just Chapati"
            />
          </a>

          <h3>Just Chapati</h3>

          <p>
            Experience the warmth of homemade goodness delivered to your
            doorstep. We are dedicated to crafting freshly made whole wheat
            chapatis with love. Savor the wholesome taste of tradition,
            conveniently brought to you. Your journey to delicious and
            nutritious meals starts here.
          </p>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h4>Contact Info</h4>

          <a href="tel:+918904070407">
            ☏ &nbsp;+91 89040 70407
          </a>

          <a href="tel:+919035042208">
            ☏ &nbsp;+91 90350 42208
          </a>

          <a href="mailto:betterhalf@justchapati.com">
            ✉ &nbsp;betterhalf@justchapati.com
          </a>
        </div>

        {/* Categories */}
        <div className="footer-column">
          <h4>Categories</h4>

          <a href="#about">About Us</a>

          <a href="#products">Order Now</a>

          {/* Social Links */}
          <div className="social-links">
            <a
              href="#facebook"
              aria-label="Facebook"
            >
              f
            </a>

            <a
              href="#instagram"
              aria-label="Instagram"
            >
              ◎
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;