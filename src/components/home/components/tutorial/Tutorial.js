import "./Tutorial.css";
import img1 from "../../../../assets/hand.png";
import img2 from "../../../../assets/whatsapp.png";
import img3 from "../../../../assets/cara.png";

const Tutorial = () => {
  return (
    <div className="tutorial">
      <h1>¿ Cómo Funciona la web ?</h1>
      <h3>
        Es un proceso muy simple, navega en las categorías y entra en un
        articulo, vas a tener a la derecha abajo un botón de WhatsApp.{" "}
      </h3>
      <div className="boxCardTuto">
        <div className="cardTutorial">
          <div className="CircleTutorial" id="circle1">
            <img src={img1} alt="" />
          </div>
          <div className="circleNumber" id="circleNumb1">
            <p>1</p>
          </div>
          <h1 className="titleCardTuto" id="title1">
            Entra en la categoría
          </h1>
          <h3>Entra en la categoría que más te guste.</h3>
        </div>

        <div className="cardTutorial">
          <div className="CircleTutorial" id="circle2">
            <img src={img2} alt="" />
          </div>
          <div className="circleNumber" id="circleNumb2">
            <p>2</p>
          </div>
          <h1 className="titleCardTuto" id="title2">
            Whatsapp
          </h1>
          <h3>Hace click en el botón de whatsapp</h3>
        </div>

        <div className="cardTutorial">
          <div className="CircleTutorial" id="circle3">
            <img src={img3} alt="" />
          </div>
          <div className="circleNumber" id="circleNumb3">
            <p>3</p>
          </div>
          <h1 className="titleCardTuto" id="title3">
            Listo
          </h1>
          <h3>Te atendemos</h3>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
