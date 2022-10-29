import { useState } from "react";
import Message from "../Message/Message";

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
  const [msg, setMsg] = useState('');

  const handleBudget = (e) => {
    e.preventDefault();

    if(budget !== NaN && budget > 0){
      setMsg('');
      setIsValidBudget(true);
    }else{
      setMsg('presupuesto no válido');
      setIsValidBudget(false);
      return;
    }
    
  }

  return (
    <div className='container-budget container shadow'>
      <form onSubmit={handleBudget} className='form'>
        <div className='field'>
          <label htmlFor=''>Definir Presupuesto</label>
          <input
            type='number'
            className='new-budget'
            placeholder='Añade tu presupuesto'
            value={budget}
            onChange={e => setBudget(Number(e.target.value))}
          />
        </div>
        <input type='submit' value='Añadir' />

        {msg && <Message type="error" >{msg}</Message>}
      </form>
    </div>
  );
};

export default NewBudget;
