import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// 路由配置
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
