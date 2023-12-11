import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Card from "./components/Card.jsx";
import CallCard from "./components/CallCard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CallCard />
  </React.StrictMode>
);
