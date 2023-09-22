import { useTranslation } from "react-i18next";
import logo from "./../assets/icons8-perfume-50.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import shoppingCart from "./../assets/shoppingcart.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useShoppingCart } from "../contex/shop-context";

type LinkType = {
  label: string;
  path: string;
};
const headerLinks: LinkType[] = [
  // {
  //   path: "/products",
  //   label: "shop",
  // },
  // {
  //   path: "",
  //   label: "home",
  // },
  {
    path: "/",
    label: "home",
  },
  {
    path: "/store",
    label: "shop",
  },
];

const Header = () => {
  const [showHeaderSection, setShowHeaderSection] = useState(false);
  const { t } = useTranslation();
  const { openCart, cartQuantity } = useShoppingCart();

  // Smooth scrolling navigation
  const scrollToHref = function (e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      const target = document.querySelector(href) as HTMLElement | null;
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };
  const scrollToTitle = function (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) {
    e.preventDefault();
    const title = document.getElementById("title") as HTMLElement | null;

    if (title) {
      window.scrollTo({
        top: title.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const toggleNavMenu = () => {
    setShowHeaderSection(!showHeaderSection);
  };

  const closeNavMenu = () => {
    setShowHeaderSection(false);
  };
  return (
    <div>
      <header className="header" id="header">
        <div>
          <a
            href="#about"
            onClick={(e) => {
              scrollToHref(e);
              closeNavMenu();
            }}
            className="header__box"
          >
            <img className="header__logo" src={logo} alt="Header logo" />
            <span className="header__name">WP</span>
          </a>
        </div>
        <section
          className={`inner-header-section ${showHeaderSection ? "block" : ""}`}
        >
          <nav className={`nav-menu ${showHeaderSection ? "show" : ""}`}>
            <Link to="/cart" onClick={openCart} className={"header__nav__card"}>
              <img src={shoppingCart} />
              <div className="header__card__number">{cartQuantity}</div>
            </Link>

            {headerLinks.map((link: LinkType) => {
              return (
                <a
                  className={"header__nav__link"}
                  key={link.path}
                  href={link.path}
                  onClick={() => {
                    closeNavMenu(); // Zatvaranje menija nakon klika na link
                  }}
                >
                  {t(link.label)}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => {
                scrollToHref(e);
                closeNavMenu();
              }}
              className={"header__nav__link"}
            >
              contact
            </a>

            <LanguageSwitcher />
          </nav>
        </section>

        <div
          className={`hamburger ${showHeaderSection ? "active" : ""}`}
          onClick={toggleNavMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
