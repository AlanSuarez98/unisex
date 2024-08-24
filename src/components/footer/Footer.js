/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Footer.css";
import logo from "../../assets/logo.png";
import Icon from "../icon/Icon";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.71) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const date = new Date();
  const year = date.getFullYear();
  const handleTshirt = () => {
    navigate("/remeras");
  };
  const handlePants = () => {
    navigate("/pantalones");
  };
  const handleJacketsdivers = () => {
    navigate("/camperas-buzos");
  };

  return (
    <div className="footer">
      <div className="top-footer">
        <div className="about-me">
          <img src={logo} alt="Logo" />
          <p>
            En <span>Unisex Indumentaria</span>, creemos en una moda inclusiva y
            sin etiquetas. Ofrecemos prendas versátiles y de calidad para todos,
            independientemente del género. Descubre nuestra colección y elige el
            estilo que mejor te represente.
          </p>
        </div>
        <div className="list-footer">
          <ul>
            <li className="title-list">Indumentaria</li>
            <li>
              <a onClick={handleTshirt}>Remeras</a>
            </li>
            <li>
              <a onClick={handlePants}>Pantalones</a>
            </li>
            <li>
              <a onClick={handleJacketsdivers}>Camperas - Buzos</a>
            </li>
          </ul>
        </div>
        <div className="contact-us">
          <h3>Contáctanos</h3>
          <div className="iconSocial">
            <button className="instagram">
              <Icon icon={faInstagram} css={""} />
            </button>
            <button className="whatsapp">
              <Icon icon={faWhatsapp} css={""} />
            </button>
            <button className="email">
              <Icon icon={faEnvelope} css={""} />
            </button>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <p>Todos los derechos reservados. {year} ©</p>
      </div>
      <button
        className={`to-top ${showButton ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <Icon icon={faArrowUp} css={""} />
      </button>
    </div>
  );
};

export default Footer;
