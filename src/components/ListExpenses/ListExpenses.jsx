import Expense from "../Expense/Expense"

const ListExpenses = ({ expenses, setExpenseEdit, deleteExpense }) => {
  return (
    <div className="list-expenses container">
      <h2>{expenses.length ? 'Gastos' : 'No hay gastos registrados'}</h2>

      {expenses.map(expense => (
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