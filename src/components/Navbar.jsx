import React, { useState } from "react";
import { AiOutlinePoweroff, AiOutlineUser } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaPlus, FaTiktok } from "react-icons/fa";
import Drawer from "../components/navbar/Drawer";


const Navbar = () => {
  const [showLogo, setShowLogo] = useState(true);
  const handleShowLogo = (e) => {
    setShowLogo(false);
  };
  const handleShowLogoT = (e) => {
    setShowLogo(true);
  };
  console.log(showLogo);
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="navbar pl-0 flex justify-between">
            <div className="z-50">
              <Drawer
                handleShowLogo={handleShowLogo}
                handleShowLogot={handleShowLogoT}
              />
            </div>
            {showLogo ? (
              <div className="flex-1 ">
                <a className="btn btn-ghost normal-case text-xl text-zinc-50">
                  CasaFintech
                </a>
              </div>
            ) : (
              ""
            )}

            <div className="mr-10">
              <div className="flex-none mr-4 md:mr-7 lg:mr-10 ">
                <div className="dropdown dropdown-hover">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost w-7 md:w-14 lg:w-20 p-0 text-sm md:text-xl lg:text-3xl text-zinc-50"
                  >
                    <AiOutlineUser className="font-bold" />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 opacity-25 rounded-box lg:w-52 md:w-40 w-44 -ml-10"
                  >
                    <li>
                      <a className="flex justify-between font-semibold text-[12px] md:text-xs ">
                        INICIA SESIÓN
                        <AiOutlinePoweroff />
                      </a>
                    </li>
                    <li>
                      <a className="flex justify-between font-semibold text-[12px] md:text-xs">
                        REGISTRATE
                        <FaPlus />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-none ">
                <button className=" w-7 md:w-14 lg:w-20 -px-10 -mr-2 md:-mr-5 lg:-mr-10 text-sm md:text-xl lg:text-3xl text-zinc-50">
                  <FaFacebookF className="-px-10" />
                </button>
                <button className=" w-7 md:w-14 lg:w-20 p-0 -mr-2 md:-mr-5 lg:-mr-10 text-sm md:text-xl lg:text-3xl text-zinc-50">
                  <BsInstagram />
                </button>
                <button className=" w-7 md:w-14 lg:w-20 p-0 -mr-2 md:-mr-5 lg:-mr-10 text-sm md:text-xl lg:text-3xl text-zinc-50">
                  <FaTiktok />
                </button>
                <button className=" w-7 md:w-14 lg:w-20 p-0 text-sm md:text-xl lg:text-3xl text-zinc-50">
                  <BsTwitter />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
