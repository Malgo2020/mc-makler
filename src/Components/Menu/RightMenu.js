import React from "react";
import Icon from "../../UI/Icon";

import "./Menu.css";

const RightMenu = (props) => (
  <div className="RightMenu Flex">
    {!props.isMobile && (
      <div className="Support Flex">
        <Icon name="support" />
        {!props.isTablet && <p>Contact Support</p>}
      </div>
    )}
    <Icon name="message" className="MenuIcon" />
    {!props.isMobile && (
      <>
        <Icon name="user" />
        <Icon name="power" />
      </>
    )}
  </div>
);

export default RightMenu;
