import { useGlobalState } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold w-full pb-1">History</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem
            deleteTransaction={deleteTransaction}
            transaction={transaction}
            key={transaction.id}
          />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
