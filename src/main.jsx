import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // ➊ nạp stylesheet có Tailwind
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
