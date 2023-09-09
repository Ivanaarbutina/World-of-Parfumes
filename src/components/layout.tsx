import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import LanguageSwitcher from "./LanguageSwitcher";

const Layout = () => {
  return (
    <div>
      <LanguageSwitcher />
      <Header />
      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
