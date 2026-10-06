
import { Link } from "react-router-dom";
import aboutImage from "../assets/about-chapati.png";

const reasons = [
  {
    number: "01",
    title: "Homemade Goodness",
    text: "Taste that reminds you of the comfort and warmth of home.",
  },
  {
    number: "02",
    title: "Fresh Every Day",
    text: "We focus on freshness and quality in everything we prepare.",
  },
  {
    number: "03",
    title: "Easy & Convenient",
    text: "Enjoy delicious food without spending hours in the kitchen.",
  },
  {
    number: "04",
    title: "Made With Care",
    text: "Every product receives attention to quality and preparation.",
  },
];
  
  function About() {
  return (
    <section className="about-section" id="about">

      <div className="container">

        {/* STORY */}
        <div className="about-container">

          <div className="about-image reveal-left">

            <div className="image-wrapper">
              <img
                src={aboutImage}
                alt="Fresh homemade Indian food"
                loading="lazy"
              />
            </div>

            <div className="experience-card">
              <span className="badge-number">100%</span>

              <span className="badge-text">
                Made with
                <br />
                love
              </span>
            </div>

          </div>


          <div className="about-content reveal-right">

            <span className="section-label">
              OUR STORY
            </span>

            <h1>
              Food that feels
              <br />
              <em>like home.</em>
            </h1>

            <p className="about-lead">
              Some food is more than just a meal. It brings back memories,
              brings people together, and makes an ordinary day feel special.
            </p>

            <p>
              At Just Chapati, we bring that feeling to your everyday table.
              From soft chapatis and flaky parottas to traditional favourites,
              every product is made with care, freshness and a love for
              authentic taste.
            </p>

            <Link to="/contact" className="text-btn">
              <span>Discover Our Story</span>
              <span>↗</span>
            </Link>

          </div>

        </div>


        {/* WHY US */}
        <div className="about-why">

          <div className="about-why-heading reveal">

            <div>
              <span className="section-label">
                WHY JUST CHAPATI
              </span>

              <h2>
                Simple food.
                <br />
                <em>Beautifully made.</em>
              </h2>
            </div>

            <p>
              We keep things simple — honest ingredients, thoughtful
              preparation and the familiar taste of food made with care.
            </p>

          </div>


          <div className="why-grid">

            {reasons.map((reason) => (
              <article
                className="why-item stagger-item"
                key={reason.number}
              >

                <span className="why-number">
                  {reason.number}
                </span>

                <div className="why-content">
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>

                <span className="reason-arrow">
                  ↗
                </span>

              </article>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;