import React from 'react'
import NewBudget from '../NewBudget/NewBudget'
import BudgetControl from '../BudgetControl/BudgetControl';

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget, expenses, setExpenses }) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {isValidBudget ? (
        <BudgetControl
          budget={budget}
          expenses={expenses}
          setBudget={setBudget}
          setExpenses={setExpenses}
          setIsValidBudget={setIsValidBudget}
        />
      ) : (
        <NewBudget budget={budget} setBudget={setBudget} setIsValidBudget={setIsValidBudget} />
      )
      }
    </header>
  )
}

export default Header