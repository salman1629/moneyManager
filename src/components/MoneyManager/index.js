import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeInput: 'Income',
    transactionsList: [],
  }

  onDelete = uniqueId => {
    const {transactionsList} = this.state

    const updatedList = transactionsList.filter(
      eachTransaction => eachTransaction.id !== uniqueId,
    )

    this.setState({transactionsList: updatedList})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput} = this.state

    const newListItem = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: typeInput,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newListItem],
      titleInput: '',
      amountInput: '',
    }))
  }

  onChangeType = event => {
    this.setState({typeInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  render() {
    const {transactionsList, titleInput, amountInput} = this.state

    return (
      <div className="main-bg-container">
        <div className="person-name-card">
          <h1>Hi,Rechard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <div className="bal-in-ex-container">
          <MoneyDetails balanceDetails={transactionsList} />
        </div>
        <div className="addTr-history-container">
          <div className="add-transaction-container">
            <h1 className="add-trn-heading">Add Transaction</h1>
            <form className="form-container" onSubmit={this.onAddTransaction}>
              <label className="label-input" htmlFor="titleInput">
                TITLE
              </label>
              <input
                value={titleInput}
                onChange={this.onChangeTitle}
                type="text"
                placeholder="TITLE"
                className="input"
                id="titleInput"
              />
              <label className="label-input" htmlFor="amountInput">
                AMOUNT
              </label>
              <input
                value={amountInput}
                onChange={this.onChangeAmount}
                type="text"
                placeholder="AMOUNT"
                className="input"
                id="amountInput"
              />
              <select className="select" onChange={this.onChangeType}>
                {transactionTypeOptions.map(eachType => (
                  <option key={eachType.optionId} value={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button className="button" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="his-heading">History</h1>
            <ul className="his-heads-item-list-container his-items-list">
              <li className="history-heads">
                <p className="title">Title</p>
                <p className="title">Amount</p>
                <p className="title">Type</p>
                <p className="delete">delete</p>
              </li>

              {transactionsList.map(eachTransaction => (
                <TransactionItem
                  transactionDetails={eachTransaction}
                  key={eachTransaction.id}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
