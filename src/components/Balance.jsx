import { useGlobalState } from "../context/GlobalState";

function Balance() {
  const { transactions } = useGlobalState();

  const total = transactions
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);

  return (
    <div className="flex justify-between">
      <h3>Your balance</h3>
      <h1 className="text-2xl font-bold">RD$ {total}</h1>
    </div>
  );
}

export default Balance;
