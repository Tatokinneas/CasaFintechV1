import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import Drawer from "../components/navbar/Drawer"
const Home = () => {
  return (
    <>
      
      <div id="main_container" className="bg-slate-900 h-screen z-0">
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
    </>
  );
};

export default Home;
