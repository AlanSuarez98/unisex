import Nav from "../nav/Nav";
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
    </>
  );
};

export default Home;
