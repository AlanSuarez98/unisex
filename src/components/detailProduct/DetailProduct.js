import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import Payment from "../payment/Payment";
import "./DetailProduct.css";
import api from "../api/Api";
import Loader from "../loader/Loader";

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const fetchedProduct = await api.obtenerProductoPorId(id);
        if (!fetchedProduct) {
          setError("Producto no encontrado");
        } else {
          setProduct(fetchedProduct);
        }
      } catch (error) {
        setError("Error al cargar el producto");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <>
      <Nav />
      <div className="main-detail">
        <div className="product">
          <div className="img-product">
            <img src={product.imagenUrl} alt={product.nombre} />
          </div>
          <div className="text-product">
            <h2>{product.nombre}</h2>
            <p>{product.descripcion}</p>
            <p>Talles: {product.talles}</p>
            <p>Precio: {product.precio}</p>
            <button className="buttonBuy">
              <svg
                viewBox="0 0 16 16"
                className="bi bi-cart-check"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
              >
                <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
              </svg>
              <p className="textBuy">Comprar</p>
            </button>
          </div>
        </div>
      </div>
      <Payment />
      <Footer />
    </>
  );
};

export default DetailProduct;
