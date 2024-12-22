import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

export default function Layout() {
  const [clickedLink, setClickedLink] = useState(null);

  const handleLinkClick = (link) => {
    setClickedLink(link);
    setTimeout(() => setClickedLink(null), 200);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div></div>
        <div>
          <Link
            to="/users"
            onClick={() => handleLinkClick("users")}
            style={{
              marginRight: "20px",
              textDecoration: "none",
              color: clickedLink === "users" ? "red" : "blue",
            }}
          >
            Пользователи
          </Link>
          <Link
            to="/albums"
            onClick={() => handleLinkClick("albums")}
            style={{
              textDecoration: "none",
              color: clickedLink === "albums" ? "red" : "blue",
            }}
          >
            Альбомы
          </Link>
        </div>
      </header>
      <main style={{ flex: 1, paddingBottom: "60px" }}>
        <Outlet />
      </main>
      <footer
        style={{
          padding: "20px",
          borderTop: "1px solid #ccc",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <div>Created by Violetta Gerasimenok</div>
        <div>BSU: 2024</div>
      </footer>
    </div>
  );
}
