import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";

function ExpenseChart() {
  const { transactions } = useGlobalState();

  const expenses = Math.abs(
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, item) => acc + item.amount, 0)
  );

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);

  let expensesPercentage = Math.round((expenses / income) * 100);

  if (isNaN(expensesPercentage) || expensesPercentage == Infinity)
    expensesPercentage = 100;

  const incomePercentage = 100 - expensesPercentage;

  return (
    <VictoryPie
      colorScale={["#ff0000", "#3cb371"]}
      data={[
        { x: "Expenses", y: expensesPercentage },
        { x: "Income", y: incomePercentage },
      ]}
      animate={{ duration: 200 }}
      labelComponent={<VictoryLabel angle={0} style={{ fill: "white" }} />}
      labelPlacement={"perpendicular"} //type: "parallel" || "perpendicular" || "vertical"
    />
  );
}

export default ExpenseChart;
