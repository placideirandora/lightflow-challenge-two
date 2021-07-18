import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const PhotoCard = ({ thumbnailUrl, title }) => {
  return (
    <div className="photo-card">
      <img src={thumbnailUrl} alt="thumnail" className="card-image" />
      <p className="card-title">{title}</p>
    </div>
  );
};

PhotoCard.propTypes = {
  title: PropTypes.string,
  thumbnailUrl: PropTypes.string,
};

export default PhotoCard;
