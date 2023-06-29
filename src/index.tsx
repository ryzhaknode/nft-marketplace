import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter> */
