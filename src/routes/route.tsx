import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error404Page from "@pages/404";
import AddNote from "@pages/add/add";
import Register from "@pages/auth/register";
import Landing from "@pages/landing/landing";
import DetailNote from "@pages/note/detail";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Error404Page />,
  },
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error404Page />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error404Page />,
  },
  {
    path: "/note",
    element: <App />,
    errorElement: <Error404Page />,
    children: [
      {
        path: "/note",
        element: (
          <div className="flex h-full w-full flex-col items-center justify-center">
            <span className="text-sm">
              Buat tulisan baru atau lihat tulisan lama pada panel kiri.
            </span>
          </div>
        ),
      },
      { path: "/note/add", element: <AddNote /> },
      { path: "/note/:id", element: <DetailNote /> },
    ],
  },
]);

export default router;
