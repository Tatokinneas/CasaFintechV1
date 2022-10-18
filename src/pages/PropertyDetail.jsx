import React from "react";
import botanik from "../assets/images/botanik.jpg"
import sala from "../assets/images/sala.jpg"
import recibidor from "../assets/images/recibidor.jpg"
import {AiOutlineHeart} from "react-icons/ai";
import {AiFillFire} from "react-icons/ai";
import{MdOutlineWatchLater} from "react-icons/md";
import {FaRegEye} from "react-icons/fa";
import {BiBed} from "react-icons/bi";
import{GiBathtub} from "react-icons/gi";
import{GiHomeGarage} from "react-icons/gi";

const PropertyDetail = () => {
  return <div>
    <div>
        <img src={botanik} />
<div className="flex justify-end">
<div className="btn-group btn-group-vertical -mt-36 lg:-mt-40 ">
  <button className="btn bg-transparent hover:bg-transparent border-none "> <AiOutlineHeart className="text-lg md:text-2xl lg:text-4xl"/></button>
  <button className="btn bg-transparent hover:bg-transparent border-none text-orange-500"> <AiFillFire className="text-lg md:text-2xl lg:text-4xl"/> </button>
  <button className="btn bg-transparent hover:bg-transparent border-none text-green-400"> <MdOutlineWatchLater className="text-lg md:text-2xl lg:text-4xl"/> </button>

  </div>
  </div>

<div className="  relative -mt-3 ">
  <h1 className=" absolute right-0 text-lg text-white bg-verdes px-3 rounded-md md:text-2xl lg:text-4xl">Publicada:14/oct/2022</h1>
</div>

<div className="flex justify-end mt-10 mr-3 space-x-3">
  <h1 className="text-xl md:text-3xl lg:mt-3"><FaRegEye/></h1>
  <h1 className="text-sm md:text-3xl lg:mt-3">3,009</h1>
</div>

<div className="-mt-5 m-2 lg:-mt-16">
  <h1 className="font-bold md:text-2xl lg:text-3xl lg:m-6 md:m-4 ">Departamento en venta,</h1>
  <h1 className="font-bold md:text-2xl lg:text-3xl lg:m-6 md:m-4 -mt-1 lg:-mt-7 md:-mt-4">bosque 1880m2</h1>
  <h1 className="text-sm  md:text-2xl lg:text-3xl lg:m-6 md:m-4 -mt-1 lg:-mt-6 md:-mt-3">Dirección de la calle #12, colonia,c.p.</h1>
</div>

<div className=" flex justify-end -mt-9 mr-3 ">
<h1 className="text-verdes font-bold text-xl md:text-4xl md:-mt-6 md:mr-3 lg:text-7xl  lg:-mt-7 lg:mr-5">2,300,000</h1>
</div>

<div className="flex  lg:ml-5 md:ml-3">
<div className="flex mt-3 m-3 ">
<h1 className="mt-1 bg-gray-200 px-1 py-1 lg:text-3xl"><BiBed/></h1>
<h1 className="bg-blue-200 px-1 lg:text-3xl  mt-1">3</h1>
</div>

<div className="flex mt-3 m-3 ">
<h1 className="mt-1 bg-gray-200 lg:text-3xl  px-1 py-1"><GiBathtub/></h1>
<h1 className="bg-blue-200 px-1 lg:text-3xl   mt-1" >3</h1>
</div>

<div className="flex mt-3 m-3 ">
<h1 className="mt-1 bg-gray-200 lg:text-3xl  px-1 py-1"><GiHomeGarage/></h1>
<h1 className="bg-blue-200 px-1 lg:text-3xl  mt-1">3</h1>
</div>

</div>









      
    </div>



    <div>

<div className="flex space-x-0">
    <div className="card card-compact w-48 md:w-96 lg:w-5/12  lg:ml-5 md:ml-6 m-3 bg-base-100 shadow-xl">
    <img src={sala}/>
    </div>

    <div className="card card-compact h-16 w-28 md:w-60 md:h-40 lg:w-2/12 lg:h-3/5  lg:ml-5 md:ml-6 m-3  bg-base-100 shadow-xl">
    <img src={recibidor}/>
    </div>





</div>


    </div>
    <div>finS</div>

  </div>;
};

export default PropertyDetail;
