import { useTranslation } from "react-i18next";
import logo from "./../assets/icons8-parfume-96 (2).png";
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="header">
      <img src={logo} className="header__logo" />

      <nav className="header__nav">
        <Link to="" className="header__nav__link">
          {t("parfumes")}
        </Link>
        <Link to="" className="header__nav__link">
          {t("about")}
        </Link>
        <Link to="" className="header__nav__link">
          {t("contact")}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
