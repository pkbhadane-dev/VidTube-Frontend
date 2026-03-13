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
import { Subscription } from "./pages/home/Subscription";
import { History } from "./pages/home/History";
import { Playlist } from "./pages/home/Playlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/video", element: <Video /> },
      { path: "/channel", element: <Channel /> },
      { path: "/subscription", element: <Subscription /> },
      { path: "/history", element: <History /> },
      { path: "/playlist", element: <Playlist /> },
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
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
);
