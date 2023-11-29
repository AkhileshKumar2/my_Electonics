import React from "react";
import { HomePage } from "./theme/header/HomePage";

import { Contactus } from "./components/contactus/Contactus";
import { VisitUs } from "./components/visitus/VisitUs";
import { Route, Routes } from "react-router-dom";
import { Aboutus } from "./components/aboutus/Aboutus";


export const Routing = () => {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<HomePage/>} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/visitus" element={<VisitUs />} />
      </Routes>
    </div>
  );
};
