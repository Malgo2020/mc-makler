import React from "react";
import Icon from "../../UI/Icon";

import { FormattedMessage } from "react-intl";

import "./Menu.css";

const RightMenu = (props) => (
  <div className="RightMenu Flex">
    {!props.isMobile && (
      <div className="Support Flex">
        <Icon name="support" />
        {!props.isTablet && (
          <p>
            <FormattedMessage
              id="Contact Support"
              defaultMessage="Contact Support"
            />
          </p>
        )}
      </div>
    )}
    <Icon name="message" className="MenuIcon" />
    {!props.isMobile && (
      <>
        <Icon name="user" />
        <Icon name="power" />
      </>
    )}
    <button className="LanguageButton" onClick={props.toggleLanguage}>
      {props.language === "en" && (
        <span>
          <strong>EN</strong>/DE
        </span>
      )}
      {props.language === "de" && (
        <span>
          EN/<strong>DE</strong>
        </span>
      )}
    </button>
  </div>
);

RightMenu.defaultProps = {
  isMobile: false,
  isTablet: false,
  toggleLanguage: () => {},
  language: "en",
};

export default RightMenu;
