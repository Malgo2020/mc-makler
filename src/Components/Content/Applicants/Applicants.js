import React from "react";
import ApplicantCard from "./ApplicantCard";
import * as status from "../applicantStatus";

import "./Applicants.css";

const Applicants = (props) => {
  const applicantsWithAppointment = props.applicants.filter(
    (applicant) => applicant.status === status.Appointment_Set
  );
  const applicantsViewedProperty = props.applicants.filter(
    (applicant) => applicant.status === status.Property_Viewed
  );
  return (
    <div className="Applicants">
      {applicantsWithAppointment.length > 0 && (
        <>
          <h3>Appointment set ({applicantsWithAppointment.length})</h3>
          <div className="Flex Wrap">
            {applicantsWithAppointment.map((applicant) => (
              <ApplicantCard key={applicant.id} applicant={applicant} />
            ))}
          </div>
        </>
      )}
      {applicantsViewedProperty.length > 0 && (
        <>
          <h3>Property viewed ({applicantsViewedProperty.length})</h3>
          <div className="Flex Wrap">
            {applicantsViewedProperty.map((applicant) => (
              <ApplicantCard key={applicant.id} applicant={applicant} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Applicants;
