import React from 'react';
import PropTypes from 'prop-types';


import './style.css';

const Header = ({ subHeading }) => {
    return (
        <div className="header">
            <h1 className="heading">Lightflow Challenge Two</h1>
            <h2 className="sub-heading">{ subHeading }</h2>
        </div>
    )
}

Header.propTypes = {
    subHeading: PropTypes.string
  }

export default Header;
