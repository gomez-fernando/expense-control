import { useState } from "react";
import Message from "../Message/Message";

const NewBudget = ({ budget, setBudget }) => {
  const [msg, setMsg] = useState('');

  const handleBudget = (e) => {
    e.preventDefault();
    console.log(Number(budget))

    // if(Number(budget) === NaN || Number(budget) < 0){
    //   setMsg('no valid')
    // }else{
    //   setMsg('ok')
    // }

    if(budget !== NaN && budget >= 0){
      setMsg('')
    }else{
      setMsg('no valid');
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
