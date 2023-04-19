import CartWidget from "../CartWidget/CartWidget";
import Header from "../Header/Header";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Header />
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <NavLink to={"/"}>
              <img
                className="imgNav"
                src="../Img/marolio.png"
                alt="Logo de Marolio"
              />
            </NavLink>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-auto">
              <li className="nav-item nav-link text-center">
                <Link to={"/"} className="link">
                  Home
                </Link>
              </li>
              <li className="nav-item nav-link text-center">
                <Link className="link">Recetas</Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle link3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item text-center" href="#">
                      <Link to={"/categoria/1"} className="linkDrop">
                        Aceites
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-center" href="#">
                      <Link to={"/categoria/2"} className="linkDrop">
                        Fideos
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-center" href="#">
                      <Link to={"/categoria/3"} className="linkDrop">
                        Legumbres
                      </Link>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-link text-center">
                <Link className="link1">Historia </Link>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
