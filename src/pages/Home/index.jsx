import React from "react";

import Header from "../../components/Header";
import SearchForm from "../../components/SearchForm";

const HomePage = () => {
  return (
    <div>
      <Header subHeading="Search Album Photos" />
      <SearchForm />
    </div>
  );
};

export default HomePage;
