import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import "./style.css";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import PhotoCard from "../../components/PhotoCard";
import Footer from "../../components/Footer";

const AlbumPhotosPage = () => {
  const history = useHistory();
  const { albumId } = useParams();

  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([]);

  const fetchAlbumPhotos = (albumId) => {
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setAlbums(data);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (albumId && albumId >= 1 && albumId <= 100) {
      fetchAlbumPhotos(albumId);
    } else {
      history.push("/");
    }
  }, [albumId, history]);

  return (
    <div>
      <Header subHeading={`ALBUM ${albumId}'s PHOTOS`} />
      <div className="cards-container">
        {loading && <Loader />}
        {albums.length > 0 &&
          albums.map((album) => (
            <PhotoCard title={album.title} thumbnailUrl={album.thumbnailUrl} />
          ))}
      </div>
      {!loading && <Footer />}
    </div>
  );
};

export default AlbumPhotosPage;
