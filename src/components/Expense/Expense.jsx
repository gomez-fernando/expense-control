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

const Expense = ({ expense }) => {
  const { category, name, quantity, id, date } = expense
  return (
    <div className="expense shadow">
      <div className="content-expense">
        <img src={iconsDictionary[category]} alt={categoriesDictionary[category]} />
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
  )
}

export default Expense