import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./style.css";

const SearchForm = () => {
  const history = useHistory();

  const [albumId, setAlbumId] = useState(null);

  const handleSubmission = (e) => {
    e.preventDefault();

    if (albumId >= 1 && albumId <= 100) {
      history.push(`/albums/${albumId}/photos`);
    } else {
      window.alert("Invalid Album ID. It should be among 1 and 100.");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmission}>
      <input
        type="number"
        placeholder="Enter Album ID. 1 - 100"
        onChange={(e) => setAlbumId(e.target.value)}
        required
      />
      <button type="submit">Search Photos</button>
    </form>
  );
};

export default SearchForm;
