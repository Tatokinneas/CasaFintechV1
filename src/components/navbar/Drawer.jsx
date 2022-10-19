import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import {AiOutlineUser,AiOutlineHeart,AiOutlineCalculator,AiFillFire,AiOutlineClockCircle,AiOutlineSearch} from "react-icons/ai";
import {GrDocumentText} from "react-icons/gr"

const Drawer = ({handleShowLogo,handleShowLogot}) => {
  const [showSidebar, setShowSidebar] = useState(false)




  const handleShow = (e) => {
    setShowSidebar(true);
    handleShowLogo();
    
  };

  const handleShowNone = (e) => {
    setShowSidebar(false);
    handleShowLogot();
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
                <a className="flex justify-between w-full">
                  PERFIL
                  <AiOutlineUser className="text-xl" />
                </a>
              </Link>
            </li>
            <li className="font-semibold">
              <Link to="/explorer" className="w-full">
                <a className="flex justify-between w-full">
                  FAVORITOS
                  <AiOutlineHeart className="text-xl"/>
                </a>
              </Link>
            </li>
            <li className="font-semibold">
              <Link to="/explorer" className="w-full">
                <a className="flex justify-between w-full">
                  CALCULADORA
                  <AiOutlineCalculator  className="text-xl"/>
                </a>
              </Link>
            </li>
            <li className="font-semibold">
              <Link to="/explorer" className="w-full">
                <a className="flex justify-between w-full">
                  LO MAS VISTO
                  <AiFillFire className="text-xl"/>
                </a>
              </Link>
            </li>
            <li className="font-semibold">
              <Link to="/explorer" className="w-full">
                <a className="flex justify-between w-full">
                  NUEVAS PROPIEDADES
                  <AiOutlineClockCircle className="text-xl"/>
                  </a>
              </Link>
            </li>
            <li className="font-semibold">
              <Link to="/explorer" className="w-full">
                <a  className="flex justify-between w-full">
                  BLOG
                  <GrDocumentText  className="text-xl"/>
                </a>
              </Link>
            </li>
            <li className="font-semibold">
              <Link to="/explorer" className="w-full">
                <a className="flex justify-between w-full">
                  Explorar
                  <AiOutlineSearch className="text-xl"/>
                  </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
