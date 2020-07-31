import React from "react";
import Icon from "../../UI/Icon";

import "./Menu.css";

const RightMenu = () => (
  <div className="RightMenu Flex">
    <div className="Support Flex">
      <Icon name="support" />
      <p>Contact Support</p>
    </div>
    <Icon name="message" className="MenuIcon" />
    <Icon name="user" />
    <Icon name="power" />
  </div>
);

export default RightMenu;
