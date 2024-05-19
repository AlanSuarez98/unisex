import "./CardItems.css";

const CardItems = ({ title, image, description, talles }) => {
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
            Talle: <span className="name">{talles}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItems;
