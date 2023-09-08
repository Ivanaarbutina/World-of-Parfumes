import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <select onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">En</option>
        <option value="hr">Hr</option>
      </select>
      
    </div>
  );
};

export default LanguageSwitcher;
