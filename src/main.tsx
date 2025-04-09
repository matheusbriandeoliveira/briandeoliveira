import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Header } from "./sections/Header";
import { About } from "./sections/About";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <App />
    <About />
  </StrictMode>
);
