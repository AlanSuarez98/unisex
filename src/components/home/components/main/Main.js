import { useEffect, useState } from "react";
import "./Main.css";
import ContainCard from "../containCard/ContainCard";
const Main = () => {
  const [remeras, setRemeras] = useState([]);

  useEffect(() => {
    fetch("/api/remeras")
      .then((response) => response.json())
      .then((data) => setRemeras(data));
  }, []);

  return (
    <div className="main">
      <div className="containRemeras">
        <h2>Remeras</h2>
        <ContainCard items={remeras} />
      </div>
    </div>
  );
};

export default Main;
