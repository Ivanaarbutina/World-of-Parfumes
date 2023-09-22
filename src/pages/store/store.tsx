import { productsList } from "./shop-component/products-list";
import StoreItem from "./shop-component/storeItem";

const Store: React.FC = () => {
  return (
    <div>
      <h2>World of Perfumes</h2>
      <div className="product">
        {productsList.map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
