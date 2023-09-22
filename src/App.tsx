import { Route, Routes } from "react-router-dom";
import "./style/styles.scss";
import Home from "./pages/home/home";
import { ShoppingCartProvider } from "./contex/shop-context";
import Store from "./pages/store/store";
import Header from "./components/header";
import Contact from "./components/footer/contact";
import Footer from "./components/footer/footer";
import { ShoppingCart } from "./pages/store/shop-component/shoppingCard";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/card" element={<ShoppingCart isOpen />} />

          <Route path="/store" element={<Store />} />
        </Routes>
        <Footer />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
