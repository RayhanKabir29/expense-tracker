import { useDispatch, useSelector } from "react-redux";
import Transaction from "./Transaction";
import { useEffect } from "react";
import { fetchTransactions } from "../../features/transaction/transactionSlice";

const Transactions = () => {
  const { transactions, isLoading, isError, error } = useSelector(
    (state) => state.transaction
  );
const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchTransactions())
  },[dispatch])
  let content = null;
  if (isLoading) content = <p>Loading....</p>;
  if (!isLoading && isError) content = <div>Error Occured....</div>;
  if (!isError && !isLoading && transactions?.length > 0)
    content = transactions?.map((transaction) => (
      <Transaction key={transaction?.id} transaction={transaction} />
    ));
  if (!isError && !isLoading && transactions?.length === 0)
    content = <div>{error}</div>;
  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </>
  );
};

export default Transactions;
