import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about__wrapper" id="about">
      <div className="about">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ y: [-100, 0], opacity: 1 }}
          transition={{ duration: 2 }}
          className="about__title"
        >
          {t("about")}
        </motion.h1>
        <p className="about__desc">{t("about-us")}</p>
        <p className="about__desc">{t("about-us2")}</p>
        <p className="about__desc">{t("about-us3")}</p>
      </div>
    </div>
  );
};

export default About;
