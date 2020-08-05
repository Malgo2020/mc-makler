import React from "react";

import "./StatsCard.css";

const StatsCard = (props) => (
  <div className="StatsCard Flex">
    <p className="StatsNumber">{props.number}</p>
    <p className="StatsName">{props.name}</p>
  </div>
);

StatsCard.defaultProps = {
  number: null,
  name: "",
};

export default StatsCard;
