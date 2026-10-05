import Blog from "../components/Blog";
import useScrollReveal from "../hooks/useScrollReveal";

function BlogPage() {
  useScrollReveal();

  return (
    <main className="blog-page">
      <Blog />
    </main>
  );
}

export default BlogPage;