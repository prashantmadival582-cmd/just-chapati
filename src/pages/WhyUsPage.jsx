import Navbar from "../components/Navbar";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import useScrollReveal from "../hooks/useScrollReveal";

function WhyUsPage() {
  useScrollReveal();

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "90px" }}>
        <WhyChooseUs />
      </main>

      <Footer />
    </>
  );
}

export default WhyUsPage;