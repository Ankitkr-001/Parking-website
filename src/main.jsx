import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Parking from "./Components/Parking/Parking.jsx";
import VechilePark from "./Components/VechilePark/VechilePark.jsx";
import Unparking from "./Components/Unparking/Unparking.jsx";
import Layout1 from "./Layout/Layout1.jsx";
import Layout2 from "./Layout/Layout2.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import ConceptUsed from "./Components/ConceptUsed/ConceptUsed.jsx";
import Feedback from "./Components/Feedback/Feedback.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layout1 />,
        children: [
          { path: "/", element: <Parking /> },
          { path: "parking", element: <VechilePark /> },
          { path: "unparking", element: <Unparking /> },
        ],
      },
      {
        path: "about",
        element: <Layout2 />,
        children: [{ path: "", element: <AboutUs /> }],
      },
      {
        path: "conceptused",
        element: <Layout2 />,
        children: [{ path: "", element: <ConceptUsed /> }],
      },
      {
        path: "feedback",
        element: <Layout2 />,
        children: [{ path: "", element: <Feedback /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
