import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <div className="navbar ">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost text-zinc-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-zinc-50">
            CasaFintech
          </a>
        </div>
        <div className="flex-none mr-20">
          <button className=" btn btn-ghost w-7 md:w-14 lg:w-20 p-0 text-sm md:text-xl lg:text-3xl text-zinc-50">
            <AiOutlineUser />
          </button>
        </div>
        <div className="flex-none ">
          <button className="btn btn-ghost w-7 md:w-14 lg:w-20 p-0 lg:-mr-5 text-sm md:text-xl lg:text-3xl text-zinc-50">
            <FaFacebookF />
          </button>
          <button className="btn btn-ghost w-7 md:w-14 lg:w-20 p-0 -mr-5 text-sm md:text-xl lg:text-3xl text-zinc-50">
            <BsInstagram />
          </button>
          <button className="btn btn-ghost w-7 md:w-14 lg:w-20 p-0 -mr-5 text-sm md:text-xl lg:text-3xl text-zinc-50">
            <FaTiktok />
          </button>
          <button className="btn btn-ghost w-7 md:w-14 lg:w-20 p-0  text-sm md:text-xl lg:text-3xl text-zinc-50">
            <BsTwitter />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
