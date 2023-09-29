import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ProductsType, productsList } from "./shop-component/products-list";
import StoreItem from "./shop-component/storeItem";
import ShopModal from "./shop-component/shop-modal";

const Store: React.FC = () => {
  const [currentProduct, setCurrentProduct] = useState<ProductsType | null>(
    null
  );

  const { t } = useTranslation();

  const openProductModal = (product: ProductsType) => {
    setCurrentProduct(product);
  };

  const closeProductModal = () => {
    setCurrentProduct(null);
  };
  return (
    <div>
      <h2 className="product__shop__title">{t("shop-title")}</h2>
      <p className="product__shop__desc">{t("shop-intro")}</p>
      <div className="product">
        {productsList.map((item) => (
          <div key={item.id}>
            <StoreItem {...item} openModal={() => openProductModal(item)} />
          </div>
        ))}
      </div>
      {/* Prikaz modala sa detaljima proizvoda */}
      <ShopModal
        isOpen={currentProduct !== null}
        closeModal={closeProductModal}
        product={currentProduct}
      />
    </div>
  );
};

export default Store;
