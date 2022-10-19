import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import Drawer from "../components/navbar/Drawer"

const Navbar = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="navbar pl-0">
            
            <div className="flex-1">
              <Drawer/>
              <a className="btn btn-ghost normal-case text-xl text-zinc-50">
                CasaFintech
              </a>
            </div>
            <div className="flex-none mr-4 md:mr-7 lg:mr-10">
              <button className=" btn btn-ghost w-7 md:w-14 lg:w-20 p-0 text-sm md:text-xl lg:text-3xl text-zinc-50">
                <AiOutlineUser />
              </button>
            </div>
            <div className="flex-none ">
              <button className="btn btn-ghost w-7 md:w-14 lg:w-20 p-0 -mr-2 md:-mr-5 lg:-mr-10 text-sm md:text-xl lg:text-3xl text-zinc-50">
                <FaFacebookF />
              </button>
              <button className="btn btn-ghost w-7 md:w-14 lg:w-20 p-0 -mr-2 md:-mr-5 lg:-mr-10 text-sm md:text-xl lg:text-3xl text-zinc-50">
                <BsInstagram />
              </button>
              <button className="btn btn-ghost w-7 md:w-14 lg:w-20 p-0 -mr-2 md:-mr-5 lg:-mr-10 text-sm md:text-xl lg:text-3xl text-zinc-50">
                <FaTiktok />
              </button>
              <button className="btn btn-ghost w-7 md:w-14 lg:w-20 p-0 text-sm md:text-xl lg:text-3xl text-zinc-50">
                <BsTwitter />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
