import EditImage from "../../assets/images/edit.svg";
import DeleteImage from "../../assets/images/delete.svg";

const Transaction = () => {
    return (
        <div>
            <li className="transaction income">
            <p>Earned this month</p>
            <div className="right">
              <p>৳ 100</p>
              <button className="link">
                <img className="icon" src={EditImage} alt="" />
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