import React from "react";
import RightMenu from "./RightMenu";
import LeftMenu from "./LeftMenu";

import "./Menu.css";

const Menu = () => (
  <header className="Header Flex">
    <LeftMenu />
    <RightMenu />
  </header>
);

export default Menu;
