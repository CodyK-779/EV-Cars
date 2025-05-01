import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "remixicon/fonts/remixicon.css";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
