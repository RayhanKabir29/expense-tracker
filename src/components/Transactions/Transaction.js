import EditImage from "../../assets/images/edit.svg";
import DeleteImage from "../../assets/images/delete.svg";
import { useDispatch } from "react-redux";
import { activeEdit, removeTransactions } from "../../features/transaction/transactionSlice";

const Transaction = ({ transaction }) => {
  const { name, amount, type,id } = transaction || {};
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(activeEdit(transaction))
  };

  const handleDelete =()=>{
    dispatch(removeTransactions(id))
  }

  return (
    <div>
      <li className={`transaction ${type}`}>
        <p>{name}</p>
        <div className="right">
          <p>৳ {amount}</p>
          <button className="link">
            <img className="icon" src={EditImage} alt="" onClick={handleEdit}/>
          </button>
          <button className="link">
            <img className="icon" src={DeleteImage} alt="" onClick={handleDelete}/>
          </button>
        </div>
      </li>
    </div>
  );
};

export default Transaction;
