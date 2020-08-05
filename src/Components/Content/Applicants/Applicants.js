import React from "react";
import ApplicantCard from "./ApplicantCard";
import * as status from "../applicantStatus";

import { FormattedMessage } from "react-intl";

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
        <div className="Loader">
          <FormattedMessage id="Loading" defaultMessage="Loading" />
          ...
        </div>
      ) : (
        <>
          {applicantsWithAppointment.length > 0 && (
            <>
              <h3>
                <FormattedMessage
                  id="Appointment set"
                  defaultMessage="Appointment set"
                />{" "}
                ({applicantsWithAppointment.length})
              </h3>
              <div className="Flex Wrap">
                {applicantsWithAppointment.map((applicant) => (
                  <ApplicantCard
                    key={applicant.id}
                    applicant={applicant}
                    language={props.language}
                  />
                ))}
              </div>
            </>
          )}
          {applicantsViewedProperty.length > 0 && (
            <>
              <h3>
                <FormattedMessage
                  id="Property viewed"
                  defaultMessage="Property viewed"
                />{" "}
                ({applicantsViewedProperty.length})
              </h3>
              <div className="Flex Wrap">
                {applicantsViewedProperty.map((applicant) => (
                  <ApplicantCard
                    key={applicant.id}
                    applicant={applicant}
                    language={props.language}
                  />
                ))}
              </div>
            </>
          )}
          {applicantsInterested.length > 0 && (
            <>
              <h3>
                <FormattedMessage id="Interested" defaultMessage="Interested" />{" "}
                ({applicantsInterested.length})
              </h3>
              <div className="Flex Wrap">
                {applicantsInterested.map((applicant) => (
                  <ApplicantCard
                    key={applicant.id}
                    applicant={applicant}
                    language={props.language}
                  />
                ))}
              </div>
            </>
          )}
          {applicantsOfferAccepted.length > 0 && (
            <>
              <h3>
                <FormattedMessage
                  id="Offer accepted"
                  defaultMessage="Offer accepted"
                />{" "}
                ({applicantsOfferAccepted.length})
              </h3>
              <div className="Flex Wrap">
                {applicantsOfferAccepted.map((applicant) => (
                  <ApplicantCard
                    key={applicant.id}
                    applicant={applicant}
                    language={props.language}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}
      {!props.isLoading && !props.isError && props.applicants.length === 0 && (
        <p>
          <FormattedMessage
            id="No search results"
            defaultMessage="No search results"
          />
        </p>
      )}
      {props.isError && (
        <p>
          <FormattedMessage
            id="Something went wrong"
            defaultMessage="Something went wrong"
          />
          ...
        </p>
      )}
    </div>
  );
};

Applicants.defaultProps = {
  applicants: [],
  isError: false,
  isLoading: false,
  language: "en",
};

export default Applicants;
