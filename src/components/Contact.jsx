import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Thank you! We will get back to you soon.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container contact-container">

        {/* Contact Information */}
        <div className="contact-info">
          <span className="section-label">GET IN TOUCH</span>

          <h2>
            Let's Talk
            <span> Food.</span>
          </h2>

          <p>
            Have a question, suggestion or want to place an order?
            We'd love to hear from you.
          </p>

          <div className="contact-items">

            {/* Phone 1 */}
            <div className="contact-item">
              <div className="contact-icon">☎</div>

              <div>
                <span>Call Us</span>
                <strong>
                  <a href="tel:+918904070407">
                    +91 89040 70407
                  </a>
                </strong>
              </div>
            </div>

            {/* Phone 2 */}
            <div className="contact-item">
              <div className="contact-icon">☎</div>

              <div>
                <span>Call Us</span>
                <strong>
                  <a href="tel:+919035042208">
                    +91 90350 42208
                  </a>
                </strong>
              </div>
            </div>

            {/* Email */}
            <div className="contact-item">
              <div className="contact-icon">✉</div>

              <div>
                <span>Email Us</span>
                <strong>
                  <a href="mailto:betterhalf@justchapati.com">
                    betterhalf@justchapati.com
                  </a>
                </strong>
              </div>
            </div>

            {/* Location */}
            <div className="contact-item">
              <div className="contact-icon">⌖</div>

              <div>
                <span>Location</span>
                <strong>Karnataka, India</strong>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="form-row">

            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
            </div>

          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>

            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help?"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="form-submit">
            Send Message →
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;