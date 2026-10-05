import { Link } from "react-router-dom";

function CartPage({
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
  onClearCart,
}) {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const delivery = 0;
  const total = subtotal + delivery;

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <div className="cart-empty">
          <div className="cart-empty-icon">🛒</div>

          <p className="cart-label">YOUR CART</p>

          <h1>Your cart is empty</h1>

          <p>
            Looks like you haven't added anything to your
            cart yet.
          </p>

          <Link
            to="/products"
            className="cart-primary-btn"
          >
            Explore Our Menu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">

      {/* CART HEADER */}
      <section className="cart-hero">

        <div className="cart-container">

          <div className="cart-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Cart</span>
          </div>

          <p className="cart-label">
            YOUR ORDER
          </p>

          <h1>
            Your Shopping <span>Cart</span>
          </h1>

          <p className="cart-description">
            Review your favourites before placing your
            order.
          </p>

        </div>

      </section>

      {/* CART CONTENT */}
      <section className="cart-content">

        <div className="cart-container">

          <div className="cart-layout">

            {/* LEFT */}
            <div className="cart-items-section">

              <div className="cart-section-header">

                <div>
                  <h2>
                    Your Items
                    <span>{totalItems}</span>
                  </h2>

                  <p>
                    Freshly prepared favourites
                  </p>
                </div>

                <button
                  type="button"
                  className="clear-cart-btn"
                  onClick={onClearCart}
                >
                  Clear Cart
                </button>

              </div>

              <div className="cart-items">

                {cartItems.map((item) => (
                  <article
                    className="cart-item"
                    key={item.id}
                  >

                    {/* IMAGE */}
                    <div className="cart-item-image">
                      <img
                        src={item.image}
                        alt={item.name}
                      />
                    </div>

                    {/* INFO */}
                    <div className="cart-item-info">

                      <span className="cart-item-category">
                        {item.category}
                      </span>

                      <h3>{item.name}</h3>

                      <p className="cart-item-price">
                        ₹{item.price} each
                      </p>

                    </div>

                    {/* QUANTITY */}
                    <div className="cart-quantity">

                      <button
                        type="button"
                        onClick={() =>
                          onDecrease(item.id)
                        }
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        onClick={() =>
                          onIncrease(item.id)
                        }
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>

                    </div>

                    {/* TOTAL */}
                    <div className="cart-item-total">
                      ₹{item.price * item.quantity}
                    </div>

                    {/* REMOVE */}
                    <button
                      type="button"
                      className="cart-remove-btn"
                      onClick={() =>
                        onRemove(item.id)
                      }
                      aria-label={`Remove ${item.name}`}
                    >
                      ×
                    </button>

                  </article>
                ))}

              </div>

              {/* CONTINUE SHOPPING */}
              <Link
                to="/products"
                className="continue-shopping"
              >
                <span>←</span>
                Continue Shopping
              </Link>

            </div>

            {/* RIGHT */}
            <aside className="cart-summary">

              <div className="summary-top">

                <p className="summary-label">
                  ORDER SUMMARY
                </p>

                <h2>
                  Your Order
                </h2>

              </div>

              {/* DELIVERY MESSAGE */}
              <div className="delivery-message">

                <span className="delivery-icon">
                  ✓
                </span>

                <div>
                  <strong>
                    Free Delivery
                  </strong>

                  <p>
                    Your order qualifies for free
                    delivery.
                  </p>
                </div>

              </div>

              {/* PRICE DETAILS */}
              <div className="summary-details">

                <div>
                  <span>
                    Subtotal
                  </span>

                  <strong>
                    ₹{subtotal}
                  </strong>
                </div>

                <div>
                  <span>
                    Delivery
                  </span>

                  <strong className="free-text">
                    FREE
                  </strong>
                </div>

              </div>

              {/* TOTAL */}
              <div className="summary-total">

                <span>
                  Total
                </span>

                <strong>
                  ₹{total}
                </strong>

              </div>

              {/* CHECKOUT */}
              <Link
                to="/checkout"
                className="checkout-btn"
              >
                Proceed to Checkout
                <span>→</span>
              </Link>

              <p className="secure-checkout">
                🔒 Secure checkout · Safe & easy payment
              </p>

            </aside>

          </div>

        </div>

      </section>

    </main>
  );
}

export default CartPage;