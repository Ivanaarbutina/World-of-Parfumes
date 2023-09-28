import { useShoppingCart } from "../../../contex/shop-context";

type ProductProps = {
  img: string;
  name: string;
  type: string;
  icon: string[];
  desc: string;
  price: number;
  id: number;
};
type ShopModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  product: ProductProps | null;
};

const ShopModal = ({ isOpen, closeModal, product }: ShopModalProps) => {
  console.log("Vrednost product:", product);
  if (!product) {
    // Ako je product null, možete prikazati neku zamensku vrednost ili poruku
    console.log("ne radi");
    return null;
  }

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(product.id);
  return (
    <div className="modal" onClick={closeModal} key={product.id}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <img className="modal-img" src={product.img} alt={product.name} />
          <button className="close-button" onClick={closeModal}>
            close
          </button>
        </div>
        <div>
          <h2 className="modal-title">{product.name}</h2>
          <p className="product__type">{product.type}</p>
          <p>{product.desc}</p>
          <div className="product__star">
            {product.icon.map((icon, iconIndex) => (
              <div key={`stars-${iconIndex}`}>
                <img
                  src={icon}
                  alt={`Star ${iconIndex}`}
                  className="product__star__img"
                />
              </div>
            ))}
          </div>
        </div>
        <span className="product__price">{product.price} €</span>
        <div>
          {quantity === 0 ? (
            <button
              onClick={() => increaseCartQuantity(product.id)}
              className="btn--yellow2 btn--md"
            >
              + Add To Cart
            </button>
          ) : (
            <div className="btn__section__wrapper">
              <div className="btn__section">
                <button
                  className="btn__quantity"
                  onClick={() => decreaseCartQuantity(product.id)}
                >
                  &#8722;
                </button>
                <div>
                  <span>{quantity}</span> in cart
                </div>
                <button
                  className="btn__quantity"
                  onClick={() => increaseCartQuantity(product.id)}
                >
                  &#43;
                </button>
              </div>
              <button
                className="btn--yellow btn--sm"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopModal;
