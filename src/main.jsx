import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/authentication/Login";
import { Signup } from "./pages/authentication/Signup";
import { Video } from "./pages/home/Video";
import { Layout } from "./Layout";
import { Channel } from "./pages/home/Channel";
import { PlaylistModal } from "./components/playlist-model";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/video", element: <Video /> },
      {path: "/channel", element: <Channel/>},
      {path: "/playlist-model", element: <PlaylistModal/>}
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  // { path: "/video", element: <Video /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
);
