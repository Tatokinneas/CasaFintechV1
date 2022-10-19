import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    < >
      <div id="main_container" className="bg-fondoHome  z-0 ">
        <div id="nav_container">
          <Navbar />
        </div>
        <div id="search_container" className="z-50 h-screen -mt-96">
          <SearchBar />
        </div>
        {/* <div id="footer_container" className="mt-96">
          <Footer />
        </div> */}
      </div>
    </>
  );
};

export default Home;
