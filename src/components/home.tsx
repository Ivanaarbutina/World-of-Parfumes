import { useTranslation } from "react-i18next";
import Intro from "./intro";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="home">
        <h1>{t("home-title")}</h1>
      </div>
      <div className="home__intro">
        <p className="home__intro__info">{t("home-info")}</p>
      </div>
      <Intro />
    </div>
  );
};

export default Home;
