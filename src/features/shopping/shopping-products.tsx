import Button from "../../components/button";
import { productsList } from "./products-list";
import shoppingCart from "./../../assets/shoppingcart.png";

const ShopProducts = () => {
  return (
    <div>
      <h2>World of Perfumes</h2>
      <div className="product">
        {productsList.map((product) => {
          return (
            <div className="product__container" key={product.id} id="products">
              <img src={product.img} className="product__img" />
              <h2 className="product__title">{product.name}</h2>
              <p className="product__type">{product.type}</p>
              {/* <span className="product__star"> {product.icon} </span> */}
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

              <span className="product__price">{product.price} €</span>
              <Button text="Dodaj u košaricu" color="yellow">
                <img src={shoppingCart} />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopProducts;
