import React from "react";
import "../NavBar/NavBar.scss";
import { Link } from "react-router-dom";
import ffLogo from "../../assets/images/logo-mark.svg";

function NavBar() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/" className="navbar__logo-link" aria-label="Feuille Fable home">
            <img className="navbar__logo" src={ffLogo} alt="" />
            <span className="navbar__wordmark">Feuille Fable</span>
          </Link>
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
