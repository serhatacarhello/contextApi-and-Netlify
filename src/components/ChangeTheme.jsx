import { useTheme } from "../context/ThemeContext";

export const ChangeTheme = () => {
  // const data = useContext(ThemeContext) // get the value data from ThemeContext
  const { theme, toggleTheme } = useTheme(); // get the value data from ThemeContext

  return (
    <div className="w-100 h-100 container container-fluid d-flex flex-column">
      ChangeTheme component
      <p>Active Theme:{theme} </p>
      <button onClick={() => toggleTheme()}>Change Theme</button>
    </div>
  );
};
