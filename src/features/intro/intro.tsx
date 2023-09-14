import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { parfumesList } from "./intro-list";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className="parfumes">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ x: [100, 0], opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {t("parfumes-title")}
      </motion.h1>
      {/* <section className="parfumes__section">
        {parfumesList.map((parfume) => {
          return (
            <div key={parfume.id} className="parfumes__section__box">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-100, 0], opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <img src={parfume.img} className="parfumes__section__img" />
              </motion.div>
              <motion.div
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ x: [-150, 0], opacity: 1 }}
                transition={{ duration: 2 }}
                className="parfumes__section__info"
              >
                <h2 className="parfumes__section__title">{parfume.title}</h2>
                <p className="parfumes__section__desc">{t(parfume.desc)}</p>
              </motion.div>
            </div>
          );
        })}
      </section> */}
      <section className="grid-gallery">
        {parfumesList.map((parfume) => {
          return (
            <div key={parfume.id} className="gallery-item">
              <div className="img-description">
                <h2 className="img-description-heading">{parfume.title}</h2>
                <p>{t(parfume.desc)}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Intro;
