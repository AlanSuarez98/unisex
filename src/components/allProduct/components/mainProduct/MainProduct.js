import { useState, useEffect } from "react";
import api from "../../../api/Api"; // Ajusta la ruta según tu estructura de carpetas
import CardItems from "../../../cardItems/CardItems";
import "./MainProduct.css";
import remera from "../../../../assets/iconRemera.png";
import pantalones from "../../../../assets/iconPantalon.png";
import campera from "../../../../assets/iconCampera.png";
import { Link } from "react-router-dom";
import Loader from "../../../loader/Loader";

const MainProduct = ({ title }) => {
  const [items, setItems] = useState([]); // Para almacenar los productos
  const [loading, setLoading] = useState(true); // Para manejar el estado de carga
  const [error, setError] = useState(null); // Para manejar errores en la solicitud

  // Función para obtener los productos
  const fetchProducts = async () => {
    try {
      const products = await api.obtenerProductos(); // Obtener los productos del backend
      setItems(products);
      setLoading(false);
    } catch (error) {
      setError("Error al obtener los productos");
      setLoading(false);
    }
  };

  // Llamar a fetchProducts cuando el componente se monte
  useEffect(() => {
    fetchProducts();
  }, []); // La dependencia vacía [] asegura que solo se ejecute una vez al montar el componente

  // Determinar el ícono y la URL en base al título
  let imgTitle;
  let urlName;
  if (title.toLowerCase() === "remeras") {
    imgTitle = remera;
    urlName = "remeras";
  } else if (title.toLowerCase() === "pantalones") {
    imgTitle = pantalones;
    urlName = "pantalones";
  } else if (title.toLowerCase() === "camperas - buzos") {
    imgTitle = campera;
    urlName = "camperas-buzos";
  } else {
    imgTitle = "";
  }

  // Filtrar los productos según la categoría
  const filteredItems = items.filter((item) => {
    if (title.toLowerCase() === "remeras") {
      return item.categoria === "Remera";
    } else if (title.toLowerCase() === "pantalones") {
      return item.categoria === "Pantalon";
    } else if (title.toLowerCase() === "camperas - buzos") {
      return item.categoria === "Campera" || item.categoria === "Buzo";
    }
    return item.categoria.toLowerCase() === title.toLowerCase();
  });

  if (loading) {
    return <Loader />; // Muestra un mensaje mientras carga
  }

  if (error) {
    return <p>{error}</p>; // Muestra un mensaje si hay un error
  }

  return (
    <div className="main-product">
      <h2>
        {title}
        <img src={imgTitle} alt="icon categoria" />
      </h2>
      <div className="container-product">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Link to={`/${urlName}/${item.id}`} key={item.id}>
              <CardItems
                title={item.nombre}
                description={item.Descripcion}
                image={item.imagenUrl}
                talles={item.talles}
                price={item.precio}
              />
            </Link>
          ))
        ) : (
          <p>No se encontraron productos.</p> // Mensaje si no hay productos
        )}
      </div>
      <div className="box-pagination">
        <button className="buttonLeft">
          <span className="textLeft">Anterior</span>
          <svg
            className="arrowLeft"
            viewBox="0 0 448 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
          </svg>
        </button>
        <button className="button">
          <span className="text">Siguiente</span>
          <svg
            className="arrow"
            viewBox="0 0 448 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MainProduct;
