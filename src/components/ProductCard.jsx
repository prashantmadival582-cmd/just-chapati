function ProductCard({ product, onAddToCart }) {
  const {
    name,
    category,
    price,
    rating,
    image,
  } = product;

  return (
    <article className="product-card">

      <div className="product-image">
        <img
          src={image}
          alt={name}
          loading="lazy"
        />

        <span className="product-category">
          {category}
        </span>
      </div>

      <div className="product-info">

        <div className="product-title-row">

          <div>
            <p className="product-type">
              {category}
            </p>

            <h3>{name}</h3>
          </div>

          <div className="product-rating">
            <span>★</span>
            <span>{rating}</span>
          </div>

        </div>

        <div className="product-bottom">

          <div className="product-price-wrapper">
            <span className="price-label">
              Starting from
            </span>

            <p className="product-price">
              ₹{price}
            </p>
          </div>

          <button
            type="button"
            className="add-cart-btn"
            onClick={() => onAddToCart(product)}
          >
            <span>+</span>
            Add
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;