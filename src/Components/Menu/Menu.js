import React from "react";
import RightMenu from "./RightMenu";
import LeftMenu from "./LeftMenu";

import "./Menu.css";

const Menu = (props) => (
  <header className="Header Flex">
    <LeftMenu />
    <RightMenu isMobile={props.isMobile} isTablet={props.isTablet} />
  </header>
);

export default Menu;
