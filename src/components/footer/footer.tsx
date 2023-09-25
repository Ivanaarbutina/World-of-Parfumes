import Contact from "./contact";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <Contact />
      <div className="footer__link">
        <span>{t("freepik")}</span>
        <a
          href="https://www.freepik.com/free-vector/gradient-black-backgrounds-with-golden-frames_19852263.htm#from_view=detail_serie"
          className="footer__link__item"
        >
          Freepik
        </a>
      </div>
    </div>
  );
};

export default Footer;
