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
      <img src={item.img} alt={item.name} />
      <div className="cart-item-details">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price ">{formatCurrency(item.price)}</div>
        {quantity > 0 && (
          <span className="cart-item-quantity">
            x <span className="cart-item-quantity1">{quantity} =</span>
          </span>
        )}
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
