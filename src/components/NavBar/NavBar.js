import React from "react";
import { Link } from "@reach/router";
import "./NavBar.scss";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/new-tea"}>Add a Tea</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
