import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "./ProductCard";

function Products({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";

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

  // =========================================
  // FILTER PRODUCTS
  // =========================================

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" ||
      product.category?.trim().toLowerCase() ===
        activeCategory.trim().toLowerCase();

    const searchValue = searchQuery.trim().toLowerCase();

    const matchesSearch =
      !searchValue ||
      product.name?.toLowerCase().includes(searchValue) ||
      product.category?.toLowerCase().includes(searchValue);

    return matchesCategory && matchesSearch;
  });

  // =========================================
  // CLEAR SEARCH
  // =========================================

  const clearSearch = () => {
    setSearchParams({});
  };

  return (
    <section className="products-section" id="products">
      <div className="products-container">

        {/* =========================================
            HEADER
            ========================================= */}

        <div className="products-heading reveal">

          <div>
            <p className="section-label">
              OUR MENU
            </p>

            <h2>
              Fresh & Delicious <span>Products</span>
            </h2>

            <p className="products-description">
              Explore our freshly prepared traditional
              favourites, made with quality ingredients.
            </p>
          </div>

          <div className="products-count">
            <strong>
              {filteredProducts.length}
            </strong>

            <span>
              items
            </span>
          </div>

        </div>

        {/* =========================================
            SEARCH RESULT
            ========================================= */}

        {searchQuery && (
          <div className="products-search-result">

            <p>
              Showing results for{" "}
              <strong>
                "{searchQuery}"
              </strong>
            </p>

            <button
              type="button"
              onClick={clearSearch}
              className="clear-search-btn"
            >
              Clear Search
            </button>

          </div>
        )}

        {/* =========================================
            FILTERS
            ========================================= */}

        <div className="product-filters reveal">

          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`filter-btn ${
                activeCategory === category
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>
          ))}

        </div>

        {/* =========================================
            PRODUCTS
            ========================================= */}

        {filteredProducts.length > 0 ? (

          <div className="products-grid">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}

          </div>

        ) : (

          <div className="no-products">

            <h3>
              No Products Found
            </h3>

            <p>
              We couldn't find any products matching{" "}
              <strong>
                "{searchQuery}"
              </strong>
            </p>

            <button
              type="button"
              className="filter-reset-btn"
              onClick={() => {
                setActiveCategory("All");
                clearSearch();
              }}
            >
              View All Products
            </button>

          </div>

        )}

      </div>
    </section>
  );
}

export default Products;