import { createContext, useState, useEffect, useContext } from "react";

// create
const ThemeContext = createContext();

// 2. varsayılan theme ayarlama LS te varsa oradan al yoksa 'light' yap

const defaultTheme = localStorage.getItem('theme') || 'light';

// Context.Provider izalasyonu
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

//1. başlangıcta theme bilgisini LS yazma
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const values = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};
// contextApi optimisation
export const useTheme =()=> {
return useContext(ThemeContext)
}




//export
export default ThemeContext;
