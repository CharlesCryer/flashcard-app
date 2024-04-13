import React from "react";
import NavStyles from "../../modules/common/Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link to={"/"}>
        <div className={NavStyles.nav_bar}>
          <h1>Flashcards website</h1>
        </div>
      </Link>
    </>
  );
};

export default Nav;
