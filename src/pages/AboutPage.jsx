import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import useScrollReveal from "../hooks/useScrollReveal";

import justChapatiVideo from "../assets/justchapati-video.mp4";

function AboutPage() {
  useScrollReveal();

  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* About Section */}
        <About />

        {/* Brand Video */}
        <section className="about-video-section">
          <div className="container">

            <div className="section-heading about-video-heading reveal">

              <p className="section-label">
                THE JUST CHAPATI STORY
              </p>

              <h2>
                Homemade Goodness,
                <br />
                <span>Made With Love.</span>
              </h2>

              <p>
                Discover the freshness, care and homemade feeling
                behind Just Chapati.
              </p>

            </div>

            <div className="about-video-wrapper reveal">

              <video
                className="about-video-player"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source
                  src={justChapatiVideo}
                  type="video/mp4"
                />

                Your browser does not support the video tag.
              </video>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default AboutPage;