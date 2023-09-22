import { useShoppingCart } from "../../../contex/shop-context";

type StoreItemProps = {
  img: string;
  name: string;
  type: string;
  icon: string[];
  price: number;
  id: number;
};
const StoreItem = ({ id, name, type, icon, price, img }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div>
      <div className="product__container" key={id} id="products">
        <div className="product__picture">
          <img src={img} alt={name} />
        </div>
        <h2 className="product__title">{name}</h2>
        <p className="product__type">{type}</p>
        <div className="product__star">
          {icon.map((icon, iconIndex) => (
            <div key={`stars-${iconIndex}`}>
              <img
                src={icon}
                alt={`Star ${iconIndex}`}
                className="product__star__img"
              />
            </div>
          ))}
        </div>
        <span className="product__price">{price} €</span>
        <div>
          {quantity === 0 ? (
            <button onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </button>
          ) : (
            <div>
              <div>
                <button onClick={() => decreaseCartQuantity(id)}>-</button>
                <div>
                  <span>{quantity}</span> in cart
                </div>
                <button onClick={() => increaseCartQuantity(id)}>+</button>
              </div>
              <button onClick={() => removeFromCart(id)}>Remove</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
