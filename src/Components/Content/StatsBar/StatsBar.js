import React from "react";
import StatsCard from "./StatsCard";
import * as status from "../applicantStatus";

import "./StatsBar.css";

const StatsBar = (props) => {
  const totalApplicants = props.applicants.length;
  const newApplicants = props.applicants.filter((applicant) => applicant.new)
    .length;
  const viewed = props.applicants.filter(
    (applicant) => applicant.status === status.Property_Viewed
  ).length;
  const appointments = props.applicants.filter(
    (applicant) => applicant.status === status.Appointment_Set
  ).length;
  const others = totalApplicants - newApplicants - viewed - appointments;

  return (
    <div className="Flex StatsCardBorder">
      {!props.isMobile && <StatsCard name="Total" number={totalApplicants} />}
      {!props.isTablet && (
        <>
          <StatsCard name="New" number={newApplicants} />
          <StatsCard name="Viewed" number={viewed} />
          <StatsCard name="Appointment" number={appointments} />
          <StatsCard name="Others" number={others} />
        </>
      )}
    </div>
  );
};
export default StatsBar;
