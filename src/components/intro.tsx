import { useTranslation } from "react-i18next";
import blackParfume from "./../assets/bottle-perfume-with-gold-cap-blue-label.jpg";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className="parfumes">
      <h1>{t("parfumes-title")}</h1>
      <section className="parfumes__forest">
        <img
          className="parfumes__forest__img"
          src={blackParfume}
          alt="Black bottle of Parfume"
        />
        <p>
          Ovaj parfem nadahnut je mirisom 1 Million (izdanje za 2020.), novom
          verzijom originalnog parfema 1 Million. Ova verzija usuđuje se
          pomaknuti granice i poigrati se osjetilima svojom dualnošću slanih
          nota i suncem okupane kože. Miris s toplinom yantre za intenzivnu
          senzualnost – poput kože dodirnute suncem – mami poput zlata. Kao
          amblem uklesan u metal, ovaj je miris namijenjen onima koji se usuđuju
          istaknuti među milijunima. Budite sigurni u svoj stil. Nemojte se
          bojati biti drugačiji. Budite dovoljno hrabri da budete jedinstveni.
        </p>
      </section>
    </div>
  );
};

export default Intro;
