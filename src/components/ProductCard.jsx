function ProductCard({ product, onAddToCart }) {
  const {
    name,
    category,
    price,
    rating,
    image,
  } = product;

  return (
    <div className="product-card">

      {/* Product Image */}
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

      {/* Product Information */}
      <div className="product-info">
        <h3>
          {name}
        </h3>

        {/* Rating */}
        <div className="product-rating">
          <span>★</span>
          <span>{rating}</span>
        </div>

        {/* Price and Cart Button */}
        <div className="product-bottom">
          <p className="product-price">
            ₹{price}
          </p>

          <button
            type="button"
            className="add-cart-btn"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>

    </div>
  );
}

export default ProductCard;