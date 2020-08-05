import React from "react";
import StatsCard from "./StatsCard";
import * as status from "../applicantStatus";

import { defineMessages, useIntl } from "react-intl";

import "./StatsBar.css";

const messages = defineMessages({
  new: {
    id: "New",
    defaultMessage: "New",
  },
  total: {
    id: "Total",
    defaultMessage: "Total",
  },
  viewed: {
    id: "Viewed",
    defaultMessage: "Viewed",
  },
  appointment: {
    id: "Appointment",
    defaultMessage: "Appointment",
  },
  others: {
    id: "Others",
    defaultMessage: "Others",
  },
});

const StatsBar = (props) => {
  const intl = useIntl();

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
      {!props.isMobile && (
        <StatsCard
          name={intl.formatMessage(messages.total)}
          number={totalApplicants}
        />
      )}
      {!props.isTablet && (
        <>
          <StatsCard
            name={intl.formatMessage(messages.new)}
            number={newApplicants}
          />
          <StatsCard
            name={intl.formatMessage(messages.viewed)}
            number={viewed}
          />
          <StatsCard
            name={intl.formatMessage(messages.appointment)}
            number={appointments}
          />
          <StatsCard
            name={intl.formatMessage(messages.others)}
            number={others}
          />
        </>
      )}
    </div>
  );
};
export default StatsBar;
