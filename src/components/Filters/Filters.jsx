import { useState, useEffect } from 'react'

const Filters = ({filter, setFilter}) => {
  return (
    <div className='filters shadow container'>
      <form >
        <div className="field">
          <label>Filtrar gastos</label>
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="">-- Seleccione categoría --</option>
            <option value="saving">Ahorro</option>
            <option value="food">Comida</option>
            <option value="home">Casa</option>
            <option value="health">Salud</option>
            <option value="subscriptions">Suscripciones</option>
            <option value="leisure">Ocio</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filters