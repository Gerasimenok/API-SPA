import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Page not found</p>
      <Link to="/" className="not-found-link">
        Вернуться на главную
      </Link>
    </div>
  );
}
