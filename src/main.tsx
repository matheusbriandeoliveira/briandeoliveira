import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Header } from "./sections/Header";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <App />
    <About />
    <Skills />
    <Projects />
  </StrictMode>
);
