import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles.css";

const Header: React.FC = () => {
  const reserve = useSelector((state: ReserveState) => state.reserve);

  return (
    <header className="container">
      <Link to="/">
        <h1>HOME</h1>
      </Link>

      <Link className="reserva" to="/reservas">
        <div>
          <strong>Minhas Reservas</strong>
          <span>{reserve.length} reservas</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
