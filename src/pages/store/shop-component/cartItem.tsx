import { useShoppingCart } from "../../../contex/shop-context";
import { productsList } from "./products-list";
import { formatCurrency } from "../../../utiles/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = productsList.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="cart-item">
      <img
        src={item.img}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        alt={item.name}
      />
      <div className="cart-item-details">
        <div className="cart-item-name">
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted cart-item-quantity">x{quantity}</span>
          )}
        </div>
        <div className="cart-item-price text-muted">
          {formatCurrency(item.price)}
        </div>
      </div>
      <div className="cart-item-total">
        {formatCurrency(item.price * quantity)}
      </div>
      <button
        className="cart-item-remove-button"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </button>
    </div>
  );
}
