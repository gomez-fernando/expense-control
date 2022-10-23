import { useState } from 'react'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import IconNewExpense from './img/icon_new_expense.svg'

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);

  const handleNewExpense = () => {
    setModal(true);
  }

  return (
    <div>
      <Header budget={budget} setBudget={setBudget} isValidBudget={isValidBudget} setIsValidBudget={setIsValidBudget} />

      {isValidBudget &&
        <div className="new-expense">
          <img
            src={IconNewExpense}
            alt="ícono nuevo gasto"
            onClick={handleNewExpense}
          />
        </div>
      }

      {!!modal &&
        <Modal setModal={setModal} />
      }
    </div>
  )
}

export default App
