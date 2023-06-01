import React from "react";
import { Route, Routes } from "react-router-dom";
import Services from "./components/services/Services";
import Banner from "./components/banner/Banner";
import NotFound from "./components/404/NotFound";

const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto">
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
