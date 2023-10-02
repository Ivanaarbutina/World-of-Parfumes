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
          href="https://www.freepik.com/free-ai-image/bottle-perfume-with-red-substance-it_41203007.htm#query=parfume&position=1&from_view=search&track=sph"
          className="footer__link__item"
        >
          Sketchepedia
        </a>
        <span> & </span>
        <a
          href="https://www.freepik.com/free-ai-image/charming-pampered-pets-play-side-by-side-looking-alert-generated-by-ai_41151542.htm#&position=35&from_view=author"
          className="footer__link__item"
        >
          Vecstock
        </a>
      </div>
    </div>
  );
};

export default Footer;
