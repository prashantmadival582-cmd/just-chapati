import { useState } from "react";
import { Link } from "react-router-dom";

import ricePathiriBlog from "../assets/rice-pathiri-blog.jpg";
import kuboosBlog from "../assets/kuboos-blog.webp";
import pooriBlog from "../assets/poori-blog.jpg";
import ragiRotiBlog from "../assets/ragi-roti-blog.jpg";
import obbattuBlog from "../assets/obbattu-blog.webp";
import spinachChapatiBlog from "../assets/spinach-chapati-blog.webp";
import bajraRotiBlog from "../assets/bajra-roti-blog.webp";
import malabarPathiriBlog from "../assets/malabar-pathiri-blog.webp";
import arabicBreadBlog from "../assets/arabic-bread-blog.webp";
import pooriDoughBlog from "../assets/poori-dough-blog.webp";
import cateringBlog from "../assets/catering-blog.webp";
import jowarRotiBlog from "../assets/jowar-roti-blog.webp";
import sweetsBlog from "../assets/sweets-blog.webp";
import sannaBlog from "../assets/sanna-blog.jpg";
import jowarChapatiBlog from "../assets/jowar-chapati-blog.webp";
import rumaliRotiBlog from "../assets/rumali-roti-blog.jpg";
import readyPooriBlog from "../assets/ready-poori-blog.jpg";
import malabarPorottaBlog from "../assets/malabar-porotta-blog.jpg";
import idiyappamBlog from "../assets/idiyappam-blog.jpg";

const blogs = [
  {
    id: 1,
    title:
      "Rice Pathiri Bangalore – Soft, Authentic, and Comforting",
    image: ricePathiriBlog,
  },
  {
    id: 2,
    title:
      "Kuboos Online Delivery – Tradition Meets Modern Convenience",
    image: kuboosBlog,
  },
  {
    id: 3,
    title:
      "Frozen Poori Bangalore – Fresh, Convenient & Authentic Indian Taste",
    image: pooriBlog,
  },
  {
    id: 4,
    title:
      "Ragi Roti Bangalore – A Healthy and Traditional Flatbread Choice",
    image: ragiRotiBlog,
  },
  {
    id: 5,
    title:
      "Obbattu Home Delivery – Traditional Sweet Delight at Your Doorstep",
    image: obbattuBlog,
  },
  {
    id: 6,
    title:
      "Spinach Chapati Bangalore – Healthy, Fresh & Nutritious Everyday Roti",
    image: spinachChapatiBlog,
  },
  {
    id: 7,
    title:
      "Gluten Free Bajra Roti – Fresh and Healthy Traditional Flatbread",
    image: bajraRotiBlog,
  },
  {
    id: 8,
    title:
      "Best Malabar Pathiri Delivery for Traditional Homemade-Style Food",
    image: malabarPathiriBlog,
  },
  {
    id: 9,
    title:
      "Arabic Bread Bangalore – Fresh and Authentic Everyday Bread",
    image: arabicBreadBlog,
  },
  {
    id: 10,
    title:
      "Poori Dough Bangalore – Freshly Prepared Dough for Soft and Delicious Pooris",
    image: pooriDoughBlog,
  },
  {
    id: 11,
    title:
      "Catering Services Bangalore – Fresh, Authentic, and Reliable Food Solutions",
    image: cateringBlog,
  },
  {
    id: 12,
    title:
      "Jowar Roti Online – Healthy and Wholesome Traditional Food",
    image: jowarRotiBlog,
  },
  {
    id: 13,
    title:
      "Homely Sweets at Your Doorstep – Traditional Sweet Delights",
    image: sweetsBlog,
  },
  {
    id: 14,
    title:
      "Sanna Online Delivery – Fresh, Soft & Authentic Taste at Your Doorstep",
    image: sannaBlog,
  },
  {
    id: 15,
    title:
      "Jowar Chapati Bangalore – Fresh, Wholesome & Perfect for Everyday Meals",
    image: jowarChapatiBlog,
  },
  {
    id: 16,
    title:
      "Ready to Eat Rumali Roti – Freshness, Convenience & Authentic Taste",
    image: rumaliRotiBlog,
  },
  {
    id: 17,
    title:
      "Ready to Fry Poori Bangalore – Fresh, Convenient and Perfect for Every Meal",
    image: readyPooriBlog,
  },
  {
    id: 18,
    title:
      "Ready to Cook Malabar Porotta – Soft, Flaky and Delicious Anytime",
    image: malabarPorottaBlog,
  },
  {
    id: 19,
    title:
      "Fresh, Soft, and Homemade Idiyappam Online Delivered to You",
    image: idiyappamBlog,
  },
];

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  // Number of blogs displayed on each page
  const postsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  // Calculate starting and ending indexes
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  // Get blogs for current page
  const currentBlogs = blogs.slice(startIndex, endIndex);

  // Change page
  const handlePageChange = (page) => {
    setCurrentPage(page);

    // Scroll back to top of blog section
    document
      .getElementById("blog")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section className="blog-section" id="blog">
      <div className="container">

        {/* ================= HEADER ================= */}

        <div className="section-heading blog-section-heading">

          <span className="section-tag">
            OUR BLOG
          </span>

          <h2>
            Stories, Flavours &{" "}
            <span>Traditions</span>
          </h2>

          <p>
            Discover delicious food stories, traditional
            recipes and everything behind the authentic
            taste of Just Chapati.
          </p>

        </div>


        {/* ================= BLOG GRID ================= */}

        <div className="blog-grid">

          {currentBlogs.map((blog) => (
            <article
              className="blog-card"
              key={blog.id}
            >

              {/* Image */}

              <Link
                to={`/blog/${blog.id}`}
                className="blog-image"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                />

                <span className="blog-image-overlay">
                  Read Article →
                </span>
              </Link>


              {/* Content */}

              <div className="blog-content">

                <span className="blog-category">
                  FOOD • STORIES
                </span>

                <h3>
                  {blog.title}
                </h3>

                <p>
                  Discover the traditional taste,
                  authentic flavours and story behind
                  this delicious favourite from
                  Just Chapati.
                </p>

                <Link
                  to={`/blog/${blog.id}`}
                  className="blog-read-btn"
                >
                  Read Article
                  <span>→</span>
                </Link>

              </div>

            </article>
          ))}

        </div>


        {/* ================= PAGINATION ================= */}

        <div className="blog-pagination">

          {/* Previous */}

          <button
            className="pagination-arrow"
            onClick={() =>
              handlePageChange(currentPage - 1)
            }
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            ←
          </button>


          {/* Page Numbers */}

          <div className="pagination-numbers">

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (
              <button
                key={page}
                className={`pagination-number ${
                  currentPage === page
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handlePageChange(page)
                }
              >
                {page}
              </button>
            ))}

          </div>


          {/* Next */}

          <button
            className="pagination-arrow"
            onClick={() =>
              handlePageChange(currentPage + 1)
            }
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            →
          </button>

        </div>


        {/* Page Information */}

        <div className="pagination-info">
          Showing{" "}
          <strong>{startIndex + 1}</strong>
          {" – "}
          <strong>
            {Math.min(endIndex, blogs.length)}
          </strong>
          {" of "}
          <strong>{blogs.length}</strong>
          {" stories"}
        </div>

      </div>
    </section>
  );
}

export default Blog;