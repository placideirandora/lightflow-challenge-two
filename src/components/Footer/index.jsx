import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Footer = () => {
  return (
    <footer>
      <Link to="/" class="button">
        Back Home
      </Link>
    </footer>
  );
};

export default Footer;
