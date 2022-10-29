import { useEffect, useState } from "react"
import { formatQuantity } from "../../utils"

const BudgetControl = ({ budget, expenses }) => {
  const [available, setAvailable] = useState(budget);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce((total, expense) => expense.quantity + total, 0);
    const totalAvailable = budget - totalSpent;
    setSpent(totalSpent);
  }, [expenses])

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
          <span>Disponible: </span> {formatQuantity(available)}
        </p>
        <p>
          <span>Gastado: </span> {formatQuantity(spent)}
        </p>
      </div>
    </div>
  )
}

export default BudgetControl