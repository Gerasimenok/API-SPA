import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchUserById, fetchAlbumsByUserId } from "../api";

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([fetchUserById(id), fetchAlbumsByUserId(id)])
      .then(([userData, albumsData]) => {
        setUser(userData);
        setAlbums(albumsData);
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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <div>
        <h2>{user.name}</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Site: {user.website}</p>
        <h3>Albums:</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {albums.map((album) => (
            <li key={album.id}>
              <a
                href={`/albums/${album.id}`}
                style={{ textDecoration: "none", color: "blue" }}
              >
                {album.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
