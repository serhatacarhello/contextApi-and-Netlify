import { useContext } from "react";
import Footer from "./components/Footer";
import { LangContextProvider } from "./context/LangContext";
import ThemeContext from "./context/ThemeContext";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`main-container ${theme} w-100 h-100  p-3 `}>
        <LangContextProvider>
          <Router>
            <Header />
            <Routes>
              <Route exact path="/" element={<MainPage />} />
              <Route path="/auth">
                <Route path="/auth/singIn" element={<SignIn />} />
                <Route path="/auth/register" element={<SignUp />} />
              </Route>
            </Routes>
            <Footer />
          </Router>
        </LangContextProvider>
      </div>
    </>
  );
}

export default App;
