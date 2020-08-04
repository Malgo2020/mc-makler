import React from "react";
import Icon from "../../../UI/Icon";
import StatsBar from "../StatsBar/StatsBar";
import "./TitleNav.css";

const TitleNav = (props) => (
  <div className="TitleNav Flex">
    <div className="Flex">
      <Icon name="back" />
      <h2>Applicants</h2>
    </div>
    {!props.isLoading && !props.isError && (
      <StatsBar
        applicants={props.applicants}
        isMobile={props.isMobile}
        isTablet={props.isTablet}
      />
    )}
  </div>
);

export default TitleNav;
