import { FC } from "react";
import "../../modules/common/Nav.css";
import { Link } from "react-router-dom";

const Nav: FC = () => {
  return (
    <>
      <Link to={"/"}>
        <div className={"nav_bar"}>
          <h1>Flashcards website</h1>
        </div>
      </Link>
    </>
  );
};

export default Nav;
