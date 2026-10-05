import { Link } from "react-router-dom";

function CartSummary({
  subtotal,
  deliveryCharge,
  total,
}) {
  return (
    <aside className="cart-summary">

      <div className="cart-summary-header">
        <span>ORDER SUMMARY</span>

        <h2>Your Order</h2>
      </div>

      <div className="cart-summary-row">
        <span>Subtotal</span>
        <strong>₹{subtotal}</strong>
      </div>

      <div className="cart-summary-row">
        <span>Delivery</span>

        <strong>
          {deliveryCharge === 0
            ? "FREE"
            : `₹${deliveryCharge}`}
        </strong>
      </div>

      <div className="cart-summary-divider"></div>

      <div className="cart-summary-total">
        <span>Total</span>
        <strong>₹{total}</strong>
      </div>

      <Link
        to="/checkout"
        className="cart-checkout-btn"
      >
        Proceed to Checkout
        <span>→</span>
      </Link>

      <Link
        to="/products"
        className="continue-shopping-btn"
      >
        ← Continue Shopping
      </Link>

    </aside>
  );
}

export default CartSummary;