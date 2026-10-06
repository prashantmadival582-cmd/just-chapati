import { useState } from "react";

const faqData = [
  {
    question: "What products does Just Chapati offer?",
    answer:
      "We offer fresh, homemade-style products including chapati, parotta, sanna, poori, kuboos, idiyappam and dosa.",
  },
  {
    question: "Are your products freshly prepared?",
    answer:
      "Yes. Our products are prepared with a focus on freshness, quality and homemade taste.",
  },
  {
    question: "How can I place an order?",
    answer:
      "Browse our products, add your favorites to the cart and place your order through our website.",
  },
  {
    question: "Do you provide home delivery?",
    answer:
      "Yes. Delivery is available depending on your location and our delivery coverage.",
  },
  {
    question: "How should I store the products?",
    answer:
      "Please follow the storage instructions provided with your order to maintain the best freshness and taste.",
  },
  {
    question: "How can I contact Just Chapati?",
    answer:
      "You can contact us through the Contact section on our website. Our team will be happy to help.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">

        {/* Heading */}
        <div className="faq-heading">

          <div>
            <span className="section-label">
              FAQ
            </span>

            <h2>
              Frequently asked
              <br />
              <em>questions.</em>
            </h2>
          </div>

          <p>
            Quick answers about our food, ordering
            and delivery.
          </p>

        </div>


        {/* FAQ List */}
        <div className="faq-list">

          {faqData.map((faq, index) => (

            <div
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >

                <span>{faq.question}</span>

                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>

              </button>


              <div className="faq-answer">

                <div className="faq-answer-inner">
                  <p>{faq.answer}</p>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;