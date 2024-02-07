import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Components/Main.jsx";
import Phones from "./Components/Phones.jsx";
import Phone from "./Components/Phone.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/phones",
        element: <Phones />,
        loader: () => fetch("http://localhost:5000/phones"),
      },
      {
        path: "/phones/:id",
        element: <Phone />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/phones/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
