import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Replace ReactDOM.render with createRoot().render
createRoot(document.getElementById("root")).render(<App />);
