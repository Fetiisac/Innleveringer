import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";


// Render React-appen inn i root-diven som allerede finnes
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
