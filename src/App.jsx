import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import { generateId } from './utils'
import IconNewExpense from './img/icon_new_expense.svg'
import ListExpenses from './components/ListExpenses/ListExpenses'
import Filters from './components/Filters/Filters'

function App() {
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  );

  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []
  );

  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenseEdit, setExpenseEdit] = useState({});
  const [filter, setFilter] = useState('');
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    if (Object.keys(expenseEdit).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      }, 300);
    }
  }, [expenseEdit])

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0);
  }, [budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? JSON.stringify([]));
  }, [expenses])

  useEffect(() => {
    const lsBudget = Number(localStorage.getItem('budget')) ?? 0;

    lsBudget > 0 && setIsValidBudget(true);
  }, [])

  useEffect(() => {
    if(filter) {
      const filteredExpenses = expenses.filter(expense => expense.category === filter);
      setFilteredExpenses(filteredExpenses)
    }
  }, [filter])

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
        setExpenses={setExpenses}
      />

      {isValidBudget &&
        <>
          <main>
            <Filters
              filter={filter}
              setFilter={setFilter}
            />
            <ListExpenses
              expenses={expenses}
              setExpenseEdit={setExpenseEdit}
              deleteExpense={deleteExpense}
              filter={filter}
              filteredExpenses={filteredExpenses}
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
