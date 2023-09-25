import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import AppReducer from "./AppReducer";

export const Context = createContext();
const initialState = {
  transactions: [],
};

export const useGlobalState = () => {
  return useContext(Context);
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    return localStorage.getItem("transactions")
      ? JSON.parse(localStorage.getItem("transactions"))
      : initialState;
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const deleteTransaction = (transaction) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: transaction.id });
  };

  const obj = useMemo(
    () => ({
      transactions: state.transactions,
      deleteTransaction,
      addTransaction,
    }),
    [state]
  );

  return <Context.Provider value={obj}>{children}</Context.Provider>;
};
