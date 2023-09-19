import { useTranslation } from "react-i18next";
import Intro from "../intro/intro";
import Socials from "../socials/socials";
import { motion } from "framer-motion";
import About from "../about";
import ShopProducts from "../shopping/shopping-products";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="home" id="home">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: 1 }}
          transition={{ duration: 2 }}
          id="title"
        >
          {t("home-title")}
        </motion.h1>
      </div>
      <div className="home__intro">
        <p className="home__intro__info">{t("home-info")}</p>
      </div>
      <Intro />
      <About />
      <Socials />
      <ShopProducts />
    </div>
  );
};

export default Home;
