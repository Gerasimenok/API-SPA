import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUsers } from "../api";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch((err) => {
        setError(err);
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {users.map((user) => (
        <Link key={user.id} to={`/users/${user.id}`}>
          <div>{user.name}</div>
        </Link>
      ))}
    </div>
  );
}
