import "./Login.css";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

const Login = () => {
  return (
    <>
      <Nav />
      <div className="login">
        <div className="form-container">
          <p className="title">Iniciar Sesion</p>
          <form className="form">
            <div className="input-group">
              <label for="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="inputLogin"
                placeholder=""
              />
            </div>
            <div className="input-group">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="inputLogin"
                placeholder=""
              />
            </div>
            <button className="sign">Iniciar Sesion</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
