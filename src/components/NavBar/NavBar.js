import React from "react";
import "../NavBar/NavBar.scss";
import { Link } from "react-router-dom";
import ffLogo from "../../assets/images/feuille-fable-logo.png";

function NavBar() {
  return (
    <div>
      <img src={ffLogo} alt="Feuille-Fable Logo" />
      <ul className="navbar">
        <li className="navbar__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar__item">
          <Link to="/saved-reviews">Entries</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
