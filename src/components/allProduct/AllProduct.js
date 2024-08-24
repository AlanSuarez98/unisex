import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import "./AllProduct.css";
import MainProduct from "./components/mainProduct/MainProduct";
import remeras from "../../remeras.json";
import pantalones from "../../pantalones.json";
import camperasBuzos from "../../camperas-buzos.json";

const AllProduct = () => {
  const { producto } = useParams();
  let title = "";
  let productData;
  if (producto === "remeras") {
    productData = remeras;
    title = "Remeras";
  } else if (producto === "pantalones") {
    productData = pantalones;
    title = "Pantalones";
  } else if (producto === "camperas-buzos") {
    productData = camperasBuzos;
    title = "Camperas - Buzos";
  } else {
    productData = [];
    title = "Error";
  }

  return (
    <>
      <Nav />
      <MainProduct items={productData} title={title} />
      <Footer />
    </>
  );
};

export default AllProduct;
