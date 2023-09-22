import { useShoppingCart } from "../../../contex/shop-context";
import { formatCurrency } from "../../../utiles/formatCurrency";
import { CartItem } from "./cartItem";
import { productsList } from "./products-list";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <div className={`shopping-cart${isOpen ? " open" : ""}`}>
      <div className="shopping-cart-header">
        <h2>Cart</h2>
        <button className="close-button" onClick={closeCart}>
          Close
        </button>
      </div>
      <div className="shopping-cart-body">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="total">
          Total{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = productsList.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </div>
    </div>
  );
}
