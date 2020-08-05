import React from "react";
import Icon from "../../UI/Icon";
import { ReactComponent as ReactLogo } from "./logo.svg";

import "./Menu.css";

const LeftMenu = () => (
  <div className="Flex">
    <Icon name="menu" />
    <ReactLogo className="Logo" />
  </div>
);

export default LeftMenu;
