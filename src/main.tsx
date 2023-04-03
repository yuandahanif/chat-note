import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404Page from "./pages/404";
import Landing from "./pages/landing/landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error404Page />,
  },
  {
    path: "/note",
    element: <App />,
    errorElement: <Error404Page />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
