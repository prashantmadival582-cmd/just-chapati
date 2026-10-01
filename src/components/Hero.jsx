import heroVideo from "../assets/justchapati-video.mp4";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Decorative Shapes */}
      <div className="hero-shape shape-one"></div>
      <div className="hero-shape shape-two"></div>

      <div className="container hero-container">

        {/* Hero Content */}
        <div className="hero-content">
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
            <a href="#products" className="primary-btn">
              Order Now
              <span>→</span>
            </a>

            <a href="#about" className="secondary-btn">
              Explore More
            </a>
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

        {/* Hero Video */}
        <div className="hero-image-wrapper">
          <div className="hero-image-circle"></div>

          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

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