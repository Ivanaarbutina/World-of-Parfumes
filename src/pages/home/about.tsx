import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about__wrapper" id="about">
      <div className="about" id="about">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about__title"
        >
          {t("about")}
        </motion.h1>
        <p className="about__desc">{t("about-us")}</p>
      </div>
    </div>
  );
};

export default About;
