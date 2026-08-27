import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-screen bg-[#FAFAF9] font-sans">
      <div className="mx-auto w-full max-w-[3000px] px-4 lg:px-6 2xl:px-8">
        <App />
      </div>
    </div>
  </StrictMode>,
);
