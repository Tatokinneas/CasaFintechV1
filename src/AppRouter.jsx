import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetail from "./pages/PropertyDetail";
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorer" element={<PropertyDetail />} />
        <Route path="/propertyDetail" element={<PropertyDetail />} />
      </Routes>
    </>
  );
};

export default AppRouter;
