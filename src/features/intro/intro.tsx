import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { parfumesList } from "./intro-list";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className="parfumes">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ x: [50, 0], opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {t("parfumes-title")}
      </motion.h1>

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
