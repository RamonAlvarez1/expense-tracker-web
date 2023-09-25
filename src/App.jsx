import Balance from "./components/Balance";
import ExpenseChart from "./components/ExpenseChart";
import IncomeExpenses from "./components/IncomeExpenses";
import { Transactions } from "./components/transactions";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <main className="bg-zinc-950 text-white min-h-screen flex justify-center items-center">
        <div className="container mx-auto w-3/6 p-10">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-4">
            <div>
              <h1 className="text-4xl font-bold pb-5">Expense Tracker</h1>
              <IncomeExpenses />
              <Balance />
              <div className="pt-5">
                <Transactions.form />
              </div>
            </div>
            <div className="flex flex-col ">
              <ExpenseChart />
              <Transactions.list />
            </div>
          </div>
        </div>
      </main>
    </GlobalProvider>
  );
}

export default App;
