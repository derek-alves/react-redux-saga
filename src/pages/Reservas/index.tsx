import React from "react";
import { MdAddCircle, MdDelete, MdRemoveCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  removeReserve,
  updateAmountReserve,
} from "../../store/modules/reserve/actions";
import "./style.css";

const Reservas: React.FC = () => {
  const reserves = useSelector((state: ReserveState) => state.reserve);
  const dispatch = useDispatch();

  const handleRemoveReserve = (id: Number) => dispatch(removeReserve(id));

  const decrementAmount = (reserve: Trip) =>
    dispatch(updateAmountReserve(reserve.id, reserve.amount - 1));

  const incrementAmount = (reserve: Trip) => {
    dispatch(updateAmountReserve(reserve.id, reserve.amount + 1));
  };
  return (
    <div>
      <h1 className="title">Voce solicitou {reserves.length} reservas</h1>

      {reserves.map((reserve: Trip) => (
        <div className="reservas">
          <img src={reserve.image} alt="Maceio" />
          <strong>{reserve.title}</strong>
          <div id="amount">
            <button type="button" onClick={() => decrementAmount(reserve)}>
              <MdRemoveCircle size={25} color="#191919" />
            </button>
            <input type="text" readOnly value={reserve.amount} />
            <button type="button" onClick={() => incrementAmount(reserve)}>
              <MdAddCircle size={25} color="#191919" />
            </button>
          </div>
          <button type="button" onClick={() => handleRemoveReserve(reserve.id)}>
            <MdDelete size={20} color="#191919" />
          </button>
        </div>
      ))}
      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </div>
  );
};

export default Reservas;
