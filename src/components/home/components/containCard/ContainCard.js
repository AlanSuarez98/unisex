import CardItems from "../../../cardItems/CardItems";
import "./ContainCard.css";

const ContainCard = ({ items }) => {
  return (
    <div className="containCard">
      {items.slice(0, 4).map((item, index) => (
        <CardItems
          title={item.Nombre}
          description={item.Descripcion}
          image={item.Imagen}
          talles={item.Talles.join(" - ")}
          key={index}
        />
      ))}
    </div>
  );
};

export default ContainCard;
