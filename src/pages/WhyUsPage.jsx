import WhyChooseUs from "../components/WhyChooseUs";
import useScrollReveal from "../hooks/useScrollReveal";

function WhyUsPage() {
  useScrollReveal();

  return (
    <main className="why-us-page">
      <WhyChooseUs />
    </main>
  );
}

export default WhyUsPage;