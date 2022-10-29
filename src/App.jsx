import { useState } from 'react'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import { generateId } from './utils'
import IconNewExpense from './img/icon_new_expense.svg'
import ListExpenses from './components/ListExpenses/ListExpenses'

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const handleNewExpense = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 300);
  }

  const saveExpense = (expense) => {
    expense.id = generateId();
    expense.date = Date.now();
    setExpenses([...expenses, expense]);

    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 300);
  }

  return (
    <div>
      <Header budget={budget} setBudget={setBudget} isValidBudget={isValidBudget} setIsValidBudget={setIsValidBudget} />

      {isValidBudget &&
        <>
          <main>
            <ListExpenses
              expenses={expenses}
            />
          </main>
          <div className="new-expense">
            <img
              src={IconNewExpense}
              alt="ícono nuevo gasto"
              onClick={handleNewExpense}
            />
          </div>
        </>
      }

      {!!modal &&
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveExpense={saveExpense}
        />
      }
    </div>
  )
}

export default App
