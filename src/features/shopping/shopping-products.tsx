import { productsList } from "./products-list";

const ShopProducts = () => {
  return (
    <div className="product">
      {productsList.map((product) => {
        return (
          <div className="product__container" key={product.name} id="products">
            <img src={product.img} className="product__img" />
            <h2 className="product__title">{product.name}</h2>
            <p className="product__type">{product.type}</p>
            {/* <span className="product__star"> {product.icon} </span> */}
            <div className="product__star">
              {product.icon.map((icon, index) => (
                <div>
                  <img
                    key={index}
                    src={icon}
                    alt={`Star ${index}`}
                    className="product__star__img"
                  />
                </div>
              ))}
            </div>

            <span className="product__price">{product.price} €</span>
          </div>
        );
      })}
    </div>
  );
};

export default ShopProducts;
