import React, { useState } from "react";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import "./Dashboard.css";
import Icon from "../icon/Icon";
import {
  faCircleInfo,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
    description: "",
    talle: "",
    colors: "",
    price: "",
    category: "",
  });

  const [imagePreview, setImagePreview] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "imageUrl") {
      setImagePreview(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      nombre: formData.name,
      descripcion: formData.description,
      imagenUrl: formData.imageUrl,
      talles: formData.talle,
      precio: formData.price,
      categoria: formData.category,
      colores: formData.colors,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/producto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Basic " + btoa("unisex@support.tienda.online:Unisexsupport2024?"), // Autenticación básica
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        console.log("Producto agregado exitosamente");
      } else {
        console.error("Error al agregar producto");
      }
    } catch (error) {
      console.error("Error al conectar con el backend", error);
    }
  };

  return (
    <>
      <Nav />
      <div className="dashboard">
        <div className="container-dashboard">
          <h2>
            Dashboard
            <span className="btn-dashboard">
              <button id="info">
                <Icon icon={faCircleInfo} css={""} />
              </button>
              <button id="log-out">
                <Icon icon={faRightFromBracket} css={""} />
              </button>
            </span>
          </h2>
          <div className="container-input">
            <div className="box-input">
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Remera Fortnite"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <label htmlFor="imageUrl">Imagen Url:</label>
                <input
                  type="text"
                  name="imageUrl"
                  placeholder="Url Image"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                />
                <label htmlFor="description">Descripción:</label>
                <input
                  type="text"
                  name="description"
                  placeholder=""
                  value={formData.description}
                  onChange={handleInputChange}
                />
                <label htmlFor="talle">Talles:</label>
                <input
                  type="text"
                  name="talle"
                  placeholder="M - L - XL"
                  value={formData.talle}
                  onChange={handleInputChange}
                />
                <label htmlFor="colors">Colores:</label>
                <input
                  type="text"
                  name="colors"
                  placeholder="Azul, Rojo, Verde"
                  value={formData.colors}
                  onChange={handleInputChange}
                />
                <label htmlFor="price">Precio:</label>
                <input
                  type="text"
                  name="price"
                  placeholder="$50.000,49"
                  value={formData.price}
                  onChange={handleInputChange}
                />
                <label htmlFor="category">Categoria:</label>
                <input
                  type="text"
                  name="category"
                  placeholder="Remera"
                  value={formData.category}
                  onChange={handleInputChange}
                />
                <button type="submit" className="btn-add">
                  Agregar Producto
                </button>
              </form>
            </div>
            <div className="box-image">
              {imagePreview ? (
                <img src={imagePreview} alt="imagen" />
              ) : (
                <p>Imagen no cargada</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
