// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceDetails} = props
  console.log(balanceDetails)

  let Income = 0
  let Balence = 0
  let Expenses = 0

  const getingExpences = () => {
    let Ex = 0
    balanceDetails.forEach(eachTransaction => {
      if (eachTransaction.type === 'Expenses') {
        Ex += eachTransaction.amount
      }
    })
    Expenses = Ex
  }

  const getingIncome = () => {
    let In = 0
    balanceDetails.forEach(eachTransaction => {
      if (eachTransaction.type === 'Income') {
        In += eachTransaction.amount
      }
    })
    Income = In
  }

  const getingBalence = () => {
    let In = 0
    let Ex = 0
    balanceDetails.forEach(eachTransaction => {
      if (eachTransaction.type === 'Income') {
        In += eachTransaction.amount
      } else {
        Ex += eachTransaction.amount
      }
    })
    Balence = In - Ex
  }
  getingBalence()
  getingIncome()
  getingExpences()
  console.log(Balence)

  return (
    <li className="bg-container">
      <div className="balence-container">
        <img
          className="pic"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
        />
        <div className="your-balence">
          <p>Your Balance</p>
          <p testid="balanceAmount">RS {Balence}</p>
        </div>
      </div>
      <div className="income-container balence-container">
        <img
          className="pic"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
        />
        <div className="your-balence">
          <p>Your Income</p>
          <p testid="incomeAmount">RS {Income}</p>
        </div>
      </div>
      <div className="expenses-container balence-container">
        <img
          className="pic"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
        />
        <div className="your-balence">
          <p>Your Expenses</p>
          <p testid="expensesAmount">RS {Expenses}</p>
        </div>
      </div>
    </li>
  )
}

export default MoneyDetails
