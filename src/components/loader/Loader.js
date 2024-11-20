import "./Loader.css";

const Loader = () => {
  return (
    <div className="boxLoader">
      <div className="loader">
        <span className="loader-text">loading</span>
        <span className="load"></span>
      </div>
    </div>
  );
};

export default Loader;
