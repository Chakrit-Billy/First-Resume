import React from "react";
import ReactDOM from "react-dom/client";
import Page1 from "../componenets/Page1";
import "./index.css";
import Page2 from "../componenets/Page2";
import Page3 from "../componenets/Page3";
import Page4 from "../componenets/Page4";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
  </React.StrictMode>
);
