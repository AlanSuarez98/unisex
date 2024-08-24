import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import Payment from "../payment/Payment";
import "./Home.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Tutorial from "./components/tutorial/Tutorial";

const Home = () => {
  return (
    <>
      <Nav />
      <Header />
      <Tutorial />
      <Main />
      <Payment />
      <Footer />
    </>
  );
};

export default Home;
