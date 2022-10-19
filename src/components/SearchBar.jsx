import React from "react";
import {AiOutlineSearch} from "react-icons/ai"

const SearchBar = () => {
  return (
    <div className="mx-64 " >
      <div className="navbar bg-slate-200 rounded-2xl h-5 opacity-75 w-full p-0 ">
      <div className="form-control">
  <div className="flex">
    <div className="py-10"><AiOutlineSearch className="text-2xl text-black"/></div>
    <input type="text" placeholder="Busqueda" className="outline-none  bg-slate-200 font-semibold text-lg border-0  text-black h-16 border-l-2 border-slate-300  border-r-0 border-t-0 border-b-0 mt- " />
  </div>
</div>
<select className="select select-ghost w-full max-w-xs font-semibold text-lg text-black rounded-none h-16 border-l-2 border-slate-300  border-r-0 border-t-0 border-b-0 outline-none">
  <option disabled selected className="bg-slate-200">Categoria</option>
  <option className="bg-slate-200 ">CASAS</option>
  <option className="bg-slate-200">DEPARTAMENTOS</option>
  <option className="bg-slate-200 ">LOFT</option>
</select>
<div className="">
  <button className="btn btn-ghost font-semibold text-lg text-black rounded-none hover:bg-gray-600 hover:text-white h-16 border-l-2 border-slate-300  border-r-0 border-t-0 border-b-0">RENTAR</button>
  <button className="btn btn-ghost font-semibold text-lg text-black  h-16 rounded-none hover:bg-gray-600 hover:text-white border-l-2 border-slate-300 rounded-r-xl w-36 border-r-0 border-t-0 border-b-0 ">COMPRAR</button>
  
</div>
</div>
</div>
  );
};

export default SearchBar;
