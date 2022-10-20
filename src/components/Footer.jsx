import React from "react";
import {FaFacebookF} from "react-icons/fa";
import{BsInstagram} from "react-icons/bs";
import {FaTiktok} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-cyan-900 -200 text-base-content">
        <div>
          
          <p className="text-2xl font-bold md:text-4xl text-white lg:text-8xl">
            Casa fintech
            <br/>
            <br/>
            <br/>

           <div>
           <select className="select select-sm  bg-transparent w-32 border-black md:w-48 md:select-md md:text-base">
            <option disabled selected className="bg-cyan-900 ">Idioma</option>
            <option className="bg-cyan-900 ">Español</option>
            <option className="bg-cyan-900">Marge</option>
            <option className="bg-cyan-900">Bart</option>
          </select>
            </div> 
          </p>
        </div>
        
          
        <div className="justify-items-end">
          <span className="font-bold text-white text-lg">SOBRE CASA FINTECH</span>
          <a className="link link-hover text-lg text-white font-medium">Quiénes somos </a>
          <a className="link link-hover text-lg text-white font-medium">Sala de prensa</a>
          <a className="link link-hover text-lg text-white font-medium">Trabaja con nostros </a>
          <a className="link link-hover text-lg text-white font-medium">Idealista/hipotecas</a>
          <a className="link link-hover text-lg text-white font-medium">Idealista/data</a>
          <a className="link link-hover text-lg text-white font-medium">Idealista/news</a>
          <span className="font-bold text-white text-lg mt-4">PARA NEGOCIOS</span>
          <a className="link link-hover text-lg text-white font-medium">Idealista/hipotecas</a>
        </div>

        <div>
         <div className="btn-group btn-group-vertical lg:mt-5 ">
          <button className="btn bg-transparent border-none hover:bg-transparent text-lg md:text-3xl lg:text-5xl lg:mb-10"><FaFacebookF /></button>
           <button className="btn bg-transparent border-none hover:bg-transparent text-lg md:text-3xl lg:text-5xl lg:mb-10"><BsInstagram/></button>
           <button className="btn bg-transparent border-none hover:bg-transparent text-lg md:text-3xl lg:text-5xl lg:mb-10"><FaTiktok/></button>
           <button className="btn bg-transparent border-none hover:bg-transparent text-lg md:text-3xl lg:text-5xl "><BsTwitter/></button>
          </div>
        </div>
      </footer>

      <footer className="footer items-center p-4  bg-fondoHome text-neutral-content ">
  <div className="items-center grid-flow-col lg:space-x-5">
    <p className="text-xs md:text-sm lg:text-xl text-black">© 2022 CASA FINTECH -contacto@CasaFintec.com.MX-</p>
    <p className="text-xs md:text-sm lg:text-xl text-black">TERMINOS Y CONDICIONES</p>
    <p className="text-xs md:text-sm lg:text-xl text-black">POLÍTICAS DE PRIVACIDAD DE DATOS Y COOKIES</p>
  </div> 
  
</footer>
    </>
  );
};

export default Footer;
