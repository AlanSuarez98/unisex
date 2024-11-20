import "./Main.css";
import ContainCard from "../containCard/ContainCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/Api"; // Asegúrate de importar correctamente
import Loader from "../../../loader/Loader";

const Main = () => {
  const [remeras, setRemeras] = useState([]);
  const [buzos, setBuzos] = useState([]);
  const [camperas, setCamperas] = useState([]);
  const [pantalones, setPantalones] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  const navigate = useNavigate();

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const productos = await api.obtenerProductos(); // Usamos la función que ya has creado
        setRemeras(
          productos.filter((producto) => producto.categoria === "Remera")
        );
        setBuzos(productos.filter((producto) => producto.categoria === "Buzo"));
        setCamperas(
          productos.filter((producto) => producto.categoria === "Campera")
        );
        setPantalones(
          productos.filter((producto) => producto.categoria === "Pantalon")
        );
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      } finally {
        setLoading(false); // Después de cargar, quitamos el loading
      }
    };
    cargarProductos();
  }, []);

  const handleTshirt = () => {
    navigate("/remeras");
  };
  const handlePants = () => {
    navigate("/pantalones");
  };
  const handleJacketsDivers = () => {
    navigate("/camperas-buzos");
  };

  if (loading) {
    return <Loader />; // Puedes poner un spinner o algo visual mientras cargan los datos
  }

  return (
    <div className="main">
      <div className="containRemeras">
        <h2>
          Remeras <span></span>
          <button className="btnAll" onClick={handleTshirt}>
            Ver todo
          </button>
        </h2>
        <ContainCard items={remeras} name={"remeras"} />
      </div>
      <br />
      <h2>
        Buzos <span></span>
        <button className="btnAll" onClick={handleJacketsDivers}>
          Ver todo
        </button>
      </h2>
      <ContainCard items={buzos} name={"buzos"} />
      <br />
      <h2>
        Camperas <span></span>
        <button className="btnAll" onClick={handleJacketsDivers}>
          Ver todo
        </button>
      </h2>
      <ContainCard items={camperas} name={"camperas"} />
      <br />
      <h2>
        Pantalones <span></span>
        <button className="btnAll" onClick={handlePants}>
          Ver todo
        </button>
      </h2>
      <ContainCard items={pantalones} name={"pantalones"} />
    </div>
  );
};

export default Main;
