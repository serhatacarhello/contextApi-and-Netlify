import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LangContext from "../context/LangContext";
const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LangContext);

  return (
    <div className="container container-fluid position-sticky bottom-0 start-0 flex-grow-1">
      Footer Component Active Theme: {theme}
      <hr />
      Active Lang: {lang}
      <button onClick={() => toggleTheme()}>Change Theme</button>
      <p> Footer Component </p>
      <button onClick={() => setLang("tr")}>TR</button>
      <button onClick={() => setLang("en")}>EN</button>
      <button onClick={() => setLang("de")}>DE</button>
      <p> Footer Component </p>
    </div>
  );
};

export default Footer;
