import React from 'react'

const NewBudget = () => {
  return (
    <div className='container-budget container shadow'>
      <div className="form">
        <div className="field">
          <label htmlFor="">Definir Presupuesto</label>
          <input type="text" className='new-budget' placeholder='Añade tu presupuesto' />
        </div>
        <input type="submit" value="Añadir"/>
      </div>
    </div>
  )
}

export default NewBudget