import * as status from "./applicantStatus";

const mockData = [
  {
    id: 1,
    firstName: "Adam",
    lastName: "Brown",
    emailAddress: "adam@address.com",
    phone: "+49 146 344 23811",
    status: status.Appointment_Set,
    appointmentDate: "2020-08-15T10:30",
  },
  {
    id: 2,
    firstName: "Betty",
    lastName: "Green",
    emailAddress: "betty@address.com",
    phone: "+49 147 644 23812",
    status: status.Property_Viewed,
    viewDate: "2020-07-17T12:01",
    bid: "250.000 €",
  },
  {
    id: 3,
    firstName: "Carole",
    lastName: "Smith",
    emailAddress: "carole@address.com",
    phone: "+49 147 644 23812",
    status: status.Interested,
    new: false,
  },
  {
    id: 4,
    firstName: "Darrel",
    lastName: "Cartrip",
    emailAddress: "darrel@address.com",
    phone: "+49 147 644 23812",
    status: status.Interested,
    new: true,
  },
  {
    id: 5,
    firstName: "Edward",
    lastName: "Random",
    emailAddress: "edward@address.com",
    phone: "+49 147 644 23835",
    status: status.Offer_Accepted,
    new: false,
    viewDate: "2020-07-25T11:30",
    bid: "400.000 €",
  },
  {
    id: 6,
    firstName: "Frank",
    lastName: "Mercy",
    emailAddress: "frank@address.com",
    phone: "+49 147 644 23877",
    status: status.Appointment_Set,
    new: true,
    appointmentDate: "2020-09-17T12:30",
  },
  {
    id: 7,
    firstName: "Bob",
    lastName: "Ferguson",
    emailAddress: "bob@address.com",
    phone: "+49 147 644 23815",
    status: status.Appointment_Set,
    new: false,
    appointmentDate: "2020-08-19T09:30",
  },
  {
    id: 8,
    firstName: "Graham",
    lastName: "McCartney",
    emailAddress: "graham@address.com",
    phone: "+49 147 644 23707",
    status: status.Appointment_Set,
    new: false,
    appointmentDate: "2020-08-22T15:30",
  },
  {
    id: 9,
    firstName: "Henry",
    lastName: "Ford",
    emailAddress: "henry@address.com",
    phone: "+49 147 644 23815",
    status: status.Interested,
    new: false,
  },
  {
    id: 10,
    firstName: "Iain",
    lastName: "McMillan",
    emailAddress: "iain@address.com",
    phone: "+49 147 644 23000",
    status: status.Property_Viewed,
    new: false,
    viewDate: "2020-07-19T08:30",
    bid: "300.000 €",
  },
];

// this would normally be a fetch request to a server
export const loadApplicants = () => mockData;

export const searchApplicants = (queryString) => {
  const query = queryString.toLowerCase();
  let result = mockData.filter(
    (applicant) =>
      applicant.firstName.toLowerCase().includes(query) ||
      applicant.lastName.toLowerCase().includes(query) ||
      applicant.emailAddress.toLowerCase().includes(query)
  );

  return result;
};

export default loadApplicants;
