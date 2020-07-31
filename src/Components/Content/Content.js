import React, { useState } from "react";
import Applicants from "./Applicants/Applicants";
import TitleNav from "./TitleNav/TitleNav";
import SearchBar from "./SearchBar/SearchBar";
import Filters from "./Filters/Filters";

import "./Content.css";

const Content = () => {
  const [applicants, setApplicants] = useState([
    {
      firstName: "A",
      lastName: "1",
      emailAddress: "a@a.com",
      status: "Appointment_Set", // Appointment
      appointmentDate: "2020-08-05",
    },
    {
      firstName: "A",
      lastName: "2",
      emailAddress: "a@a.com",
      status: "Property_Viewed", // Viewed
      viewDate: "2020-07-15",
      bid: "250.000",
    },
    {
      firstName: "A",
      lastName: "3",
      emailAddress: "a@a.com",
      status: "Interested", // Others
      new: false,
    },
    {
      firstName: "A",
      lastName: "4",
      emailAddress: "a@a.com",
      status: "Interested",
      new: true, // New
    },
    {
      firstName: "A",
      lastName: "5",
      emailAddress: "a@a.com",
      status: "Offer_Accepted", // Others
      new: false,
    },
  ]);

  return (
    <main className="Main">
      <TitleNav applicants={applicants} />
      <div className="Flex">
        <SearchBar />
        <Filters />
      </div>
      <Applicants applicants={applicants} />
    </main>
  );
};

export default Content;
