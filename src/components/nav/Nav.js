import "./Nav.css";
import logo from "../../assets/logo.png";
import Icon from "../icon/Icon";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  const handleTshirt = () => {
    navigate("/remeras");
  };
  const handlePants = () => {
    navigate("/pantalones");
  };
  const handleJacketsdivers = () => {
    navigate("/camperas-buzos");
  };

  const handleContact = () => {
    navigate("/contacto");
  };

  return (
    <div className="nav">
      <div className="navTop">
        <h2>
          Este es nuestro catálogo web. Para hacer tu pedido consulta stock y
          precio actualizado via whatsapp.
        </h2>
      </div>
      <div className="navCenter">
        <img src={logo} alt="" />
        <div className="boxSearch">
          <input type="text" placeholder="Estoy buscando..." />
          <button>
            <Icon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className="navBottom">
        <button onClick={handleHome}>INICIO</button>
        <button onClick={handleTshirt}>REMERAS</button>
        <button onClick={handlePants}>PANTALONES</button>
        <button onClick={handleJacketsdivers}>BUZOS | CAMPERAS</button>
        <button onClick={handleContact}>CONTACTO</button>
      </div>
    </div>
  );
};

export default Nav;
