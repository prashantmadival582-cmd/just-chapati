import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
    title: "Rice Pathiri Bangalore – Soft, Authentic, and Comforting",
    image: ricePathiriBlog,
  },
  {
    id: 2,
    title: "Kuboos Online Delivery – Tradition Meets Modern Convenience",
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

function BlogDetailPage() {
  const { id } = useParams();

  const blog = blogs.find(
    (item) => item.id === Number(id)
  );

  /* =========================================
     BLOG NOT FOUND
     ========================================= */

  if (!blog) {
    return (
      <>
        <Navbar />

        <main className="blog-not-found">
          <div className="container">
            <span className="blog-not-found-icon">✦</span>

            <p className="section-label">
              JUST CHAPATI
            </p>

            <h1>Blog Not Found</h1>

            <p>
              Sorry, we couldn't find the blog you're
              looking for.
            </p>

            <Link
              to="/blog"
              className="blog-back-btn"
            >
              ← Back to Blogs
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      

      <main className="blog-detail-page">

        {/* =========================================
            HERO
            ========================================= */}

        <section className="blog-detail-hero">

          <div className="container">

            <Link
              to="/blog"
              className="blog-back-link"
            >
              <span>←</span>
              Back to Blogs
            </Link>

            <div className="blog-detail-meta">
              <span className="blog-detail-line"></span>

              <span>
                FOOD • STORIES
              </span>

              <span className="blog-detail-line"></span>
            </div>

            <h1>
              {blog.title}
            </h1>

            <p className="blog-detail-intro">
              Discover the traditional taste,
              authentic flavours and comforting
              food experience behind this delicious
              favourite from Just Chapati.
            </p>

            <div className="blog-detail-scroll">
              <span>SCROLL TO READ</span>
              <span className="scroll-arrow">↓</span>
            </div>

          </div>

        </section>

        {/* =========================================
            ARTICLE
            ========================================= */}

        <section className="blog-detail-content">

          <div className="container">

            {/* FEATURED IMAGE */}

            <div className="blog-detail-image">

              <img
                src={blog.image}
                alt={blog.title}
              />

              <div className="blog-image-overlay">
                <span>
                  JUST CHAPATI
                </span>
              </div>

            </div>

            {/* ARTICLE META */}

            <div className="blog-reading-meta">

              <div>
                <span>ARTICLE</span>
                <strong>Food Stories</strong>
              </div>

              <div>
                <span>READ</span>
                <strong>4 min</strong>
              </div>

              <div>
                <span>BY</span>
                <strong>Just Chapati</strong>
              </div>

            </div>

            {/* ARTICLE */}

            <article className="blog-article">

              <p className="blog-article-lead">
                At Just Chapati, we believe that good
                food is more than just a meal. It is
                about tradition, freshness, comfort and
                the memories we create around the
                dining table.
              </p>

              <div className="article-divider"></div>

              <h2>
                A Taste of Tradition
              </h2>

              <p>
                Traditional Indian food has always
                been loved for its authentic flavours
                and simple ingredients. Every dish
                carries its own story, preparation
                style and connection to our food
                culture.
              </p>

              <p>
                Our goal is to bring these familiar
                flavours to your table with care,
                freshness and convenience. Whether
                you are enjoying a quick meal at home
                or sharing food with family and
                friends, every bite should feel
                special.
              </p>

              <div className="article-highlight">
                <span>✦</span>

                <p>
                  Traditional flavours,
                  thoughtfully prepared for
                  modern everyday living.
                </p>
              </div>

              <h2>
                Freshness You Can Taste
              </h2>

              <p>
                We focus on maintaining the quality
                and authentic character of traditional
                food. From preparation to delivery,
                freshness remains an important part
                of the Just Chapati experience.
              </p>

              <p>
                We bring together traditional recipes
                and modern convenience so that you can
                enjoy delicious food without
                compromising on taste.
              </p>

            </article>

            {/* =========================================
                CTA
                ========================================= */}

            <div className="blog-detail-cta">

              <div className="blog-cta-content">

                <span className="blog-cta-label">
                  JUST CHAPATI
                </span>

                <h2>
                  Bring the taste of home
                  <br />
                  to your table.
                </h2>

                <p>
                  Explore our fresh and authentic
                  collection of traditional favourites.
                </p>

              </div>

              <Link
                to="/products"
                className="blog-order-btn"
              >
                Explore Products
                <span>→</span>
              </Link>

            </div>

            {/* =========================================
                BACK
                ========================================= */}

            <div className="blog-detail-footer">

              <Link
                to="/blog"
                className="blog-back-btn"
              >
                <span>←</span>
                Explore More Blogs
              </Link>

            </div>

          </div>

        </section>

      </main>

      
    </>
  );
}

export default BlogDetailPage;