import { useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const initialErrors = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // =========================================================
  // VALIDATION
  // =========================================================

  const validateField = (name, value) => {
    const trimmedValue = value.trim();

    switch (name) {
      case "name":
        if (!trimmedValue) {
          return "Please enter your name.";
        }

        if (trimmedValue.length < 2) {
          return "Name must be at least 2 characters.";
        }

        if (trimmedValue.length > 50) {
          return "Name must not exceed 50 characters.";
        }

        if (!/^[A-Za-zÀ-ÿ\s.'-]+$/.test(trimmedValue)) {
          return "Please enter a valid name.";
        }

        return "";

      case "email":
        if (!trimmedValue) {
          return "Please enter your email address.";
        }

        if (
          !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
            trimmedValue
          )
        ) {
          return "Please enter a valid email address.";
        }

        return "";

      case "phone":
        if (!trimmedValue) {
          return "";
        }

        if (!/^[6-9]\d{9}$/.test(trimmedValue)) {
          return "Please enter a valid 10-digit Indian mobile number.";
        }

        return "";

      case "message":
        if (!trimmedValue) {
          return "Please enter your message.";
        }

        if (trimmedValue.length < 10) {
          return "Message must be at least 10 characters.";
        }

        if (trimmedValue.length > 500) {
          return "Message must not exceed 500 characters.";
        }

        return "";

      default:
        return "";
    }
  };

  // =========================================================
  // HANDLE INPUT CHANGE
  // =========================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Phone: allow only numbers and maximum 10 digits
    if (name === "phone") {
      const numericValue = value
        .replace(/\D/g, "")
        .slice(0, 10);

      setFormData((previous) => ({
        ...previous,
        [name]: numericValue,
      }));

      if (touched[name]) {
        setErrors((previous) => ({
          ...previous,
          [name]: validateField(name, numericValue),
        }));
      }

      return;
    }

    // Message: maximum 500 characters
    if (name === "message") {
      const messageValue = value.slice(0, 500);

      setFormData((previous) => ({
        ...previous,
        [name]: messageValue,
      }));

      if (touched[name]) {
        setErrors((previous) => ({
          ...previous,
          [name]: validateField(name, messageValue),
        }));
      }

      return;
    }

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (touched[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: validateField(name, value),
      }));
    }
  };

  // =========================================================
  // HANDLE BLUR
  // =========================================================

  const handleBlur = (event) => {
    const { name, value } = event.target;

    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: validateField(name, value),
    }));
  };

  // =========================================================
  // VALIDATE COMPLETE FORM
  // =========================================================

  const validateForm = () => {
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);

    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    });

    return !Object.values(newErrors).some(
      (error) => error !== ""
    );
  };

  // =========================================================
  // HANDLE SUBMIT
  // =========================================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitStatus("");

    const isValid = validateForm();

    if (!isValid) {
      setSubmitStatus(
        "Please fix the highlighted fields and try again."
      );
      return;
    }

    try {
      setIsSubmitting(true);

      /*
       * FUTURE BACKEND CONNECTION
       *
       * Later you can replace this section with:
       *
       * await fetch("http://localhost:5000/api/contact", {
       *   method: "POST",
       *   headers: {
       *     "Content-Type": "application/json",
       *   },
       *   body: JSON.stringify({
       *     name: formData.name.trim(),
       *     email: formData.email.trim(),
       *     phone: formData.phone.trim(),
       *     message: formData.message.trim(),
       *   }),
       * });
       *
       * Your Node.js + Express server can then
       * handle SMTP email sending.
       */

      // Temporary simulation
      await new Promise((resolve) =>
        setTimeout(resolve, 800)
      );

      setSubmitStatus(
        "Thank you! Your message has been received. We will get back to you soon."
      );

      setFormData(initialFormData);
      setErrors(initialErrors);
      setTouched({});
    } catch (error) {
      console.error("Contact form error:", error);

      setSubmitStatus(
        "Something went wrong. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="container contact-container">

        {/* =====================================================
            CONTACT INFORMATION
            ===================================================== */}

        <div className="contact-info">

          <span className="section-label">
            GET IN TOUCH
          </span>

          <h2 id="contact-heading">
            Let's Talk
            <span> Food.</span>
          </h2>

          <p className="contact-description">
            Have a question, suggestion, or want to place an
            order? We'd love to hear from you.
          </p>

          <div className="contact-info-items">

            {/* PHONE 1 */}

            <a
              href="tel:+918904070407"
              className="contact-info-item"
            >
              <div
                className="contact-info-icon"
                aria-hidden="true"
              >
                ☎
              </div>

              <div className="contact-info-content">
                <span>Call Us</span>
                <strong>+91 89040 70407</strong>
              </div>
            </a>


            {/* PHONE 2 */}

            <a
              href="tel:+919035042208"
              className="contact-info-item"
            >
              <div
                className="contact-info-icon"
                aria-hidden="true"
              >
                ☎
              </div>

              <div className="contact-info-content">
                <span>Call Us</span>
                <strong>+91 90350 42208</strong>
              </div>
            </a>


            {/* EMAIL */}

            <a
              href="mailto:betterhalf@justchapati.com"
              className="contact-info-item"
            >
              <div
                className="contact-info-icon"
                aria-hidden="true"
              >
                ✉
              </div>

              <div className="contact-info-content">
                <span>Email Us</span>
                <strong>
                  betterhalf@justchapati.com
                </strong>
              </div>
            </a>


            {/* LOCATION */}

            <div className="contact-info-item">
              <div
                className="contact-info-icon"
                aria-hidden="true"
              >
                ⌖
              </div>

              <div className="contact-info-content">
                <span>Location</span>
                <strong>Karnataka, India</strong>
              </div>
            </div>

          </div>
        </div>


        {/* =====================================================
            CONTACT FORM
            ===================================================== */}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
        >

          <div className="contact-form-header">
            <span>CONTACT US</span>

            <h3>
              Send us a message
            </h3>

            <p>
              Fill out the form below and our team will
              get back to you.
            </p>
          </div>


          {/* FORM ROW */}

          <div className="form-row">

            {/* NAME */}

            <div
              className={`form-group ${
                errors.name && touched.name
                  ? "has-error"
                  : ""
              }`}
            >
              <label htmlFor="name">
                Name
                <span>*</span>
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your name"
                autoComplete="name"
                maxLength={50}
                aria-invalid={
                  errors.name && touched.name
                    ? "true"
                    : "false"
                }
                aria-describedby={
                  errors.name && touched.name
                    ? "name-error"
                    : undefined
                }
              />

              {errors.name && touched.name && (
                <small
                  id="name-error"
                  className="field-error"
                >
                  {errors.name}
                </small>
              )}
            </div>


            {/* EMAIL */}

            <div
              className={`form-group ${
                errors.email && touched.email
                  ? "has-error"
                  : ""
              }`}
            >
              <label htmlFor="email">
                Email
                <span>*</span>
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your email"
                autoComplete="email"
                maxLength={100}
                aria-invalid={
                  errors.email && touched.email
                    ? "true"
                    : "false"
                }
                aria-describedby={
                  errors.email && touched.email
                    ? "email-error"
                    : undefined
                }
              />

              {errors.email && touched.email && (
                <small
                  id="email-error"
                  className="field-error"
                >
                  {errors.email}
                </small>
              )}
            </div>

          </div>


          {/* PHONE */}

          <div
            className={`form-group ${
              errors.phone && touched.phone
                ? "has-error"
                : ""
            }`}
          >
            <label htmlFor="phone">
              Phone
              <small>(Optional)</small>
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="10-digit mobile number"
              autoComplete="tel"
              inputMode="numeric"
              maxLength={10}
              aria-invalid={
                errors.phone && touched.phone
                  ? "true"
                  : "false"
              }
              aria-describedby={
                errors.phone && touched.phone
                  ? "phone-error"
                  : undefined
              }
            />

            {errors.phone && touched.phone && (
              <small
                id="phone-error"
                className="field-error"
              >
                {errors.phone}
              </small>
            )}
          </div>


          {/* MESSAGE */}

          <div
            className={`form-group ${
              errors.message && touched.message
                ? "has-error"
                : ""
            }`}
          >
            <div className="message-label-row">
              <label htmlFor="message">
                Message
                <span>*</span>
              </label>

              <small>
                {formData.message.length}/500
              </small>
            </div>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="How can we help?"
              rows="5"
              maxLength={500}
              aria-invalid={
                errors.message && touched.message
                  ? "true"
                  : "false"
              }
              aria-describedby={
                errors.message && touched.message
                  ? "message-error"
                  : undefined
              }
            />

            {errors.message && touched.message && (
              <small
                id="message-error"
                className="field-error"
              >
                {errors.message}
              </small>
            )}
          </div>


          {/* STATUS */}

          {submitStatus && (
            <div
              className={`form-status ${
                submitStatus.includes("Thank you")
                  ? "success"
                  : "error"
              }`}
              role="alert"
            >
              {submitStatus}
            </div>
          )}


          {/* SUBMIT */}

          <button
            type="submit"
            className="form-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="submit-spinner"></span>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <span aria-hidden="true">→</span>
              </>
            )}
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;