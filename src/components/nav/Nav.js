import "./Nav.css";
import logo from "../../assets/logo.png";
import Icon from "../icon/Icon";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div className="nav">
      <div className="navTop">
        <h2>
          Este es nuestro catálogo web. Para hacer tu pedido consulta stock y
          precio actualizado via whatsapp. Te atenderemos en horario comercial.
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
        <button>INICIO</button>
        <button>BUZOS | CAMPERAS</button>
        <button>REMERAS</button>
        <button>PANTALONES</button>
        <button>CONTACTO</button>
      </div>
    </div>
  );
};

export default Nav;
