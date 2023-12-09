import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//Added bootstrap to the application
//We removed Index.css file and its reference from here because we will be using bootstrap
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
