import { useState } from 'react';
import CloseBtn from '../../img/close.svg';
import Message from '../Message/Message';

const Modal = ({ setModal, animateModal, setAnimateModal, saveExpense }) => {
  const [msg, setMsg] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState('');

  const closeModal = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 300);
  }

  const handleSubmit = e => {
    e.preventDefault();

    if([name, category].includes('') || quantity === 0){
      setMsg('Todos los campos son obligatorios');
      setTimeout(() => {
        setMsg('');
      }, 3000);
      return;
    }

    saveExpense({name, quantity, category});
  }

  return (
    <div className="modal">
      <div className="close-modal">
        <img
          src={CloseBtn} alt="cerrar modal"
          onClick={closeModal}
        />
      </div>
      <form
        className={`form ${!!animateModal ? 'animate' : 'close'}`}
        onSubmit={handleSubmit}
      >
        <legend>Nuevo gasto</legend>
        <div className="field">
          <label htmlFor="name">Nombre Gasto</label>
          {msg && <Message type="error">{msg}</Message>}

          <input
            id="name"
            type="text"
            placeholder='Añade el nombre del gasto'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="quantity">Cantidad</label>

          <input
            id="quantity"
            type="number"
            placeholder='Añade la cantidad del gasto. Ej: 300'
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
          />
        </div>
        <div className="field">
          <label htmlFor="category">Categoría</label>

          <select
            name=""
            id="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="saving">Ahorro</option>
            <option value="food">Comida</option>
            {/* <option value="transport">Transporte</option> */}
            <option value="home">Casa</option>
            <option value="health">Salud</option>
            <option value="subscriptions">Suscripciones</option>
            <option value="leisure">Ocio</option>
            <option value="various">Gastos Varios</option>
          </select>
        </div>

        <input
          type="submit"
          value="Añadir Gasto"
        />
      </form>
    </div>
  )
}

export default Modal