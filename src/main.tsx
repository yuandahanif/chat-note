import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

import { RouterProvider } from "react-router-dom";

import router from "./routes/route";

const Main: React.FC = () => {
  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
