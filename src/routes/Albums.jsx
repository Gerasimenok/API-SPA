import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Albums.css";

const API_URL = "https://jsonplaceholder.typicode.com";

export default function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(`${API_URL}/posts`);
        const data = await response.json();

        const generatedAlbums = data.slice(0, 10).map((item, index) => ({
          id: index + 1,
          title: item.title,
        }));

        setAlbums(generatedAlbums);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div className="albums">
      {albums.map((album) => (
        <Link key={album.id} to={`/not-found`} className="album-link">
          <div className="album-item-title">{album.title}</div>
        </Link>
      ))}
    </div>
  );
}
