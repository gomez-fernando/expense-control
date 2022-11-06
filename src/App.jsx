import { useState, useEffect } from 'react'
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
  const [expenseEdit, setExpenseEdit] = useState({})

  useEffect(() => {
    if (Object.keys(expenseEdit).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      }, 300);
    }
  }, [expenseEdit])


  const handleNewExpense = () => {
    setModal(true);
    setExpenseEdit({})

    setTimeout(() => {
      setAnimateModal(true);
    }, 300);
  }

  const saveExpense = (expense) => {
    if (expense.id) {
      const updatedExpenses = expenses.map(expenseState => expenseState.id === expense.id
        ? expense : expenseState)
      setExpenses(updatedExpenses);
      setExpenseEdit({});
    } else {
      expense.id = generateId();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);
    }

    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 300);
  }

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);

    setExpenses(updatedExpenses);
  }

  return (
    <div className={!!modal ? 'fix' : ''}>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        expenses={expenses}
      />

      {isValidBudget &&
        <>
          <main>
            <ListExpenses
              expenses={expenses}
              setExpenseEdit={setExpenseEdit}
              deleteExpense={deleteExpense}
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
          expenseEdit={expenseEdit}
          setExpenseEdit={setExpenseEdit}
        />
      }
    </div>
  )
}

export default App
