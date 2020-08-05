import React from "react";
import Icon from "../../../UI/Icon";

const Filter = (props) => (
  <div className="Relative">
    <select className="Filter">{props.children}</select>{" "}
    <span className="FilterIcon">
      <Icon name="dropDown" />
    </span>
  </div>
);

export default Filter;
