import { productsList } from "./shop-component/products-list";
import StoreItem from "./shop-component/storeItem";

const Store: React.FC = () => {
  return (
    <div>
      <h2 className="product__shop__title">World of Perfumes</h2>
      <p className="product__shop__desc">
        Perfumania offers an extensive collection of top perfumes for women,
        including the best-selling women's perfume options that are currently
        trending. Our assortment of fragrances for women is designed to cater to
        every preference and style, and we take pride in being the go-to
        destination for those seeking women's best-seller perfume options. Our
        curated selection of top-selling women's perfume options is not only
        diverse but also guaranteed to provide the ultimate fragrance
        experience. We understand the importance of staying on-trend and
        up-to-date with the latest scent trends, which is why we always keep our
        collection updated with the latest and greatest in the world of
        fragrance.
      </p>
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
