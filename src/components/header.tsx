import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div>
      <LanguageSwitcher />
      <nav>
        <Link to=""></Link>
        <Link to=""></Link>
        <Link to=""></Link>
      </nav>
    </div>
  );
};

export default Header;
