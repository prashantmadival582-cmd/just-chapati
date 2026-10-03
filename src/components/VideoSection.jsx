import idiyappamVideo from "../assets/Idiyappam-Creation-Video.mp4";

function VideoSection() {
  return (
    <section className="video-section">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading video-heading">
          <p className="section-label">MADE WITH CARE</p>

          <h2>
            From Fresh Ingredients
            <br />
            <span>To Your Table.</span>
          </h2>

          <p>
            Take a look at how we prepare our traditional Idiyappam
            with care, freshness and attention to every detail.
          </p>
        </div>

        {/* Video */}
        <div className="video-wrapper">
          <video
            className="video-section-player"
            autoPlay
            muted
            loop
            playsInline
            controls
          >
            <source
              src={idiyappamVideo}
              type="video/mp4"
            />

            Your browser does not support the video tag.
          </video>

          {/* Video Badge */}
          <div className="video-badge">
            <span>✦</span>

            <div>
              <strong>Freshly Prepared</strong>
              <small>Traditional Idiyappam</small>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default VideoSection;