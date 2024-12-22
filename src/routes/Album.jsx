import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchAlbumById, fetchPhotosByAlbumId, fetchUserById } from "../api";
import "./Album.css";

export default function Album() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([fetchAlbumById(id), fetchPhotosByAlbumId(id)])
      .then(([albumData, photosData]) => {
        setAlbum(albumData);
        setPhotos(photosData);
        return fetchUserById(albumData.userId);
      })
      .then((userData) => {
        setUser(userData);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="album">
      <div className="album-header">
        <h2 className="album-title">{album.title}</h2>
        {user && (
          <p style={{ marginTop: "8px" }}>
            Created by:{" "}
            <Link
              to={`/users/${user.id}`}
              style={{ textDecoration: "underline", color: "#007bff" }}
            >
              {user.name}
            </Link>
          </p>
        )}
      </div>
      <div className="photos">
        {photos.map((photo) => (
          <div key={photo.id} className="photo">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <div className="photo-title">{photo.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
