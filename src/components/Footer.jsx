import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LangContext from "../context/LangContext";
const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LangContext);

  return (
    <div className="container container-fluid bottom-0 start-0 flex-grow-1">
      <p> Footer Component </p>
      <div className="buttons d-flex align-items-center justify-content-between">
        <div className="rightSide">
          <button
            type="button"
            className="btn btn-primary me-3"
            onClick={() => toggleTheme()}
          >
            Active Theme:
            <span className="badge text-warning text-uppercase"> {theme}</span>
          </button>
        </div>
        <div className="leftSide">
          <button
            type="button"
            className="btn btn-primary me-3"
            onClick={() => setLang("tr")}
          >
            TR
          </button>
          <button
            type="button"
            className="btn btn-primary me-3"
            onClick={() => setLang("en")}
          >
            EN
          </button>
          <button
            type="button"
            className="btn btn-primary me-3"
            onClick={() => setLang("de")}
          >
            DE
          </button>
          Active Lang:{" "}
          <span className="badge bg-primary text-warning">{lang}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
