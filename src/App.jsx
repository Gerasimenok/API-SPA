import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout";
import Users from "./routes/Users";
import User from "./routes/User";
import Albums from "./routes/Albums";
import Album from "./routes/Album";
import NotFound from "./routes/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/users", element: <Users /> },
      { path: "/users/:id", element: <User /> },
      { path: "/albums", element: <Albums /> },
      { path: "/albums/:id", element: <Album /> },
      { path: "/not-found", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
