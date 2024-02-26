import React from "react";
import "../NavBar/NavBar.scss";
import { Link } from "react-router-dom";
// import ffLogo from "../../assets/images/feuillefablelogo.svg";

function NavBar() {
  return (
    <ul className="navbar">
      {/* <li>
        <img src={ffLogo} alt="Feuille-Fable Logo" />
      </li> */}
      <li className="navbar__item">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar__item">
        <Link to="/saved-reviews">Entries</Link>
      </li>
    </ul>
  );
}

export default NavBar;
