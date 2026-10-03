import Navbar from "../components/Navbar";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="blog-page">
        <Blog />
      </main>

      <Footer />
    </>
  );
}

export default BlogPage;