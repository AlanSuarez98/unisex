import CardItems from "../../../cardItems/CardItems";
import "./MainProduct.css";
import remera from "../../../../assets/iconRemera.png";
import pantalones from "../../../../assets/iconPantalon.png";
import campera from "../../../../assets/iconCampera.png";
import { Link } from "react-router-dom";

const MainProduct = ({ items, title }) => {
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
  return (
    <div className="main-product">
      <h2>
        {title}
        <img src={imgTitle} alt="icon categoria" />
      </h2>
      <div className="container-product">
        {items.map((item, index) => (
          <Link to={`/${urlName}/${item.id}`}>
            <CardItems
              title={item.nombre}
              description={item.Descripcion}
              image={item.imagenUrl}
              talles={item.talles.join(" - ")}
              price={item.precio}
              key={index}
            />
          </Link>
        ))}
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
