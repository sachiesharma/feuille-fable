import React from "react";
import "../NavBar/NavBar.scss";
import { Link } from "react-router-dom";
import ffLogo from "../../assets/images/feuille-fable-logo-good.png";

function NavBar() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <img className="navbar__logo" src={ffLogo} alt="Feuille-Fable Logo" />
        </li>
        <div className="navbar__menu">
          <li className="navbar__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar__item">
            <Link to="/saved-reviews">Entries</Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
