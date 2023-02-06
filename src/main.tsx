import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./stylesGlobal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog } from "./pages/Blog";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
