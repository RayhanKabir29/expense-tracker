import EditImage from "../../assets/images/edit.svg";
import DeleteImage from "../../assets/images/delete.svg";
import { useDispatch } from "react-redux";
import { activeEdit } from "../../features/transaction/transactionSlice";

const Transaction = ({ transaction }) => {
  const { name, amount, type } = transaction || {};
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(activeEdit(transaction))
  };

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
            <img className="icon" src={DeleteImage} alt="" />
          </button>
        </div>
      </li>
    </div>
  );
};

export default Transaction;
