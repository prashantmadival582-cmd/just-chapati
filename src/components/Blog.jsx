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
    title: "Frozen Poori Bangalore – Fresh, Convenient & Authentic Indian Taste",
    image: pooriBlog,
  },
  {
    id: 4,
    title: "Ragi Roti Bangalore – A Healthy and Traditional Flatbread Choice",
    image: ragiRotiBlog,
  },
  {
    id: 5,
    title: "Obbattu Home Delivery – Traditional Sweet Delight at Your Doorstep",
    image: obbattuBlog,
  },
  {
    id: 6,
    title: "Spinach Chapati Bangalore – Healthy, Fresh & Nutritious Everyday Roti",
    image: spinachChapatiBlog,
  },
  {
    id: 7,
    title: "Gluten Free Bajra Roti – Fresh and Healthy Traditional Flatbread",
    image: bajraRotiBlog,
  },
  {
    id: 8,
    title: "Best Malabar Pathiri Delivery for Traditional Homemade-Style Food",
    image: malabarPathiriBlog,
  },
  {
    id: 9,
    title: "Arabic Bread Bangalore – Fresh and Authentic Everyday Bread",
    image: arabicBreadBlog,
  },
  {
    id: 10,
    title: "Poori Dough Bangalore – Freshly Prepared Dough for Soft and Delicious Pooris",
    image: pooriDoughBlog,
  },
  {
    id: 11,
    title: "Catering Services Bangalore – Fresh, Authentic, and Reliable Food Solutions",
    image: cateringBlog,
  },
  {
    id: 12,
    title: "Jowar Roti Online – Healthy and Wholesome Traditional Food",
    image: jowarRotiBlog,
  },
  {
    id: 13,
    title: "Homely Sweets at Your Doorstep – Traditional Sweet Delights",
    image: sweetsBlog,
  },
  {
    id: 14,
    title: "Sanna Online Delivery – Fresh, Soft & Authentic Taste at Your Doorstep",
    image: sannaBlog,
  },
  {
    id: 15,
    title: "Jowar Chapati Bangalore – Fresh, Wholesome & Perfect for Everyday Meals",
    image: jowarChapatiBlog,
  },
  {
    id: 16,
    title: "Ready to Eat Rumali Roti – Freshness, Convenience & Authentic Taste",
    image: rumaliRotiBlog,
  },
  {
    id: 17,
    title: "Ready to Fry Poori Bangalore – Fresh, Convenient and Perfect for Every Meal",
    image: readyPooriBlog,
  },
  {
    id: 18,
    title: "Ready to Cook Malabar Porotta – Soft, Flaky and Delicious Anytime",
    image: malabarPorottaBlog,
  },
  {
    id: 19,
    title: "Fresh, Soft, and Homemade Idiyappam Online Delivered to You",
    image: idiyappamBlog,
  },
];

function Blog() {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-header">
        <h2>Blog</h2>
      </div>

      <div className="container">
        <div className="blog-list">
          {blogs.map((blog) => (
            <article className="blog-item" key={blog.id}>
              <div className="blog-item-image">
                <img src={blog.image} alt={blog.title} />
              </div>

              <div className="blog-item-content">
                <h3>{blog.title}</h3>

                <a href="#contact" className="blog-read-btn">
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;