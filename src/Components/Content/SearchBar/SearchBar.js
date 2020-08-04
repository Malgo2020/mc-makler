import React from "react";
import Icon from "../../../UI/Icon";

import "./SearchBar.css";

const SearchBar = (props) => (
  <>
    <input
      type="text"
      placeholder="Search for applicants"
      className="SearchBar"
      onChange={props.handleSearch}
      value={props.value}
    />
    <span className="SearchBarIcon">
      <Icon name="search" />
    </span>
  </>
);

export default SearchBar;
