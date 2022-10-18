import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdLocationOn } from "react-icons/md";
import Maps from "../components/explorer/Maps";

const Explorer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [valorPrecio, setValorPrecio] = useState(0);
  const [valorSuperficie, setValorSuperficie] = useState(0);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);

  const cambioCheck1 = () => {
    setCheck1(true);
  };
  const cambioCheckF1 = () => {
    setCheck1(false);
  };
  const cambioCheck2 = () => {
    setCheck2(true);
  };
  const cambioCheckF2 = () => {
    setCheck2(false);
  };
  const cambioCheck3 = () => {
    setCheck3(true);
  };
  const cambioCheckF3 = () => {
    setCheck3(false);
  };
  const cambioCheck4 = () => {
    setCheck4(true);
  };
  const cambioCheckF4 = () => {
    setCheck4(false);
  };
  const cambioCheck5 = () => {
    setCheck5(true);
  };
  const cambioCheckF5 = () => {
    setCheck5(false);
  };
  const cambioCheck6 = () => {
    setCheck6(true);
  };
  const cambioCheckF6 = () => {
    setCheck6(false);
  };
  const cambioCheck7 = () => {
    setCheck7(true);
  };
  const cambioCheckF7 = () => {
    setCheck7(false);
  };

  const rangoPrecio = (e) => {
    setValorPrecio(e.target.value);
  };

  const rangoSuperficie = (e) => {
    setValorSuperficie(e.target.value);
  };

  useEffect(() => {
    axios.get("https://cliente.casafintech.com/propiedad").then((response) => {
      setData(response.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:flex m-5">
      <div className="card w-full h-[625px] lg:w-96 mr-5 my-5 bg-gray-200 shadow-xl  lg:sticky top-5  ">
        <div className="overflow-auto">
        <div className="card-body p-4">
          <h2 className="card-title font-bold text-2xl flex justify-center space-x-3">
            <MdLocationOn /> LOCALIDAD
          </h2>
        </div>
        <Maps />
        <div className="form-control px-5">
          <label className="label py-0">
            <span className="label-text font-bold ">RANGO DE PRECIO</span>
          </label>
          <input
            type="range"
            min="1"
            max="6"
            className="range range-accent "
            onChange={rangoPrecio}
          />
          <label className="label font-semibold">
            <span className="label-text-alt">Minimo</span>
            <span className="label-text-alt">Maximo</span>
          </label>
        </div>
        <div className="form-control px-5 mt-4">
          <label className="label py-0">
            <span className="label-text font-bold ">SUPERFICIE</span>
          </label>
          <input
            type="range"
            min="1"
            max="6"
            className="range range-accent"
            onChange={rangoSuperficie}
          />
          <label className="label font-semibold">
            <span className="label-text-alt">Minimo</span>
            <span className="label-text-alt">Maximo</span>
          </label>
        </div>
        <h1 className="ml-5 mt-3 font-bold">CARACTERÍSTICAS</h1>
        <div className="mx-5 space-y-3 font-semibold text-sm mt-5">
          <div className="flex justify-between">
            <h1>RECAMARAS</h1>
            <input type="number" className="w-16 flex justify-center" />
          </div>
          <div className="flex justify-between">
            <h1>BAÑOS COMPLETOS</h1>
            <input type="number" className="w-16 flex justify-center" />
          </div>
          <div className="flex justify-between">
            <h1>ESTACIONAMIENTO</h1>
            <input type="number" className="w-16 flex justify-center" />
          </div>
          <div className="flex justify-between">
            <h1>BALCÓN</h1>
            <input type="number" className="w-16 flex justify-center" />
          </div>
          <div className="flex justify-between">
            <h1>PET FRIENDLY</h1>
            <select className=" rounded-none  select-xs w-16 max-w-xs">
              <option>SI</option>
              <option>NO</option>
              <option>SOLO GATOS</option>
            </select>
          </div>
        </div>
        <h1 className="ml-5 mt-6 font-bold">AMENIDADES</h1>
        <div className="mt-5 font-semibold mx-5 text-sm">
          <div className="flex justify-between">
            <h1>GIMNASIO</h1>
            {check1 ? (
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-accent "
                onClick={() => cambioCheckF1()}
              />
            ) : (
              <input
                type="checkbox"
                checked=""
                className="checkbox checkbox-accent "
                onClick={() => cambioCheck1()}
              />
            )}
          </div>
        </div>
        <div className="mt-5 font-semibold mx-5 text-sm">
          <div className="flex justify-between">
            <h1>LUDOTECA</h1>
            <div className="form-control">
              {check2 ? (
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-accent "
                  onClick={() => cambioCheckF2()}
                />
              ) : (
                <input
                  type="checkbox"
                  checked=""
                  className="checkbox checkbox-accent "
                  onClick={() => cambioCheck2()}
                />
              )}
            </div>
          </div>
        </div>
        <div className="mt-5 font-semibold mx-5 text-sm">
          <div className="flex justify-between">
            <h1>ROOF GARDEN</h1>
            <div className="form-control">
              {check3 ? (
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-accent "
                  onClick={() => cambioCheckF3()}
                />
              ) : (
                <input
                  type="checkbox"
                  checked=""
                  className="checkbox checkbox-accent "
                  onClick={() => cambioCheck3()}
                />
              )}
            </div>
          </div>
        </div>
        <div className="mt-5 font-semibold mx-5 text-sm">
          <div className="flex justify-between">
            <h1>PLAYGROUND</h1>
            <div className="form-control">
              {check4 ? (
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-accent "
                  onClick={() => cambioCheckF4()}
                />
              ) : (
                <input
                  type="checkbox"
                  checked=""
                  className="checkbox checkbox-accent "
                  onClick={() => cambioCheck4()}
                />
              )}
            </div>
          </div>
        </div>
        <div className="mt-5 font-semibold mx-5 text-sm">
          <div className="flex justify-between">
            <h1>ALBERCA</h1>
            <div className="form-control">
              {check5 ? (
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-accent "
                  onClick={() => cambioCheckF5()}
                />
              ) : (
                <input
                  type="checkbox"
                  checked=""
                  className="checkbox checkbox-accent "
                  onClick={() => cambioCheck5()}
                />
              )}
            </div>
          </div>
        </div>
        <div className="mt-5 font-semibold mx-5 text-sm">
          <div className="flex justify-between">
            <h1>SALA DE EVENTOS</h1>
            <div className="form-control">
              {check6 ? (
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-accent "
                  onClick={() => cambioCheckF6()}
                />
              ) : (
                <input
                  type="checkbox"
                  checked=""
                  className="checkbox checkbox-accent "
                  onClick={() => cambioCheck6()}
                />
              )}
            </div>
          </div>
        </div>
        <div className="mt-5 font-semibold mx-5 text-sm">
          <div className="flex justify-between">
            <h1>CANCHAS</h1>
            <div className="form-control mb-5">
              {check7 ? (
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-accent "
                  onClick={() => cambioCheckF7()}
                />
              ) : (
                <input
                  type="checkbox"
                  checked=""
                  className="checkbox checkbox-accent "
                  onClick={() => cambioCheck7()}
                />
              )}
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 ml-5">
        {data.map((item, index) => {
          return (
            <div className="flex justify-center ">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={item.fotos} alt="Shoes" className="h-52 w-full" />
                </figure>
                <div className="card-body p-5">
                  <div>
                    <h1 className="font-bold">{item.name}</h1>
                  </div>
                  <div className="text-sm text-gray-700 font-semibold -mt-2">{item.address}</div>
                  <div className="text-verdes text-2xl font-bold -mt-2">
                    ${item.caract_properties[0].precio}.00
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explorer;
