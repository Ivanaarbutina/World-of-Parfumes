import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import LanguageSwitcher from "./LanguageSwitcher";
import Home from "./home";

const Layout = () => {
  return (
    <div>
      <LanguageSwitcher />
      <Header />
      <Home />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
