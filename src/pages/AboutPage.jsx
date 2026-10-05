import About from "../components/About";
import useScrollReveal from "../hooks/useScrollReveal";

function AboutPage() {
  useScrollReveal();

  return (
    <main className="about-page">
      <About />
    </main>
  );
}

export default AboutPage;