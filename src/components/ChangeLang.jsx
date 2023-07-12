import { useContext } from "react";
import LangContext from "../context/LangContext";

const ChangeLang = () => {
  const { lang, setLang } = useContext(LangContext);

  return (
    <div>
      <h1>Build Bootstrap with Vite</h1>
      <div className="col-lg-8 px-0">
        <p className="fs-4">
          You've successfully loaded the Bootstrap + Vite example! It's loaded
          up with <a href="https://getbootstrap.com/">Bootstrap 5</a> and uses
          Vite to compile and bundle our Sass and JavaScript.
        </p>
        <p>
          If this button appears blue and the link appears purple, you've done
          it!
        </p>
      </div>

      <button
        type="button"
        className="btn btn-primary me-3"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
      >
        Toggle offcanvas
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
          <div className="dropdown mt-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="col-1 my-5 mx-0" />
    </div>
  );
};

export default ChangeLang;
