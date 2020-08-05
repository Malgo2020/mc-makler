import React from "react";
import Filter from "./Filter";
import * as status from "../applicantStatus";

import { defineMessages, useIntl } from "react-intl";

import "./Filters.css";

const messages = defineMessages({
  bids: {
    id: "Bids",
    defaultMessage: "Bids",
  },
  appointment: {
    id: "Appointment set",
    defaultMessage: "Appointment set",
  },
  viewed: {
    id: "Property viewed",
    defaultMessage: "Property viewed",
  },
  interested: {
    id: "Interested",
    defaultMessage: "Interested",
  },
  accepted: {
    id: "Offer accepted",
    defaultMessage: "Offer accepted",
  },
});

const Filters = () => {
  const intl = useIntl();

  return (
    <div className="Filters Flex">
      <Filter>
        <option value="">{intl.formatMessage(messages.bids)}</option>
        <option value="option 1">Option 1</option>
        <option value="option 2">Option 2</option>
      </Filter>
      <Filter>
        <option value="">Status</option>
        <option value={status.Appointment_Set}>
          {intl.formatMessage(messages.appointment)}
        </option>
        <option value={status.Interested}>
          {intl.formatMessage(messages.interested)}
        </option>
        <option value={status.Offer_Accepted}>
          {intl.formatMessage(messages.accepted)}
        </option>
        <option value={status.Property_Viewed}>
          {intl.formatMessage(messages.viewed)}
        </option>
      </Filter>
    </div>
  );
};

export default Filters;
