import { useContext } from "react";
import { ChangeTheme } from "./components/ChangeTheme";
import Footer from "./components/Footer";
import { LangContextProvider } from "./context/LangContext";
import ThemeContext from "./context/ThemeContext";
import Header from "./components/Header";
import ChangeLang from "./components/ChangeLang";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`main-container ${theme} container w-100 h-100 m-auto p-3 `}
      >
        <LangContextProvider>
          <Header />
          <ChangeLang />
          <ChangeTheme />
          <Footer />
        </LangContextProvider>
      </div>
    </>
  );
}

export default App;
