import { createContext, useState } from "react";

// create
const LangContext = createContext();

// create Context.Provider
export const LangContextProvider = ({ children }) => {
const [lang, setLang] = useState('tr')

const values= {
    lang, setLang
}

  return <LangContext.Provider value={values}>{children}</LangContext.Provider>;
};

//export
export default LangContext;
