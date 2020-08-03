import React from "react";
import Filter from "./Filter";
import * as status from "../applicantStatus";

import "./Filters.css";

const Filters = () => (
  <div className="Filters Flex">
    <Filter>
      <option value="">Bids</option>
      <option value="option 1">Option 1</option>
      <option value="option 2">Option 2</option>
    </Filter>
    <Filter>
      <option value="">Status</option>
      <option value={status.Appointment_Set}>Appointment set</option>
      <option value={status.Interested}>Interested</option>
      <option value={status.Offer_Accepted}>Offer accepted</option>
      <option value={status.Property_Viewed}>Property viewed</option>
    </Filter>
  </div>
);

export default Filters;
