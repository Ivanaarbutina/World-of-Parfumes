import Button from "../button";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="contact" id="contact">
      <section className="contact__services">
        <h3 className="contact__services__title">{t("services")}</h3>
        <p>{t("services-1")}</p>
        <p>{t("services-2")}</p>
        <p>{t("services-3")}</p>
      </section>
      <section className="contact__info">
        <h3 className="contact__info__title">{t("contact")}</h3>
        <p>customerservice@wp.hr</p>
        <p>+85 (0)1 55 33 55 63</p>
        <Button text={t("contact-btn")} color="yellow"></Button>
      </section>
    </div>
  );
};

export default Contact;
