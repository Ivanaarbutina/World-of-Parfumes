import { useTranslation } from "react-i18next";
import logo from "./../assets/icons8-perfume-50.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import shoppingCart from "./../assets/shoppingcart.png";
import LanguageSwitcher from "./LanguageSwitcher";

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
    path: "#contact",
    label: "contact",
  },
];

const Header = () => {
  const [showHeaderSection, setShowHeaderSection] = useState(false);
  const { t } = useTranslation();

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
          <Link
            to="#title"
            className="header__box"
            onClick={(e) => {
              scrollToTitle(e);
            }}
          >
            <img className="header__logo" src={logo} alt="Header logo" />
            <span className="header__name">WP</span>
          </Link>
        </div>
        <section
          className={`inner-header-section ${showHeaderSection ? "block" : ""}`}
        >
          <nav className={`nav-menu ${showHeaderSection ? "show" : ""}`}>
            <Link to="/cart">
              <img src={shoppingCart} />
            </Link>
            <Link to="/products" className={"header__nav__link"}>
              {" "}
              Shop
            </Link>
            <Link to="/" className={"header__nav__link"}>
              Home
            </Link>
            {headerLinks.map((link: LinkType) => {
              return (
                <a
                  className={"header__nav__link"}
                  key={link.path}
                  href={link.path}
                  onClick={(e) => {
                    scrollToHref(e); // Poziv scrollToHref funkcije kada korisnik klikne na link
                    closeNavMenu(); // Zatvaranje menija nakon klika na link
                  }}
                >
                  {t(link.label)}
                </a>
              );
            })}
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
