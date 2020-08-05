import React from "react";
import Icon from "../../../UI/Icon";

import { defineMessage, useIntl } from "react-intl";

import "./SearchBar.css";

const searchPlaceholder = defineMessage({
  id: "Search for applicants",
  defaultMessage: "Search for applicants",
});

const SearchBar = (props) => {
  const intl = useIntl();

  return (
    <>
      <input
        type="text"
        placeholder={intl.formatMessage(searchPlaceholder)}
        className="SearchBar"
        onChange={props.handleSearch}
        value={props.value}
      />
      <span className="SearchBarIcon">
        <Icon name="search" />
      </span>
    </>
  );
};

export default SearchBar;
