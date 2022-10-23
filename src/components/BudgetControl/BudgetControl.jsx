const BudgetControl = ({budget}) => {
  const formatQuantity = (quant) => {
    return quant.toLocaleString('es-ES', {
      style: 'currency',
      currency: 'EUR'
    })
  }

  return (
    <div className="container-budget container shadow two-columns">
      <div>
        <p>Gráfica aquí</p>
      </div>
      <div className="content-budget">
        <p>
          <span>Budget: </span> {formatQuantity(budget)}
        </p>
        <p>
          <span>Disponible: </span> {formatQuantity(0)}
        </p>
        <p>
          <span>Gastado: </span> {formatQuantity(0)}
        </p>
      </div>
    </div>
  )
}

export default BudgetControl