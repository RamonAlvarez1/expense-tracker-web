import { AiOutlineClose } from "react-icons/ai";

function TransactionItem({ transaction, deleteTransaction }) {
  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between">
      <div className="flex">
        <p className="text-sm font-bold">{transaction.description}</p>
      </div>
      <div className="flex space-x-3">
        <p className="text-sm font-bold">RD$ {transaction.amount}</p>
        <button onClick={() => deleteTransaction(transaction)}>
          <AiOutlineClose />
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
