export interface Expense {
  id: string;
  description: string;
  amount: number;
  date: string;
}

export interface ExpenseStore {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  getTotal: () => number;
}
