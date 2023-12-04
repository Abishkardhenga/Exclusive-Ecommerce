import React from "react";
import ReactDOM from "react-dom"; // Import react-dom directly
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { UserContexProvider } from "./utilis/UseContext/UseContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContexProvider>
      <App />
    </UserContexProvider>
  </BrowserRouter>
);
