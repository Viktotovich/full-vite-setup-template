import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
//demo router setup
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExampleRoute from "./components/routes-example.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "test",
    element: <ExampleRoute />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
