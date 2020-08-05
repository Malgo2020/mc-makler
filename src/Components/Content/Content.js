import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Applicants from "./Applicants/Applicants";
import TitleNav from "./TitleNav/TitleNav";
import SearchBar from "./SearchBar/SearchBar";
import Filters from "./Filters/Filters";

import { loadApplicants, searchApplicants } from "./applicantsApi";

import "./Content.css";

const Content = (props) => {
  const [applicants, setApplicants] = useState([]);
  const [filteredApplicants, setFilteredApplicants] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [isFiltering, setIsFiltering] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    // timeout added to show loading icon
    setTimeout(() => {
      try {
        setApplicants(loadApplicants());
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    const urlSearch = new URLSearchParams(location.search).get("search");
    if (urlSearch) {
      setIsFiltering(true);
      setSearchString(urlSearch);
      setFilteredApplicants(searchApplicants(urlSearch));
    }
  }, []);

  const handleSearch = (event) => {
    const searchString = event.target.value;
    if (searchString === "") {
      //reset list
      setIsFiltering(false);
      setSearchString("");
      history.push("/");
    } else {
      setIsFiltering(true);
      setSearchString(searchString);
      setFilteredApplicants(searchApplicants(searchString));
      history.push(`/?search=${searchString}`);
    }
  };

  return (
    <main className="Main">
      <TitleNav
        applicants={applicants}
        isLoading={isLoading}
        isError={isError}
        isMobile={props.isMobile}
        isTablet={props.isTablet}
      />
      <div className="Flex Relative Wrap">
        <SearchBar handleSearch={handleSearch} value={searchString} />
        <Filters />
      </div>
      <Applicants
        applicants={isFiltering ? filteredApplicants : applicants}
        isLoading={isLoading}
        isError={isError}
        language={props.language}
      />
    </main>
  );
};

export default Content;
