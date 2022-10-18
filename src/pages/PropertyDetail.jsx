import React from "react";
import botanik from "../assets/images/botanik.jpg"
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

      <div>
        <img src={botanik} />
      </div>
<div className="">
<div className="btn-group btn-group-vertical">
  <button className="btn bg-transparent hover:bg-transparent border-none "> <AiOutlineHeart className="text-lg"/></button>
  <button className="btn bg-transparent hover:bg-transparent border-none text-orange-500"> <AiFillFire className="text-lg"/> </button>
  <button className="btn bg-transparent hover:bg-transparent border-none text-green-400"> <MdOutlineWatchLater className="text-lg"/> </button>
</div>

<div className="bg-verdes rounded-md ">
  <h1 className=" text-lg text-white">Publicada:14/oct/2022</h1>
</div>

<div className="flex">
  <h1><FaRegEye/></h1>
  <h1>3,009</h1>
</div>
<div>
  <h1>Departamento en venta,</h1>
  <h1>bosque 1880m2</h1>
  <h1>Dirección de la calle #12, colonia,c.p.</h1>
</div>

<div className=" text-verdes font-bold">2,300,000</div>

<div className="flex">
<h1><BiBed/></h1>
<h1>3</h1>
<h1><GiBathtub/></h1>
<h1>3</h1>
<h1><GiHomeGarage/></h1>
<h1>3</h1>
</div>






</div>

      
    </div>
    <div>card</div>
    <div>finS</div>

  </div>;
};

export default PropertyDetail;
