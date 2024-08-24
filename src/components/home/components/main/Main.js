import "./Main.css";
import ContainCard from "../containCard/ContainCard";
import remeras from "../../../../remeras.json";
import pantalones from "../../../../pantalones.json";
import camperas from "../../../../camperas-buzos.json";
import buzos from "../../../../camperas-buzos.json";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const jackets = camperas.slice().reverse();
  const navigate = useNavigate();

  const handleTshirt = () => {
    navigate("/remeras");
  };
  const handlePants = () => {
    navigate("/pantalones");
  };
  const handleJacketsDivers = () => {
    navigate("/camperas-buzos");
  };
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
      <ContainCard items={buzos} name={"camperas-buzos"} />
      <br />
      <h2>
        Camperas <span></span>
        <button className="btnAll" onClick={handleJacketsDivers}>
          Ver todo
        </button>
      </h2>
      <ContainCard items={jackets} name={"camperas-buzos"} />
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
