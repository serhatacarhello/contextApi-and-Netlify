import { useContext } from "react";
import LangContext from "../context/LangContext";

const ChangeLang = () => {
  const {lang, setLang} = useContext(LangContext);

  return (
    <div>
      ChangeLang Component
      <p>Aktif Dil: {lang}</p>
      <div>
        <button onClick={()=> setLang('tr') } >TR</button>
        <button onClick={()=> setLang('en') } >EN</button>
        <button onClick={()=> setLang('de') } >DE</button>
      </div>
    </div>
  );
};

export default ChangeLang;
