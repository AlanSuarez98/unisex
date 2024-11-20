import "./Header.css";
import wallpaper from "../../../../assets/fondoHeader.webp";

const Header = () => {
  return (
    <div className="header">
      <img src={wallpaper} alt="" />
      <div className="textHeader">
        <h1>UNISEX</h1>
        <h2>INDUMENTARIA</h2>
      </div>
    </div>
  );
};

export default Header;
