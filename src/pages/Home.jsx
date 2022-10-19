import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-slate-500 ">
      
      <div id="main_container" className="bg-fondoHome h-screen ">
        <div id="nav_container">
          <Navbar />
        </div>
        <div id="search_container">
          <SearchBar />
        </div>
        <div id="footer_container">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
