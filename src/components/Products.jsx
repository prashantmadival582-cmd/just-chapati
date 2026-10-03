import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

function Products({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Chapati",
    "Parotta",
    "Sanna",
    "Poori",
    "Kuboos",
    "Idiyappam",
    "Dosa",
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
    <section className="products-section" id="products">

      {/* Section Heading */}
      <div className="section-heading reveal">
        <p className="section-label">
          OUR MENU
        </p>

        <h2>
          Fresh & Delicious <span>Products</span>
        </h2>

        <p>
          Explore our freshly prepared traditional favourites,
          made with quality ingredients.
        </p>
      </div>

      {/* Category Filter */}
      <div className="product-filters reveal">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={
              activeCategory === category
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div
            className="stagger-item"
            key={product.id}
          >
            <ProductCard
              product={product}
              onAddToCart={onAddToCart}
            />
          </div>
        ))}
      </div>

    </section>
  );
}

export default Products;