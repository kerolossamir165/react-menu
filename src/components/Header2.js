import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Hamburger from "./Hamburger2";
const Header = ({ history }) => {
  let [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });
  let [disabled, setDisabled] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  });

  let handelDisabled = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  let handelMenu = () => {
    handelDisabled();
    if (state.initial === false) {
      setState({ initial: null, clicked: true, menuName: "Close" });
    } else if (state.clicked === true) {
      setState({ clicked: false, menuName: "Manu" });
    } else if (state.clicked === false) {
      setState({ clicked: true, menuName: "Close" });
    }
  };
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link
                to="/"
                style={state.clicked ? { color: "#fff" } : { color: "#000" }}
              >
                HAMBRG.
              </Link>
            </div>
            <div className="menu">
              <button
                onClick={handelMenu}
                disabled={disabled}
                style={state.clicked ? { color: "#fff" } : { color: "#000" }}
              >
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
