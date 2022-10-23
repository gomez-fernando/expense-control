import { useState } from 'react'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import IconNewExpense from './img/icon_new_expense.svg'

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const handleNewExpense = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 300);
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
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
        />
      }
    </div>
  )
}

export default App
