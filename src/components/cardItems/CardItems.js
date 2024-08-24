import "./CardItems.css";

const CardItems = ({ title, image, description, talles, price }) => {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <div className="category">{title}</div>
        <div className="heading">
          {" "}
          {description}
          <div className="author">
            {" "}
            <h3>Talle: {talles}</h3>
            <h3>${price}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItems;
