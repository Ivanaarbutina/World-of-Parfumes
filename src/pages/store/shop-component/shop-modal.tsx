import React from "react";
import { useTranslation } from "react-i18next";
import { ProductsType } from "./products-list";

type ShopModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  product: ProductsType | null;
};

const ShopModal: React.FC<ShopModalProps> = ({
  isOpen,
  closeModal,
  product,
}) => {
  const { t } = useTranslation();
  if (!isOpen || !product) {
    return null;
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal__body" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <img src={product.img} alt={product.name} className="modal__img" />
          <button className="modal__close" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className="">
          <h2 className="modal__title">{product.name}</h2>
          <p className="modal__type">{t(product.type)}</p>
          <div className="modal__stars">
            {product.icon.map((icon, iconIndex) => (
              <img
                key={`stars-${iconIndex}`}
                src={icon}
                alt={`Star ${iconIndex}`}
                className="modal__star"
              />
            ))}
          </div>
          <p className="modal__description">{t(product.desc)}</p>
          <p className="modal__price">{product.price} €</p>
        </div>
      </div>
    </div>
  );
};

export default ShopModal;
