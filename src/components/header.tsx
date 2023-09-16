import { useTranslation } from "react-i18next";
import logo from "./../assets/icons8-perfume-50.png";
import { Link } from "react-router-dom";
import { useState } from "react";
type LinkType = {
  label: string;
  path: string;
};
const headerLinks: LinkType[] = [
  {
    path: "#parfumes",
    label: "parfumes",
  },
  {
    path: "#about",
    label: "about",
  },
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
  const scrollToContact = function (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) {
    e.preventDefault();
    const contact = document.getElementById("contact") as HTMLElement | null;

    if (contact) {
      window.scrollTo({
        top: contact.offsetTop,
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
            to="#footer"
            className="header__box"
            onClick={(e) => {
              scrollToContact(e);
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
