import { Link } from "react-router-dom";
import CardItems from "../../../cardItems/CardItems";
import "./ContainCard.css";

const ContainCard = ({ items, name }) => {
  return (
    <div className="containCard">
      {items.slice(0, 4).map((item, index) => (
        <Link to={`/${name}/${item.id}`}>
          <CardItems
            title={item.nombre}
            description={item.Descripcion}
            image={item.imagenUrl}
            talles={item.talles}
            price={item.precio}
            key={index}
          />
        </Link>
      ))}
    </div>
  );
};

export default ContainCard;
