import { useShoppingCart } from "../../../contex/shop-context";
import { useState } from "react";

type StoreItemProps = {
  img: string;
  name: string;
  type: string;
  icon: string[];
  price: number;
  id: number;
  openModal: () => void;
};
const StoreItem = ({
  id,
  name,
  type,
  icon,
  price,
  img,
  openModal,
}: StoreItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            <button
              onClick={() => increaseCartQuantity(id)}
              className="btn--yellow2 btn--md"
            >
              + Add To Cart
            </button>
          ) : (
            <div className="btn__section__wrapper">
              <div className="btn__section">
                <button
                  className="btn__quantity"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  &#8722;
                </button>
                <div>
                  <span>{quantity}</span> in cart
                </div>
                <button
                  className="btn__quantity"
                  onClick={() => increaseCartQuantity(id)}
                >
                  &#43;
                </button>
              </div>
              <button
                className="btn--yellow btn--sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
        <button onClick={() => openModal()}>Show details</button>
      </div>
    </div>
  );
};

export default StoreItem;
