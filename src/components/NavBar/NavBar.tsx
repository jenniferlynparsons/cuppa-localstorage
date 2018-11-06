import React from "react";
import { Link } from "@reach/router";
import "./NavBar.scss";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to={"/"}>Tea List</Link>
        <Link to={"/add"}>Add Tea</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
