import Contact from "../components/Contact";
import useScrollReveal from "../hooks/useScrollReveal";

function ContactPage() {
  useScrollReveal();

  return (
    <main className="contact-page">
      <Contact />
    </main>
  );
}

export default ContactPage;