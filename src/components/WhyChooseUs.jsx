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

function WhyChooseUs() {
  return (
    <section className="why-section" id="why-us">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading reveal">
          <p className="section-label">
            WHY JUST CHAPATI
          </p>

          <h2>
            Good Food Should
            <br />
            <span>Feel Like Home.</span>
          </h2>

          <p>
            Fresh, traditional and convenient food made with care
            for your everyday meals.
          </p>
        </div>

        {/* Reasons */}
        <div className="why-grid">
          {reasons.map((reason) => (
            <div
              className="why-card stagger-item"
              key={reason.number}
            >
              <div className="why-icon">
                {reason.number}
              </div>

              <h3>
                {reason.title}
              </h3>

              <p>
                {reason.text}
              </p>

              <span className="reason-arrow">
                ↗
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;