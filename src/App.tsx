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
import { useState } from "react";

function App() {
  const [currentProduct, setCurrentProduct] = useState<ProductsType | null>(
    null
  );

  const closeProductModal = () => {
    setCurrentProduct(null);
  };
  return (
    <>
      <ShoppingCartProvider>
        <Header />
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
