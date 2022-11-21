import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from "react-swipeable-list"
// import PropTypes from 'prop-types';
import "react-swipeable-list/dist/styles.css"
import { formatDate } from "../../utils"
import IconFood from "../../img/icon_food.svg"
import IconHealth from "../../img/icon_health.svg"
import IconHome from "../../img/icon_home.svg"
import IconLeisure from "../../img/icon_leisure.svg"
import IconSave from "../../img/icon_save.svg"
import IconSubscriptions from "../../img/icon_subscriptions.svg"

const iconsDictionary = {
  home: IconHome,
  health: IconHealth,
  subscriptions: IconSubscriptions,
  leisure: IconLeisure,
  saving: IconSave,
  food: IconFood,
}

const categoriesDictionary = {
  home: 'CASA',
  health: 'SALUD',
  subscriptions: 'SUSCRIPCIONES',
  leisure: 'OCIO',
  saving: 'AHORRO',
  food: 'COMIDA',
}

const Expense = ({ expense, setExpenseEdit, deleteExpense }) => {
  const { category, name, quantity, id, date } = expense;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setExpenseEdit(expense)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => deleteExpense(id)} destructive={true}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="expense shadow">
          <div className="content-expense">
            <img id="avoid-dragg" draggable="false" src={iconsDictionary[category]} alt={categoriesDictionary[category]} />
            <div className="description-expense">
              <p className="category">{categoriesDictionary[category]}</p>
              <p className="name-expense" >{name}</p>
              <p className="date-expense">
                Añadido el {' '}
                <span>{formatDate(date)}</span>
              </p>
            </div>
          </div>
          <p className="quantity-expense">{quantity} €</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense