const features = [
  {
    icon: "✦",
    title: "Freshly Made",
    text: "Prepared fresh with care for delicious homemade taste.",
  },
  {
    icon: "◆",
    title: "Quality Ingredients",
    text: "Made using carefully selected quality ingredients.",
  },
  {
    icon: "◉",
    title: "Ready to Eat",
    text: "Enjoy delicious food without spending hours in the kitchen.",
  },
  {
    icon: "➜",
    title: "Doorstep Delivery",
    text: "Fresh products delivered conveniently to your doorstep.",
  },
];

function Features() {
  return (
    <section className="why-section" id="why-us">
      <div className="container">

        <div className="section-heading">
          <p className="section-label">WHY CHOOSE US</p>

          <h2>
            Good Food,
            <span> Made Simple.</span>
          </h2>

          <p>
            We make everyday meals easier with fresh, delicious and
            convenient traditional food.
          </p>
        </div>

        <div className="why-grid">
          {features.map((feature) => (
            <div className="why-card" key={feature.title}>

              <div className="why-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;