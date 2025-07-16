import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { CssBaseline } from "@mui/material";
ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <CssBaseline />
  <div onContextMenu={(e) => e.preventDefault()}>
    <App />
    </div>
  </React.StrictMode>
);