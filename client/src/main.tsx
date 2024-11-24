import { createRoot } from "react-dom/client";
import "./reset.css";
import "./normalize.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
