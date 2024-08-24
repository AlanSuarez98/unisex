import "./Payment.css";
import transf from "../../assets/TransferenciaIcon.png";
import mp from "../../assets/MPIcon.webp";

const Payment = () => {
  return (
    <div className="payment">
      <h2>Metodos de pago</h2>
      <div className="box-payment">
        <img src={transf} alt="Transferencia" />
        <img src={mp} alt="Mercado Pago" />
      </div>
    </div>
  );
};

export default Payment;
