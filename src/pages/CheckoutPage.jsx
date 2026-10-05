import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CheckoutPage({ cartItems, onClearCart }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] =
    useState("cod");

  const [orderPlaced, setOrderPlaced] =
    useState(false);

  const [orderId, setOrderId] = useState("");

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const delivery = 0;
  const total = subtotal + delivery;

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const generatedOrderId =
      "JC" +
      Date.now().toString().slice(-6);

    setOrderId(generatedOrderId);
    setOrderPlaced(true);

    onClearCart();
  };

  /* =========================
     EMPTY CART
     ========================= */

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <main className="checkout-page">
        <div className="checkout-empty">

          <div className="checkout-empty-icon">
            🛒
          </div>

          <p className="checkout-label">
            CHECKOUT
          </p>

          <h1>Your cart is empty</h1>

          <p>
            Add some delicious favourites to your
            cart before proceeding to checkout.
          </p>

          <Link
            to="/products"
            className="checkout-primary-btn"
          >
            Explore Our Menu
          </Link>

        </div>
      </main>
    );
  }

  /* =========================
     ORDER SUCCESS
     ========================= */

  if (orderPlaced) {
    return (
      <main className="checkout-page">

        <section className="order-success">

          <div className="success-icon">
            ✓
          </div>

          <p className="checkout-label">
            ORDER CONFIRMED
          </p>

          <h1>
            Thank You for Your Order!
          </h1>

          <p className="success-message">
            Your order has been successfully placed.
            We are preparing your fresh favourites
            with care.
          </p>

          <div className="order-number">
            <span>Order ID</span>
            <strong>{orderId}</strong>
          </div>

          <div className="success-details">

            <div>
              <span>Payment</span>
              <strong>
                {paymentMethod === "cod"
                  ? "Cash on Delivery"
                  : "Online Payment"}
              </strong>
            </div>

            <div>
              <span>Delivery</span>
              <strong>
                Free
              </strong>
            </div>

          </div>

          <Link
            to="/products"
            className="checkout-primary-btn"
          >
            Continue Shopping
          </Link>

        </section>

      </main>
    );
  }

  /* =========================
     CHECKOUT
     ========================= */

  return (
    <main className="checkout-page">

      {/* HEADER */}

      <section className="checkout-hero">

        <div className="checkout-container">

          <div className="checkout-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/cart">Cart</Link>
            <span>/</span>
            <span>Checkout</span>
          </div>

          <p className="checkout-label">
            SECURE CHECKOUT
          </p>

          <h1>
            Complete Your <span>Order</span>
          </h1>

          <p>
            Enter your delivery details and
            choose your preferred payment method.
          </p>

        </div>

      </section>


      {/* CHECKOUT CONTENT */}

      <section className="checkout-content">

        <div className="checkout-container">

          <form
            className="checkout-layout"
            onSubmit={handleSubmit}
          >

            {/* =====================
                LEFT COLUMN
            ===================== */}

            <div className="checkout-form">

              {/* DELIVERY DETAILS */}

              <div className="checkout-card">

                <div className="checkout-card-heading">

                  <div className="checkout-step">
                    01
                  </div>

                  <div>
                    <h2>
                      Delivery Details
                    </h2>

                    <p>
                      Where should we deliver your order?
                    </p>
                  </div>

                </div>


                <div className="checkout-fields">

                  {/* NAME */}

                  <div className="checkout-field full">
                    <label htmlFor="name">
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>


                  {/* PHONE */}

                  <div className="checkout-field">
                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="[0-9]{10}"
                      maxLength="10"
                      required
                    />
                  </div>


                  {/* EMAIL */}

                  <div className="checkout-field">
                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>


                  {/* ADDRESS */}

                  <div className="checkout-field full">
                    <label htmlFor="address">
                      Delivery Address
                    </label>

                    <textarea
                      id="address"
                      name="address"
                      rows="4"
                      placeholder="House / Flat number, street, area"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>


                  {/* CITY */}

                  <div className="checkout-field">
                    <label htmlFor="city">
                      City
                    </label>

                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>


                  {/* PINCODE */}

                  <div className="checkout-field">
                    <label htmlFor="pincode">
                      Pincode
                    </label>

                    <input
                      id="pincode"
                      name="pincode"
                      type="text"
                      placeholder="6-digit pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      pattern="[0-9]{6}"
                      maxLength="6"
                      required
                    />
                  </div>

                </div>

              </div>


              {/* PAYMENT */}

              <div className="checkout-card">

                <div className="checkout-card-heading">

                  <div className="checkout-step">
                    02
                  </div>

                  <div>
                    <h2>
                      Payment Method
                    </h2>

                    <p>
                      Choose how you want to pay.
                    </p>
                  </div>

                </div>


                <div className="payment-options">

                  <label
                    className={`payment-option ${
                      paymentMethod === "cod"
                        ? "selected"
                        : ""
                    }`}
                  >

                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={
                        paymentMethod === "cod"
                      }
                      onChange={(event) =>
                        setPaymentMethod(
                          event.target.value
                        )
                      }
                    />

                    <span className="payment-icon">
                      💵
                    </span>

                    <span className="payment-info">
                      <strong>
                        Cash on Delivery
                      </strong>

                      <small>
                        Pay when your order arrives
                      </small>
                    </span>

                    <span className="payment-check">
                      ✓
                    </span>

                  </label>


                  <label
                    className={`payment-option ${
                      paymentMethod === "online"
                        ? "selected"
                        : ""
                    }`}
                  >

                    <input
                      type="radio"
                      name="payment"
                      value="online"
                      checked={
                        paymentMethod === "online"
                      }
                      onChange={(event) =>
                        setPaymentMethod(
                          event.target.value
                        )
                      }
                    />

                    <span className="payment-icon">
                      💳
                    </span>

                    <span className="payment-info">
                      <strong>
                        Online Payment
                      </strong>

                      <small>
                        UPI, Card & Net Banking
                      </small>
                    </span>

                    <span className="payment-check">
                      ✓
                    </span>

                  </label>

                </div>

              </div>

            </div>


            {/* =====================
                RIGHT COLUMN
            ===================== */}

            <aside className="checkout-summary">

              <div className="checkout-summary-heading">

                <p>
                  YOUR ORDER
                </p>

                <h2>
                  Order Summary
                </h2>

              </div>


              {/* PRODUCTS */}

              <div className="checkout-products">

                {cartItems.map((item) => (
                  <div
                    className="checkout-product"
                    key={item.id}
                  >

                    <div className="checkout-product-image">

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <span>
                        {item.quantity}
                      </span>

                    </div>

                    <div className="checkout-product-info">

                      <h3>
                        {item.name}
                      </h3>

                      <p>
                        ₹{item.price} each
                      </p>

                    </div>

                    <strong>
                      ₹{item.price * item.quantity}
                    </strong>

                  </div>
                ))}

              </div>


              {/* TOTALS */}

              <div className="checkout-totals">

                <div>
                  <span>
                    Items
                  </span>

                  <strong>
                    {totalItems}
                  </strong>
                </div>

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


              <div className="checkout-grand-total">

                <span>
                  Total
                </span>

                <strong>
                  ₹{total}
                </strong>

              </div>


              <button
                type="submit"
                className="place-order-btn"
              >
                Place Order
                <span>→</span>
              </button>


              <p className="checkout-security">
                🔒 Your information is secure
              </p>

            </aside>

          </form>

        </div>

      </section>

    </main>
  );
}

export default CheckoutPage;