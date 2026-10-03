import { Link } from "react-router-dom";
import aboutImage from "../assets/about-chapati.png";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container about-container">

        {/* About Image */}
        <div className="about-image reveal-left">
          <img
            src={aboutImage}
            alt="Fresh traditional Indian food"
            loading="lazy"
          />

          <div className="experience-card">
            <strong>100%</strong>

            <span>
              Homemade
              <br />
              Taste
            </span>
          </div>
        </div>

        {/* About Content */}
        <div className="about-content reveal-right">
          <span className="section-label">
            OUR STORY
          </span>

          <h2>
            The Taste of Home,
            <br />
            <span>Made Simple.</span>
          </h2>

          <p>
            At Just Chapati, we believe that good food should feel like home.
            Our goal is to bring fresh, delicious and convenient Indian food
            to your everyday table.
          </p>

          <p>
            From soft chapatis to delicious parottas and traditional
            idiyappam, every product is prepared with care and attention
            to quality.
          </p>

          <Link to="/contact" className="text-btn">
            Discover Our Story →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default About;