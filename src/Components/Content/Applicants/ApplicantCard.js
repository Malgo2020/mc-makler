import React from "react";
import { FormattedMessage } from "react-intl";

const ApplicantCard = (props) => {
  const { applicant } = props;
  const initials = applicant.firstName
    .charAt(0)
    .concat(applicant.lastName.charAt(0));

  const returnDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString(props.language, { month: "long" });
    const hour = date.getHours();
    const minute = date.getMinutes();
    const resultDate = `${day} ${month} ${hour}:${
      minute < 10 ? "0" + minute : minute
    }`;
    return resultDate;
  };

  // assign random color to logo
  const cardColors = [
    "CardBlue",
    "CardLightBlue",
    "CardOlive",
    "CardRed",
    "CardOrange",
  ];
  const position = Math.floor(Math.random() * cardColors.length);
  const logoStyling = `ApplicantCardLogo Flex ${cardColors[position]}`;

  return (
    <div className="ApplicantCard Flex">
      <div className={logoStyling}>
        <div className="ApplicantCardLogoText">{initials}</div>
      </div>
      <p>
        <strong>
          {applicant.firstName} {applicant.lastName}
        </strong>
      </p>
      <p>{applicant.phone}</p>
      <p>{applicant.emailAddress}</p>
      {applicant.appointmentDate && (
        <div className="ApplicantCardAppointment ApplicantCardLabel">
          <FormattedMessage id="Appointment" defaultMessage="Appointment" />{" "}
          {returnDate(applicant.appointmentDate)}
        </div>
      )}
      {applicant.viewDate && (
        <div className="ApplicantCardAppointment ApplicantCardLabel">
          <FormattedMessage id="Viewed" defaultMessage="Viewed" />{" "}
          {returnDate(applicant.viewDate)}
        </div>
      )}
      {applicant.bid && (
        <div className="ApplicantCardBid ApplicantCardLabel">
          <FormattedMessage id="Bid" defaultMessage="Bid" /> {applicant.bid}
        </div>
      )}
    </div>
  );
};

export default ApplicantCard;
