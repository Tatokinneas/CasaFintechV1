import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Drawer = () => {
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
        ""
      ) : (
        <button className="text-4xl text-white ml-10" onClick={handleShow}>
          <HiMenu />
        </button>
      )}
      <div className="" onClick={handleShowNone}>
        <div
          className={`top-0 left-0   fixed    duration-300 ${
            showSidebar ? "translate-y-0 " : "translate-y-full"
          }`}
        >
          <ul className="menu h-screen  w-64 bg-gray-300 opacity-50 text-base-content ">
            {/* <!-- Sidebar content here --> */}
            {/* <button class="btn rounded-none">Cerrar sesion</button> */}

            <button
              className="btn w-14 bg-gray-300 border-none hover:bg-none text-5xl text-white opacity-100 p-0 mt-5 ml-2"
              onClick={handleShowNone}
            >
              <HiMenu className="  " />
            </button>

            <li className="font-semibold">
              <Link to="/explorer" className="w-full">
                <a>PERFIL</a>
              </Link>
            </li>
            <li className="font-semibold">
              <Link to="/explorer" className="w-full">
                <a>FAVORITOS</a>
              </Link>
            </li>
            <li className="font-semibold">
              <Link to="/explorer" className="w-full">
                <a>CALCULADORA</a>
              </Link>
            </li>
            <li className="font-semibold">
              <Link to="/explorer" className="w-full">
                <a>LO MAS VISTO</a>
              </Link>
            </li>
            <li className="font-semibold">
              <Link to="/explorer" className="w-full">
                <a>NUEVAS PROPIEDADES</a>
              </Link>
            </li>
            <li className="font-semibold">
              <Link to="/explorer" className="w-full">
                <a>BLOG</a>
              </Link>
            </li>
            <li className="font-semibold">
              <Link to="/explorer" className="w-full">
                <a>Explorar</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
