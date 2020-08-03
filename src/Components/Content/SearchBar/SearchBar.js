import React from "react";
import Icon from "../../../UI/Icon";

import "./SearchBar.css";

const SearchBar = () => (
  <>
    <input
      type="text"
      placeholder="Search for applicants"
      className="SearchBar"
    />
    <span className="SearchBarIcon">
      <Icon name="search" />
    </span>
  </>
);

export default SearchBar;
