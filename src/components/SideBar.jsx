import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShow = (e) => {
    setShowSidebar(true);
  };

  const handleShowNone = (e) => {
    setShowSidebar(false);
  };

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-xl mx-10  text-zinc-50 items-center cursor-pointer fixed right-5 top-6 z-50"
          onClick={handleShowNone}
        >
          <GiHamburgerMenu />
        </button>
      ) : (
        <button
          className="text-3xl text-zinc-50  ml-10 mr-5"
          onClick={handleShow}
        >
          <GiHamburgerMenu />
        </button>
      )}
      <div className=" z-40" onClick={handleShowNone}>
        <div
          className={`top-0 right-0 w-[35vw] fixed h-full z-40  ease-in-out duration-300 ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          
        </div>
      </div>
    </>
  );
};

export default SideBar;
