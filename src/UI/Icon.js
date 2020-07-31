import React from "react";
import { ReactComponent as Link } from "./Icons/ic-menu_link.svg";
import { ReactComponent as Support } from "./Icons/ic-contact_support.svg";
import { ReactComponent as Message } from "./Icons/active.svg";
import { ReactComponent as DropDown } from "./Icons/arrow_drop_down.svg";
import { ReactComponent as Back } from "./Icons/back.svg";
import { ReactComponent as Power } from "./Icons/ic-power_settings_new.svg";
import { ReactComponent as User } from "./Icons/ic-user.svg";
import { ReactComponent as Search } from "./Icons/search.svg";

import "./Icon.css";

const Icon = (props) => (
  <div className="Icon">
    {props.name === "menu" && <Link title="menu link" />}
    {props.name === "support" && <Support title="customer support" />}
    {props.name === "message" && <Message title="messages" />}
    {props.name === "dropDown" && <DropDown />}
    {props.name === "back" && <Back />}
    {props.name === "power" && <Power title="power settings" />}
    {props.name === "user" && <User title="user" />}
    {props.name === "search" && <Search />}
  </div>
);

export default Icon;
