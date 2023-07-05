import { useContext } from "react";
import { ChangeTheme } from "./components/ChangeTheme";
import Footer from "./components/Footer";
import { LangContextProvider } from "./context/LangContext";
import ThemeContext from "./context/ThemeContext";

function App() {
 const {theme}= useContext(ThemeContext)
  return (
    <>
      <div className={`main-container ${theme}`}>
        <LangContextProvider>
          <ChangeTheme />
          <Footer />
        </LangContextProvider>
      </div>
    </>
  );
}

export default App;
