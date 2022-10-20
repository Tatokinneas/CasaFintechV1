import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    
      <div id="main_container"className="h-screen bg-fondoHome">
        <div id="nav_container" className="z-50">
          <Navbar />
        </div>
        <div id="search_container" className="z-50 -mt-96 ">
          <SearchBar />
        </div>
      </div>
    
  );
};

export default Home;
