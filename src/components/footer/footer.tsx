import Contact from "./contact";
import { useTranslation } from "react-i18next";
import heart from "./../../assets/icons/icons8-heart-94.png";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <Contact />
      <p className="footer__info">
        Made with
        <img src={heart} />
        by Ivana Arbutina
      </p>
      <div className="footer__link">
        <span>{t("freepik")}</span>
        <a
          href="https://www.freepik.com/"
          className="footer__link__item"
          target="_blank"
        >
          Freepik
        </a>
      </div>
    </div>
  );
};

export default Footer;
