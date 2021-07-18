import React from "react";

import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NotFoundSvg from "../../assets/not-found.svg";

const NotFoundPage = () => {
  return (
    <div className="page-not-found">
      <Header subHeading="Page Not Found" />
      <div className="svg-container">
        <img src={NotFoundSvg} alt="Not Found" />
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
