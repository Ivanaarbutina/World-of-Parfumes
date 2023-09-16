import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "../features/footer/footer";
import LanguageSwitcher from "./LanguageSwitcher";

const Layout = () => {
  return (
    <div>
      <div className="header__sticky">
        <LanguageSwitcher />
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
