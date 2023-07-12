import { useTheme } from "../context/ThemeContext";

export const ChangeTheme = () => {
  // const data = useContext(ThemeContext) // get the value data from ThemeContext
  const { theme, toggleTheme } = useTheme(); // get the value data from ThemeContext

  return (
    <div>
      <h2>Guides</h2>
      <p>
        Read more detailed instructions and documentation on using or
        contributing to Bootstrap.
      </p>
      <ul className="icon-list">
        <li>
          <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">
            Bootstrap quick start guide
          </a>
        </li>
        <li>
          <a href="https://getbootstrap.com/docs/5.3/getting-started/webpack/">
            Bootstrap Webpack guide
          </a>
        </li>
        <li>
          <a href="https://getbootstrap.com/docs/5.3/getting-started/parcel/">
            Bootstrap Parcel guide
          </a>
        </li>
        <li>
          <a href="https://getbootstrap.com/docs/5.3/getting-started/vite/">
            Bootstrap Vite guide
          </a>
        </li>
        <li>
          <a href="https://getbootstrap.com/docs/5.3/getting-started/contribute/">
            Contributing to Bootstrap
          </a>
        </li>
      </ul>

      <hr className="mt-5 mb-4"></hr>
    </div>
  );
};
