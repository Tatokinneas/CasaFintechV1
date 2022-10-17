import React,{useState,useEffect} from "react";
import axios from "axios";
//import casa1 from "../assets/images/casita.png"


const Explorer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()

  useEffect(() => {
    axios.get("https://cliente.casafintech.com/propiedad").then((response) => {
      setData(response.data);
      setIsLoading(false);
    });
  }, []);



  if (isLoading) {
    return(

      <div>
      Cargando...
      </div>
    )
    
  }

  return <div className="flex">
    <div>
    <div className="card w-96 bg-gray-200 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">LOCALIDAD</h2>
  </div>
</div>
    </div>
    <div></div>
  </div>;
};

export default Explorer;
