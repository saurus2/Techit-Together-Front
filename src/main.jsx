import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root.jsx";
import "./app.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Team from "./pages/team/Team.jsx";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/home/Login.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/team/:team",
        element: <Team />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
