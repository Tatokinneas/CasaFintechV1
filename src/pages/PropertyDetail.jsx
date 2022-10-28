import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillFire, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BiBed } from "react-icons/bi";
import { BsHouse } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { GiBathtub, GiHomeGarage } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineWatchLater, MdSignalCellularAlt } from "react-icons/md";
import { useParams } from "react-router-dom";
import botanik from "../assets/images/botanik.jpg";
import recibidor from "../assets/images/recibidor.jpg";
import sala from "../assets/images/sala.jpg";
import Footer from "../components/Footer";
import NavNoHome from "../components/NavNoHome";
import MortageCalculator from "../components/propertyDetail/MortageCalculator";

const PropertyDetail = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { index } = useParams();
  const [dataCard, setDataCard] = useState("");

  useEffect(() => {
    axios
      .get("http://cliente.casafintech.com/propiedad/card/" + index + 1)
      .then((response) => response.data)
      .then((data) => {
        setDataCard(data);
        setIsLoading(false);
      });

    axios.get("http://cliente.casafintech.com/propiedad" + index + 1);
  }, []);

  return (
    <>
      <div className="">
        <NavNoHome />
      </div>
      <div>
        <img src={botanik} />
        <div className="flex justify-end">
          <div className="btn-group btn-group-vertical -mt-36 lg:-mt-40 ">
            <button className="btn bg-transparent hover:bg-transparent border-none ">
              {" "}
              <AiOutlineHeart className="text-lg md:text-2xl lg:text-4xl" />
            </button>
            <button className="btn bg-transparent hover:bg-transparent border-none text-orange-500">
              {" "}
              <AiFillFire className="text-lg md:text-2xl lg:text-4xl" />{" "}
            </button>
            <button className="btn bg-transparent hover:bg-transparent border-none text-green-400">
              {" "}
              <MdOutlineWatchLater className="text-lg md:text-2xl lg:text-4xl" />{" "}
            </button>
          </div>
        </div>

        <div className="  relative -mt-3 ">
          <h1 className=" absolute right-0 text-lg text-white bg-verdes px-3 rounded-md md:text-2xl lg:text-4xl">
            Publicada:14/oct/2022
          </h1>
        </div>

        <div className="flex justify-end mt-10 mr-3 space-x-3">
          <h1 className="text-xl md:text-3xl lg:mt-3">
            <FaRegEye />
          </h1>
          <h1 className="text-sm md:text-3xl lg:mt-3">3,009</h1>
        </div>

        <div className="-mt-5 m-2 lg:-mt-16">
          <h1 className="font-bold md:text-2xl lg:text-3xl lg:m-6 md:m-4 ">
            Departamento en venta,
          </h1>
          <h1 className="font-bold md:text-2xl lg:text-3xl lg:m-6 md:m-4 -mt-1 lg:-mt-7 md:-mt-4">
            bosque 1880m2
          </h1>
          <h1 className="text-sm  md:text-2xl lg:text-3xl lg:m-6 md:m-4 -mt-1 lg:-mt-6 md:-mt-3">
            Dirección de la calle #12, colonia,c.p.
          </h1>
        </div>

        <div className=" flex justify-end -mt-9 mr-3 ">
          <h1 className="text-verdes font-bold text-xl md:text-4xl md:-mt-6 md:mr-3 lg:text-7xl  lg:-mt-7 lg:mr-5">
            2,300,000
          </h1>
        </div>

        <div className="flex  lg:ml-5 md:ml-3">
          <div className="flex mt-3 m-3 ">
            <h1 className="mt-1 bg-gray-200 px-1 py-1 md:text-2xl lg:text-3xl">
              <BiBed />
            </h1>
            <h1 className="bg-blue-200 px-1 lg:text-3xl md:text-2xl  mt-1">
              3
            </h1>
          </div>

          <div className="flex mt-3 m-3 ">
            <h1 className="mt-1 bg-gray-200 lg:text-3xl md:text-2xl px-1 py-1">
              <GiBathtub />
            </h1>
            <h1 className="bg-blue-200 px-1 lg:text-3xl md:text-2xl  mt-1">
              3
            </h1>
          </div>

          <div className="flex mt-3 m-3 ">
            <h1 className="mt-1 bg-gray-200 lg:text-3xl md:text-2xl px-1 py-1">
              <GiHomeGarage />
            </h1>
            <h1 className="bg-blue-200 px-1 lg:text-3xl md:text-2xls mt-1">
              3
            </h1>
          </div>
        </div>
      </div>

      <div>
        <div className="lg:mt-16">
          <div className="flex space-x-0 ">
            <div className="card card-compact w-48 md:w-96 lg:w-5/12 lg:ml-5 md:ml-6 m-3 bg-base-100 shadow-xl">
              <img src={sala} />
            </div>

            <div className="card card-compact h-16 w-28 md:w-60 md:h-40 lg:w-2/12 lg:h-3/5  lg:ml-5 md:ml-6 m-3  bg-base-100 shadow-xl">
              <img src={recibidor} />
            </div>
          </div>

          <div className="flex space-x-5 ">
            <div className="card  bg-verdes text-primary-content w-40 md:w-80 lg:w-3/12 lg:ml-5 md:ml-6 m-3  shadow-xl">
              <div className="card-body">
                <h1 className=" text-xs -mt-5 md:text-xl lg:text-2xl">
                  INFORMACIÓN GENERAL
                </h1>
                <h1 className="text-sm md:text-xl">Área</h1>
                <h1 className="font-bold text-xs -mt-3 md:text-lg">
                  184 a 466
                </h1>
                <h1 className="text-sm md:text-xl">Recámaras</h1>
                <h1 className="font-bold text-xs -mt-3 md:text-lg">2 a 3</h1>
                <h1 className="text-sm md:text-xl">Baños</h1>
                <h1 className="font-bold text-xs -mt-3 md:text-lg">
                  2.5 a 4.5
                </h1>
                <h1 className="text-sm md:text-xl">Estacionamientos </h1>
                <h1 className="font-bold text-xs -mt-3 md:text-lg">1 a 2</h1>
              </div>
            </div>

            <div className="sm:flex sm:space-x-12">
              <div>
                <div className=" flex  space-x-2 mt-5">
                  <h1 className="text-verdes text-sm md:text-2xl">
                    AMENIDADES{" "}
                  </h1>
                  <h1 className="text-verdes md:text-2xl">
                    <BsHouse />
                  </h1>
                </div>
                <div>
                  <h1 className="text-xs font-semibold mt-5 md:text-xl">
                    GIMNASIO
                  </h1>
                  <h1 className="text-xs font-semibold md:text-xl">LUDOTECA</h1>
                  <h1 className="text-xs font-semibold md:text-xl">
                    ROOF GARDEN
                  </h1>
                  <h1 className="text-xs font-semibold md:text-xl">
                    PLAYGROUND
                  </h1>
                  <h1 className="text-xs font-semibold md:text-xl">ALBERCA</h1>
                  <h1 className="text-xs font-semibold md:text-xl">
                    SALA DE EVENTOS
                  </h1>
                  <h1 className="text-xs font-semibold md:text-xl">CANCHAS</h1>
                </div>
              </div>
            </div>

            <div className="sm:mt-7">
              <h1 className="text-xs mt-4 font-semibold sm:text-2xl">
                Entrega desde
              </h1>
              <h1 className=" text-xs mr-2  mt-2 font-bold  text-right sm:text-xl sm:font-bold">
                Agosto 2021
              </h1>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-end lg:-mt-96 ">
          <div className="bg-gray-200 w-72 rounded-lg md:rounded-lg lg:rounded-lg md:ml-56  m-12 md:w-96 lg:-mt-96">
            <div>
              <div className="m-5  ">
                <h1 className="font-bold text-lg md:text-2xl lg:text-4xl ">
                  Departamento
                </h1>
                <h1 className="font-bold text-lg  md:text-2xl lg:text-4xl md:-mt-2 -mt-2 ">
                  en venta, bosque
                </h1>
                <h1 className="font-bold text-lg md:text-2xl lg:text-4xl md:-mt-2 -mt-2 ">
                  1880m2
                </h1>
                <h1 className="text-lg md:text-xl md:-mt-1 lg:text-3xl -mt-2">
                  Dirección de la calle #12,
                </h1>
                <h1 className="text-lg md:text-xl md:-mt-1 lg:text-3xl -mt-3">
                  colonia,C.P.
                </h1>
              </div>
              <div className="flex  lg:ml-5 md:ml-3 -mt-6 m-2">
                <div className="flex mt-3 m-3 ">
                  <h1 className="mt-1 bg-gray-200 px-1 py-1 lg:text-3xl md:text-2xl">
                    <BiBed />
                  </h1>
                  <h1 className="bg-blue-200 px-1 lg:text-3xl md:text-2xl mt-1">
                    3
                  </h1>
                </div>

                <div className="flex mt-3 m-3 ">
                  <h1 className="mt-1 bg-gray-200 lg:text-3xl md:text-2xl px-1 py-1">
                    <GiBathtub />
                  </h1>
                  <h1 className="bg-blue-200 px-1 lg:text-3xl md:text-2xl  mt-1">
                    3
                  </h1>
                </div>

                <div className="flex mt-3 m-3 ">
                  <h1 className="mt-1 bg-gray-200 lg:text-3xl md:text-2xl px-1 py-1">
                    <GiHomeGarage />
                  </h1>
                  <h1 className="bg-blue-200 px-1 lg:text-3xl md:text-2xl mt-1">
                    3
                  </h1>
                </div>
              </div>
              <div className="flex justify-center space-x-4 bg-verdes h-8 md:h-11 lg:h-14 ">
                <h1 className=" text-xl  font-bold text-white md:text-2xl lg:text-4xl ">
                  $2,300,000
                </h1>
                <h1 className=" text-xl  text-white md:text-2xl lg:text-4xl">
                  {" "}
                  MXN
                </h1>
              </div>
              <div className="flex justify-center mb-3 mt-3">
                <h1 className="font-bold text-lg md:text-2xl">
                  Contacta con el vendedor
                </h1>
              </div>
              .
              <div className="-mt-4 m-5">
                <div className="form-control">
                  <label className="input-group input-group-md">
                    <span>
                      <AiOutlineUser className="md:text-2xl lg:text-4xl" />
                    </span>
                    <input
                      type="text"
                      placeholder="NOMBRE"
                      className="input input-bordered input-md md:w-52 lg:w-62 bg-gray-200  border-solid"
                    />
                  </label>
                </div>

                <div className="form-control">
                  <label className="input-group input-group-md">
                    <span>
                      <HiOutlineMail className="md:text-2xl lg:text-4xl" />
                    </span>
                    <input
                      type="text"
                      placeholder="CORREO"
                      className="input input-bordered input-md lg:w-62 md:w-52 bg-gray-200  border-solid"
                    />
                  </label>
                </div>

                <div className="form-control">
                  <label className="input-group input-group-md">
                    <span>
                      <MdSignalCellularAlt className="md:text-2xl lg:text-4xl" />
                    </span>
                    <input
                      type="text"
                      placeholder="TELEFONO"
                      className="input input-bordered input-md md:w-52 lg:w-62 bg-gray-200  border-solid"
                    />
                  </label>
                </div>
              </div>
              <div className="-mt-2 m-7 lg:ml-11">
                <textarea
                  className="textarea textarea-bordered w-60  md:w-64 bg-gray-200  border-solid"
                  placeholder="MENSAJE..."
                ></textarea>
              </div>
              <div className="flex justify-center -mt-2 ">
                <button className="btn glass bg-purple-800 hover:bg-purple-800 w-52 mb-10">
                  CONTACTAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex justify-end lg:mr-10">
        <div className="-mt-10 ">
          <h1 className="text-center text-sm md:text-lg  ">
            Al hacer clic en "Eviar" aceptas nuestros Términos{" "}
          </h1>
          <h1 className="text-center text-sm md:text-lg">
            y Condiciones ,Políticas de privacidad y
          </h1>
          <h1 className="text-center text-sm md:text-lg">
            {" "}
            recibir conmunicaciones de marketing
          </h1>
        </div>
      </div>

      <div>
        <div className="lg:mt-14">
          <h1 className="ml-5 mt-5 text-verdes text-lg md:text-2xl md:ml-6 lg:text-4xl mb-5">
            Descripción
          </h1>
          <h1 className="ml-5 mr-3 md:text-lg md:ml-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod{" "}
          </h1>
          <h1 className="ml-5 mr-3 md:text-lg md:ml-6">
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
            enim ad minim veniam, quis nostrud
          </h1>
          <h1 className="ml-5 mr-3 md:text-lg md:ml-6">
            exerci tation ullamcorper suscipit lobor tis nisl ut aliquip ex ea
            commodo consequat.
          </h1>
          <h1 className="ml-5 mr-3 md:text-lg md:ml-6">
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat,{" "}
          </h1>
          <h1 className="ml-5 mr-3 md:text-lg md:ml-6">
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
            et iusto odio dignissim qui blandit .
          </h1>
          <h1 className="ml-5 mr-3 md:text-lg md:ml-6">
            praesent luptatum zzril delenit augue duis dolore te feugait nulla
            faci lisi
          </h1>
          <h1 className="ml-5 mr-3 md:text-lg md:ml-6 md:mb-9 mb-5 mt-3">
            {" "}
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh eu
          </h1>
        </div>
        <div>
          <MortageCalculator price={200000} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PropertyDetail;
