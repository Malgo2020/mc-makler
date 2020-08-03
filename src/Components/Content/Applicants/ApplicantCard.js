import React from "react";

const ApplicantCard = (props) => {
  const { applicant } = props;
  const initials = applicant.firstName
    .charAt(0)
    .concat(applicant.lastName.charAt(0));

  const returnDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const hour = date.getHours();
    const minute = date.getMinutes();
    const resultDate = `${day} ${month} ${hour}:${
      minute < 10 ? "0" + minute : minute
    }`;
    return resultDate;
  };

  return (
    <div className="ApplicantCard Flex">
      <div className="ApplicantCardLogo Flex CardBlue">
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
          Appointment {returnDate(applicant.appointmentDate)}
        </div>
      )}
      {applicant.viewDate && (
        <div className="ApplicantCardAppointment ApplicantCardLabel">
          Viewed {returnDate(applicant.viewDate)}
        </div>
      )}
      {applicant.bid && (
        <div className="ApplicantCardBid ApplicantCardLabel">
          Bid {applicant.bid}
        </div>
      )}
    </div>
  );
};

export default ApplicantCard;
