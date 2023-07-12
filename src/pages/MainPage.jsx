import React from "react";
import ChangeLang from "../components/ChangeLang";
import { ChangeTheme } from "../components/ChangeTheme";

const MainPage = () => {
  return (
    <div>
      <ChangeLang />
      <ChangeTheme />
    </div>
  );
};

export default MainPage;
