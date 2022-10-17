import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetail from "./pages/PropertyDetail";
import Explorer from "./pages/Explorer"
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/propertyDetail" element={<PropertyDetail />} />
      </Routes>
    </>
  );
};

export default AppRouter;
