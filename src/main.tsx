import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./components/App";
import "./styles/reset.scss";
import "./styles/fonts.scss";
import "./styles/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
