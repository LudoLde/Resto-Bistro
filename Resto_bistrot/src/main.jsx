import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.css";
import Accueil from "./Pages/Accueil";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Accueil />} />
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);
