import { useState } from "react";

const testimonials = [
  {
    name: "Ananya Rao",
    location: "Bengaluru",
    rating: 5,
    text: "The chapatis are soft, fresh and taste just like homemade.",
  },
  {
    name: "Rahul Shetty",
    location: "Mangaluru",
    rating: 5,
    text: "Really good taste and freshness. Will definitely order again.",
  },
  {
    name: "Priya Nair",
    location: "Bengaluru",
    rating: 5,
    text: "Very convenient and tasty. Perfect for a quick home-style meal.",
  },
  {
    name: "Vikram Kumar",
    location: "Mysuru",
    rating: 4,
    text: "Loved the taste. The chapatis were soft and fresh.",
  },
  {
    name: "Sneha Patil",
    location: "Hubballi",
    rating: 5,
    text: "Simple, fresh and delicious. Feels like food made at home.",
  },
  {
    name: "Arjun Rao",
    location: "Bengaluru",
    rating: 5,
    text: "The chapatis went really well with our curry. Very tasty.",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  const current = testimonials[active];

  const nextTestimonial = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setActive(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <main className="testimonials-page">

      {/* Header */}
      <section className="testimonials-hero">
        <div className="container">
          <div className="testimonials-hero-content">

            <span className="section-label">
              CUSTOMER REVIEWS
            </span>

            <h1>
              What our customers
              <br />
              <em>say.</em>
            </h1>

          </div>
        </div>
      </section>


      {/* Featured Review */}
      <section className="testimonial-feature">
        <div className="container">

          <div className="testimonial-card">

            <div className="testimonial-rating">
              {"★".repeat(current.rating)}
            </div>

            <p className="testimonial-text">
              “{current.text}”
            </p>

            <div className="testimonial-person">

              <div className="testimonial-avatar">
                {current.name.charAt(0)}
              </div>

              <div>
                <h3>{current.name}</h3>
                <span>{current.location}</span>
              </div>

            </div>

            <div className="testimonial-controls">

              <button
                onClick={previousTestimonial}
                aria-label="Previous review"
              >
                ←
              </button>

              <div className="testimonial-dots">

                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={active === index ? "active" : ""}
                    onClick={() => setActive(index)}
                    aria-label={`Review ${index + 1}`}
                  />
                ))}

              </div>

              <button
                onClick={nextTestimonial}
                aria-label="Next review"
              >
                →
              </button>

            </div>

          </div>

        </div>
      </section>


    </main>
  );
}

export default Testimonials;