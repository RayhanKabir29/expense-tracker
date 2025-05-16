import { useSelector } from "react-redux";

const Balance = () => {
  const {transactions} = useSelector((state)=>state.transaction)
  const calculateIncom =()=>{
    let balance = 0;
    transactions?.forEach(transaction => {
      const {type,amount} = transaction;
      if(type === 'income'){
        balance +=amount
      }
      else{
        balance -=amount
      }
    });
    return balance;
  }

  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳</span>
       { transactions?.length > 0 ?<span>{calculateIncom(transactions)}</span>:<span>0</span>}
      </h3>
    </div>
  );
};

export default Balance;
