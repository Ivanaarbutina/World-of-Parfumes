import { Route, Routes } from "react-router-dom";
import "./style/styles.scss";
import Home from "./pages/home/home";
import { ShoppingCartProvider } from "./contex/shop-context";
import Store from "./pages/store/store";
import Header from "./components/header";
import Contact from "./components/footer/contact";
import Footer from "./components/footer/footer";
import { ShoppingCart } from "./pages/store/shop-component/shoppingCard";
import ShopModal from "./pages/store/shop-component/shop-modal";
import { ProductsType } from "./pages/store/shop-component/products-list";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  const [currentProduct, setCurrentProduct] = useState<ProductsType | null>(
    null
  );
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "en"
  );

  const closeProductModal = () => {
    setCurrentProduct(null);
  };
  useEffect(() => {
    // Postavite jezik iz localStorage kada se komponenta montira
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lang: string) => {
    // Sačuvaj izabrani jezik u localStorage
    window.location.reload();
    localStorage.setItem("selectedLanguage", lang);
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <ShoppingCartProvider>
        <Header>
          <div className="language-switcher">
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              className="language-switcher__select"
              value={selectedLanguage}
            >
              <option value="en">En</option>
              <option value="hr">Hr</option>
            </select>
          </div>
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<ShoppingCart isOpen />} />
          <Route path="/store" element={<Store />} />
          <Route
            path="/product/:productId"
            element={
              <ShopModal
                isOpen={true}
                closeModal={closeProductModal}
                product={currentProduct}
              />
            }
          />
        </Routes>
        <Footer />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
