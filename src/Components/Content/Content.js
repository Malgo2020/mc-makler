import React, { useState } from "react";
import Applicants from "./Applicants/Applicants";
import TitleNav from "./TitleNav/TitleNav";
import SearchBar from "./SearchBar/SearchBar";
import Filters from "./Filters/Filters";
import * as status from "./applicantStatus";

import "./Content.css";

const Content = (props) => {
  const [applicants, setApplicants] = useState([
    {
      id: 1,
      firstName: "Adam",
      lastName: "Addan",
      emailAddress: "a@a.com",
      phone: "000",
      status: status.Appointment_Set,
      appointmentDate: "2020-08-15T10:30",
    },
    {
      id: 2,
      firstName: "A",
      lastName: "2",
      emailAddress: "a@a.com",
      phone: "000",
      status: status.Property_Viewed,
      viewDate: "2020-07-17T12:01",
      bid: "250.000 €",
    },
    {
      id: 3,
      firstName: "A",
      lastName: "3",
      emailAddress: "a@a.com",
      phone: "000",
      status: status.Interested,
      new: false,
    },
    {
      id: 4,
      firstName: "A",
      lastName: "4",
      emailAddress: "a@a.com",
      phone: "000",
      status: status.Interested,
      new: true,
    },
    {
      id: 5,
      firstName: "A",
      lastName: "5",
      emailAddress: "a@a.com",
      phone: "000",
      status: status.Offer_Accepted,
      new: false,
    },
    {
      id: 6,
      firstName: "Am",
      lastName: "Mam",
      emailAddress: "a@a.com",
      phone: "000",
      status: status.Appointment_Set,
      new: true,
      appointmentDate: "2020-09-17T12:30",
    },
    {
      id: 7,
      firstName: "Boba",
      lastName: "Fett",
      emailAddress: "a@a.com",
      phone: "000",
      status: status.Appointment_Set,
      new: false,
      appointmentDate: "2020-08-19T09:30",
    },
  ]);

  return (
    <main className="Main">
      <TitleNav
        applicants={applicants}
        isMobile={props.isMobile}
        isTablet={props.isTablet}
      />
      <div className="Flex Relative Wrap">
        <SearchBar />
        <Filters />
      </div>
      <Applicants applicants={applicants} />
    </main>
  );
};

export default Content;
