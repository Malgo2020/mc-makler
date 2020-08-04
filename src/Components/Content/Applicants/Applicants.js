import React from "react";
import ApplicantCard from "./ApplicantCard";
import * as status from "../applicantStatus";

import "./Applicants.css";
import "./Loader.css";

const Applicants = (props) => {
  const applicantsWithAppointment = props.applicants.filter(
    (applicant) => applicant.status === status.Appointment_Set
  );
  const applicantsViewedProperty = props.applicants.filter(
    (applicant) => applicant.status === status.Property_Viewed
  );
  const applicantsInterested = props.applicants.filter(
    (applicant) => applicant.status === status.Interested
  );
  const applicantsOfferAccepted = props.applicants.filter(
    (applicant) => applicant.status === status.Offer_Accepted
  );
  return (
    <div className="Applicants">
      {!props.isError && props.isLoading ? (
        <div className="Loader">Loading...</div>
      ) : (
        <>
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
          {applicantsInterested.length > 0 && (
            <>
              <h3>Interested ({applicantsInterested.length})</h3>
              <div className="Flex Wrap">
                {applicantsInterested.map((applicant) => (
                  <ApplicantCard key={applicant.id} applicant={applicant} />
                ))}
              </div>
            </>
          )}
          {applicantsOfferAccepted.length > 0 && (
            <>
              <h3>Offer accepted ({applicantsOfferAccepted.length})</h3>
              <div className="Flex Wrap">
                {applicantsOfferAccepted.map((applicant) => (
                  <ApplicantCard key={applicant.id} applicant={applicant} />
                ))}
              </div>
            </>
          )}
        </>
      )}
      {!props.isLoading && !props.isError && props.applicants.length === 0 && (
        <p>No search results</p>
      )}
      {props.isError && <p>Something went wrong...</p>}
    </div>
  );
};

export default Applicants;
