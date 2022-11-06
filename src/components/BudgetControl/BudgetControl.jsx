import { useEffect, useState } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { formatQuantity } from "../../utils"
import "react-circular-progressbar/dist/styles.css"

const BudgetControl = ({ budget, expenses }) => {
  const [percentage, setPercentage] = useState(0);
  const [available, setAvailable] = useState(budget);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce((total, expense) => expense.quantity + total, 0);
    const totalAvailable = budget - totalSpent;

    // Calculate spent percentage
    const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(2);

    setSpent(totalSpent);
    setAvailable(totalAvailable);
    setTimeout(() => {
      setPercentage(newPercentage);
    }, 1000);
  }, [expenses])

  return (
    <div className="container-budget container shadow two-columns">
      <div>
        <CircularProgressbar
        styles={buildStyles({
          pathColor: '#3B82F6',
          trailColor: '#F5F5F5',
          textColor: '#3B82F6'
        })}
          value={percentage}
          text={`${percentage}% Gastado`}
        />
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