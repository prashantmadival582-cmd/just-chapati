import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  return (
    <div className="cart-item">

      {/* Product Image */}
      <div className="cart-item-image">
        <img
          src={item.image}
          alt={item.name}
        />
      </div>

      {/* Product Details */}
      <div className="cart-item-details">

        <span className="cart-item-category">
          {item.category}
        </span>

        <h3>{item.name}</h3>

        <p className="cart-item-price">
          ₹{item.price}
        </p>

      </div>

      {/* Quantity */}
      <div className="cart-quantity">

        <button
          type="button"
          onClick={() => onDecrease(item.id)}
          aria-label={`Decrease ${item.name} quantity`}
        >
          <FaMinus />
        </button>

        <span>{item.quantity}</span>

        <button
          type="button"
          onClick={() => onIncrease(item.id)}
          aria-label={`Increase ${item.name} quantity`}
        >
          <FaPlus />
        </button>

      </div>

      {/* Total */}
      <div className="cart-item-total">
        ₹{item.price * item.quantity}
      </div>

      {/* Remove */}
      <button
        type="button"
        className="cart-remove-btn"
        onClick={() => onRemove(item.id)}
        aria-label={`Remove ${item.name}`}
      >
        <FaTrash />
      </button>

    </div>
  );
}

export default CartItem;