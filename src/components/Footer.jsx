import React from "react";
import {FaFacebookF} from "react-icons/fa";
import{BsInstagram} from "react-icons/bs";
import {FaTiktok} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="footer py-10 bg-cyan-900 -200 text-base-content relative">
        <div>
          
          <h1 className="text-2xl font-bold md:text-4xl text-white lg:text-8xl">
            Casa fintech
            
          </h1>
           <div>
           <select className="select select-sm  bg-transparent w-32 border-black text-white md:w-48 md:select-md md:text-base mt-52">
            <option disabled selected className="bg-cyan-900 ">Idioma</option>
            <option className="bg-cyan-900 ">Español</option>
            <option className="bg-cyan-900">Marge</option>
            <option className="bg-cyan-900">Bart</option>
          </select>
            </div> 
        </div>
        
          <div className="flex justify-items-end">

        <div className="justify-items-end absolute right-36">
          <h1 className="font-bold text-white text-lg">SOBRE CASA FINTECH</h1>
          <div className="link link-hover text-lg text-white font-normal">Quiénes somos </div>
          <div className="link link-hover text-lg text-white font-normal">Sala de prensa</div>
          <div className="link link-hover text-lg text-white font-normal">Trabaja con nostros </div>
          <div className="link link-hover text-lg text-white font-normal">Idealista/hipotecas</div>
          <div className="link link-hover text-lg text-white font-normal">Idealista/data</div>
          <div className="link link-hover text-lg text-white font-normal">Idealista/news</div>
          <h1 className="font-bold text-white text-lg mt-4">PARA NEGOCIOS</h1>
          <div className="link link-hover text-lg text-white font-normal">Idealista/hipotecas</div>
        </div>

        
         <div className="btn-group btn-group-vertical  absolute right-5 ">
          <button className="btn bg-transparent border-none hover:bg-transparent text-lg md:text-3xl lg:text-5xl lg:mb-10"><FaFacebookF /></button>
           <button className="btn bg-transparent border-none hover:bg-transparent text-lg md:text-3xl lg:text-5xl lg:mb-10"><BsInstagram/></button>
           <button className="btn bg-transparent border-none hover:bg-transparent text-lg md:text-3xl lg:text-5xl lg:mb-10"><FaTiktok/></button>
           <button className="btn bg-transparent border-none hover:bg-transparent text-lg md:text-3xl lg:text-5xl "><BsTwitter/></button>
          </div>
          </div>
      
      </footer>

      <footer className="footer items-center p-4  bg-fondoHome text-neutral-content ">
  <div className="items-center grid-flow-col lg:space-x-5">
    <p className="text-xs md:text-sm lg:text-xl text-white font-semibold">© 2022 CASA FINTECH -contacto@CasaFintec.com.MX-</p>
    <p className="text-xs md:text-sm lg:text-xl text-white font-semibold">TERMINOS Y CONDICIONES</p>
    <p className="text-xs md:text-sm lg:text-xl text-white font-semibold">POLÍTICAS DE PRIVACIDAD DE DATOS Y COOKIES</p>
  </div> 
  
</footer>
    </>
  );
};

export default Footer;
