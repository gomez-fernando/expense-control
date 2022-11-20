import Expense from "../Expense/Expense"

const ListExpenses = ({
  expenses,
  setExpenseEdit,
  deleteExpense,
  filter,
  filteredExpenses
}) => {
  const activeExpenses = filter ? filteredExpenses : expenses;
  return (
    <div className="list-expenses container">
      <h2>{activeExpenses.length ? 'Gastos' : `No hay gastos${
        filter ? ' en esta categoría' : ' registrados'
      }`}</h2>

      {activeExpenses.map(expense => (
        <Expense
          key={expense.id}
          expense={expense}
          setExpenseEdit={setExpenseEdit}
          deleteExpense={deleteExpense}
        />
      ))
      }
    </div>
  )
}

export default ListExpenses