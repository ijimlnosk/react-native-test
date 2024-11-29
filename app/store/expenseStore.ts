import {create} from 'zustand';
import {ExpenseStore} from './type';

const useExpenseStore = create<ExpenseStore>((set, get) => ({
  expenses: [],
  addExpense: expense =>
    set(state => ({expenses: [...state.expenses, expense]})),
  getTotal: () =>
    get().expenses.reduce((sum, expense) => sum + expense.amount, 0),
}));

export default useExpenseStore;
