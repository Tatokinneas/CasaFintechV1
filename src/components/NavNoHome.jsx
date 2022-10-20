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
      <div className="ml-10 bg-slate-200 rounded-l-lg opacity-75">
        <div className="form-control">
          <label className="input-group input-group-sm">
            <span><AiOutlineSearch className="text-xl font-bold text-black"/></span>
            <input
              type="text"
              placeholder="Busqueda"
              className="  input-sm  bg-slate-200 text-black font-bold outline-none "
            />
          </label>
        </div>
        <select className="outline-none w-full font-semibold max-w-xs select-sm bg-slate-200 opacity-75 rounded-none">
          <option disabled selected className="font-semibold">
            Categoria
          </option>
          <option className="font-semibold">CASAS</option>
          <option className="font-semibold">DEPARTAMENTOS</option>
          <option className="font-semibold">LOFTS</option>
        </select>
        <div className="flex">
        <button className="btn btn-sm rounded-none  text-black bg-slate-200 opacity-75 hover:bg-slate-600 hover:text-white border-none">RENTAR</button>
        <button className="btn btn-sm rounded-none text-black bg-slate-200 opacity-75 hover:bg-slate-600 hover:text-white  border-none rounded-r-lg">COMPRAR</button>
        </div>
      </div>
    </div>
  );
};

export default NavNoHome;
