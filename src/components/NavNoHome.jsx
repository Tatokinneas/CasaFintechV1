import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Drawer from "./navbar/Drawer";

const NavNoHome = () => {
  return (
    <div className="navbar bg-fondoHome h-6 ">
      <div className="z-50">
        <Drawer />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-white -mt-2">casafintech</h1>
        <h1 className="ml-8 font-medium text-white">SLOGAN FINTECH</h1>
      </div>
      <div className="ml-10">
        <div className="form-control">
          <label className="input-group input-group-sm">
            <span>SM</span>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-sm outline-none"
            />
          </label>
        </div>
        <select className="select select-bordered w-full max-w-xs select-sm">
          <option disabled selected>
            Who shot first?
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <div className="flex">
        <button className="btn btn-sm">Small</button>
        <button className="btn btn-sm">Small</button>
        </div>
      </div>
    </div>
  );
};

export default NavNoHome;
