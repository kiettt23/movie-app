import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // ➊ nạp stylesheet có Tailwind
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
