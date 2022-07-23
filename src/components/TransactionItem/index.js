// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDelete} = props
  const {type, amount, title, id} = transactionDetails

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="transaction-item">
      <p className="his-title">{title}</p>
      <p className="his-title">{amount}</p>
      <p className="his-title">{type}</p>
      <button
        testid="delete"
        onClick={onClickDelete}
        className="button-delete"
        type="button"
      >
        <img
          className="delete-icon"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
        />
      </button>
    </li>
  )
}
export default TransactionItem
