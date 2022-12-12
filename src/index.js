import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <nav className="nav">
      <h1>
        <span>student</span> reviews
      </h1>
    </nav>
    <App />
  </React.StrictMode>
);
